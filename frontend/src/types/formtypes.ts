import type { ReactNode, Dispatch, SetStateAction } from 'react';
type InputFormPropType = {
  label: string;
  onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

type CheckBoxType = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

type DonationDetailsProp = {
  amount: string;
  error: string;
  onAmountChange: (value: string) => void;
};

type DonationFormContextType = {
  amount: string;
  setAmount: (value: string) => void;

  seva: string;
  setSeva: (value: string) => void;

  name: string;
  setName: (value: string) => void;

  phone: string;
  setPhone: (value: string) => void;

  error: string;
  handleAmountChange: (value: string) => void;

  sevaValue: string;
  setSevaValue: (value: string) => void;

  openUpwards: boolean;
  setOpenUpwards: Dispatch<SetStateAction<boolean>>;

  selectSeva: (value: string) => void;

  showDropdown: boolean;
  setShowDropdown: Dispatch<SetStateAction<boolean>>;

  toggleDropdown: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

export type {
  InputFormPropType,
  CheckBoxType,
  DonationDetailsProp,
  DonationFormContextType,
  ProviderProps,
};
