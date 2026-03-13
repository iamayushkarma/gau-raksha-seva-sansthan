import type { ButtonProps } from '@/types/ui.types';

function Button({ children, icon, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={` ${className} rounded-lg inline-flex items-center gap-2 bg-primary text-text-primary font-semibold px-4 py-3 text-sm hover:opacity-90 transition-opacity group`}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}

export default Button;
