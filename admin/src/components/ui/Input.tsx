import type { InputProps } from '@/types/ui.type';
import type { ReactNode } from 'react';

function Input({
  label,
  className,
  rightElement,
  ...props
}: InputProps & { rightElement?: ReactNode }) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-medium text-text-secondary mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...props}
          className={`${className} w-full px-3 py-2 ${rightElement ? 'pr-10' : ''} text-sm border border-border rounded-md bg-surface text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary`}
        />
        {rightElement && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
