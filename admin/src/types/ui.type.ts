import type {
  InputHTMLAttributes,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  rightElement?: ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

// type for dashboard home page card
type StatCardType = {
  label: string;
  value: string | number | undefined;
  icon: ReactNode;
  info?: string;
  iconBg?: string;
};

// type for donation
type DonationStats = {
  total_donors: number;
  total_amount: number;
  total_sevas: number;
  anonymous_count: number;
};
export interface DonationOption {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  amount: string;
  image: string;
}
type FormData = Omit<DonationOption, 'id'>;
export const emptyForm: FormData = {
  title_en: '',
  title_hi: '',
  description_en: '',
  description_hi: '',
  amount: '',
  image: '',
};
export type { InputProps, ButtonProps, StatCardType, DonationStats, FormData };
