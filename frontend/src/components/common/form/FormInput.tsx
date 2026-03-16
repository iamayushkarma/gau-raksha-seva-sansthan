import type { InputFormPropType } from '@/types/formtypes';

export const FormInput = ({
  onChangeFunction,
  className,
  label,
  ...rest
}: InputFormPropType) => {
  return (
    <div className="flex flex-col">
      <label
        className="font-medium text-sm md:text-md"
        htmlFor={label.toLowerCase()}
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        onChange={onChangeFunction}
        className={`${className} placeholder:text-[0.79rem] w-full rounded-lg font-medium mt-2 border-2 border-text-primary/30 focus:border-text-secondary bg-surface px-4 py-2 focus:outline-none`}
        {...rest}
      />
    </div>
  );
};
