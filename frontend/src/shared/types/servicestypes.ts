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

export type { Service, SectionHeaderProps };
