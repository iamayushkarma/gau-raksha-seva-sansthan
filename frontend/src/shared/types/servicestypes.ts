interface Service {
  title: string;
  description: string;
  img: string;
}

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}
interface DonationOption {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  amount: string;
  image: string;
}

export type { Service, SectionHeaderProps, DonationOption };
