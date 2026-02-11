type InputFormPropType = {
  label: string;
  onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

type CheckBoxType = {
  id: string;
};

type DonationDetailsProp = {
  amount: string;
  error: string;
  onAmountChange: (value: string) => void;
};
export type { InputFormPropType, CheckBoxType, DonationDetailsProp };
