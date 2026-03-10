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
export type { InputProps, ButtonProps, StatCardType, DonationStats };
