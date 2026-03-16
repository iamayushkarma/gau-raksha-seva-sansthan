import { ChevronsUpDown } from 'lucide-react';
import { useRef, useLayoutEffect, useEffect } from 'react';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import { useTranslation } from 'react-i18next';
import { FormInput } from '@/features/donation/components/FormInput';

function GauSevaSelect() {
  const {
    showDropdown,
    setShowDropdown,
    sevaValue,
    setSevaValue,
    openUpwards,
    setOpenUpwards,
  } = useDonationFormContext();
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sevas = t('donationForm.seva_options', {
    returnObjects: true,
  }) as string[];

  function toggleDropdown() {
    setShowDropdown((value) => !value);
  }

  function selectSeva(seva: string) {
    setSevaValue(seva);
    setShowDropdown(false);
  }

  useEffect(() => {
    function detectOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('click', detectOutsideClick);
    return () => document.removeEventListener('click', detectOutsideClick);
  }, []);

  useLayoutEffect(() => {
    if (!showDropdown) return;
    const container = containerRef.current;
    const dropdown = dropdownRef.current;
    if (!container || !dropdown) return;
    const containerRect = container.getBoundingClientRect();
    const dropdownHeight = dropdown.offsetHeight;
    const spaceBelow = window.innerHeight - containerRect.bottom;
    const spaceAbove = containerRect.top;
    setOpenUpwards(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
  }, [showDropdown]);

  return (
    <div ref={containerRef} className="relative">
      {/* FormInput used as the trigger — readOnly + cursor-pointer */}
      <div className="relative" onClick={toggleDropdown}>
        <FormInput
          label={t('donationForm.select_seva')}
          value={sevaValue}
          readOnly
          placeholder={t('donationForm.select_seva')}
          onChangeFunction={() => {}}
          className="cursor-pointer pr-10"
        />
        <ChevronsUpDown className="size-5 text-text-secondary pointer-events-none absolute bottom-2.5 right-3" />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className={`absolute z-20 w-full rounded-lg border border-text-primary/30 bg-background px-0.5 py-1.5 text-[0.9rem] font-medium shadow-lg
            ${openUpwards ? 'bottom-full mb-1.5' : 'top-full mt-1'}`}
        >
          {sevas.map((seva) => (
            <div
              key={seva}
              onClick={() => selectSeva(seva)}
              className="cursor-pointer rounded-md hover:bg-text-secondary/10 px-3 py-1.5 transition-colors duration-150"
            >
              {seva}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GauSevaSelect;
