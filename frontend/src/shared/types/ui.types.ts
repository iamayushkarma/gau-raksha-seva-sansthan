interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}
type DonateNowProp = {
  className?: string;
  onClick?: () => void;
  scrollToId?: string;
  shimmer?: boolean;
  size?: 'sm' | 'md';
};

export type { ButtonProps, DonateNowProp };
