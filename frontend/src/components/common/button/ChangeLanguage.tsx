import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';
import { options } from '@/config/language-options';

function ChangeLanguage() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface-light text-sm cursor-pointer hover:border-primary transition-colors duration-200"
      >
        <Languages className="size-4 text-text-secondary" />
        <span className="text-text-primary">
          {i18n.language === 'hi' ? 'हि' : 'EN'}
        </span>
        <ChevronDown
          className={`size-3.5 text-text-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+4px)] z-50 w-28 rounded-lg border border-border bg-surface-light shadow-md flex flex-col p-1 transition-all duration-200 origin-top-right ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {options.map((opt) => (
          <button
            key={opt.code}
            onClick={(e) => {
              e.stopPropagation();
              i18n.changeLanguage(opt.code);
              setOpen(false);
            }}
            className={`px-3 py-1.5 rounded-md text-sm text-left cursor-pointer transition-colors duration-150
              ${
                i18n.language === opt.code
                  ? 'bg-text-primary text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-divider'
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChangeLanguage;
