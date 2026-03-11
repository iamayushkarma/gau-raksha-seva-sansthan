import { useEffect, useState } from 'react';
import { sevaApi } from '@/config/seva-api';
import { emptyForm } from '@/types/ui.type';
import type { DonationOption, FormData } from '@/types/ui.type';
import SevaCard from '@/components/common/SevaCard';
import SevaCreateCard from '@/components/common/SevaCreateCard';
import SevaModal from '@/components/common/SevaModal';
import SevaLoadingSkeleton from '@/components/common/SevaLoadingSkeleton';
import toast from 'react-hot-toast';

const SevaManagement: React.FC = () => {
  const [options, setOptions] = useState<DonationOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null);
  const [editTarget, setEditTarget] = useState<DonationOption | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = () => {
    setLoading(true);
    sevaApi
      .getAll()
      .then(setOptions)
      .catch((err) => setError(err?.response?.data?.message || err.message))
      .finally(() => setLoading(false));
  };

  const openCreate = () => {
    setForm(emptyForm);
    setEditTarget(null);
    setModalMode('create');
  };

  const openEdit = (option: DonationOption) => {
    setForm({
      title_en: option.title_en,
      title_hi: option.title_hi || '',
      description_en: option.description_en,
      description_hi: option.description_hi || '',
      amount: option.amount,
      image: option.image || '',
    });
    setEditTarget(option);
    setModalMode('edit');
  };

  const closeModal = () => {
    setModalMode(null);
    setEditTarget(null);
    setForm(emptyForm);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.title_en.trim() || !form.description_en.trim() || !form.amount) {
      toast.error(
        'Title (English), Description (English) and Amount are required.'
      );
      return;
    }
    setSaving(true);

    const currentMode = modalMode;
    try {
      if (currentMode === 'create') {
        await sevaApi.create(form);
      } else if (currentMode === 'edit' && editTarget) {
        await sevaApi.update(editTarget.id, form);
      }
      closeModal();
      toast.success(
        currentMode === 'create' ? 'Seva created!' : 'Seva updated!'
      );
      fetchOptions();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (option: DonationOption) => {
    try {
      await sevaApi.delete(option.id);
      setOptions((prev) => prev.filter((o) => o.id !== option.id));
      toast.success(`"${option.title_en}" deleted.`);
    } catch {
      toast.error('Failed to delete. Please try again.');
    }
  };

  if (loading) return <SevaLoadingSkeleton />;

  if (error) {
    return (
      <section className="py-10 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20 gap-3">
          <span className="text-4xl">⚠️</span>
          <p className="text-gray-700 font-medium">
            Failed to load seva options
          </p>
          <p className="text-sm text-gray-400">{error}</p>
          <button
            onClick={fetchOptions}
            className="mt-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="p-6 bg-background min-h-screen">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Seva Management
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            Manage and monitor active cow welfare services and rescue
            operations.
          </p>
        </div>

        <section className="mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {options.map((option) => (
                <SevaCard
                  key={option.id}
                  option={option}
                  onEdit={openEdit}
                  onDelete={handleDelete}
                />
              ))}
              <SevaCreateCard onClick={openCreate} />
            </div>
          </div>
        </section>

        {modalMode && (
          <SevaModal
            mode={modalMode}
            form={form}
            saving={saving}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default SevaManagement;
