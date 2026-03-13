import type { ButtonProps } from '@/types/ui.types';

function Button({ children, icon, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={` ${className} rounded-lg inline-flex items-center gap-2 bg-primary text-text-primary font-semibold text-sm px-4 lg:px-5 py-2 lg:py-3 hover:opacity-90 transition-opacity group`}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}

export default Button;
