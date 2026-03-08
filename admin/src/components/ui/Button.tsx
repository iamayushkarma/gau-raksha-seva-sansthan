import type { ButtonProps } from '@/types/ui.type';
function Button({
  children,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${className} w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
