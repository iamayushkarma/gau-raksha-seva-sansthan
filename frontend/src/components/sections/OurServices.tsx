import { SectionHeader } from '@/components/common/ourservices/SectionHeader';
import { MobileServiceCarousel } from '@/components/common/ourservices/MobileServiceCarousel';
import { DesktopServiceAccordion } from '@/components/common/ourservices/DesktopServiceAccordion';
import type { Service } from '@/types/servicestypes';

const services: Service[] = [
  {
    title: 'Cow Rescue',
    description:
      'Our rapid response team rescues abandoned cattle from streets and highways, providing immediate care.',
    img: 'https://placehold.co/600x800',
  },
  {
    title: 'Medical Care',
    description:
      '24/7 veterinary team providing emergency treatment, surgeries, and routine health checkups.',
    img: 'https://placehold.co/600x800',
  },
  {
    title: 'Daily Feeding',
    description:
      'Nutritious green fodder and mineral mixtures served daily to all our rescued cows.',
    img: 'https://placehold.co/600x800',
  },
  {
    title: 'Shelter Care',
    description:
      'Spacious, clean shelters equipped with fans, fresh water, and comfortable resting areas.',
    img: 'https://placehold.co/600x800',
  },
  {
    title: 'Adoption Program',
    description:
      'Sponsor a cow and contribute to their lifelong care with our adoption program.',
    img: 'https://placehold.co/600x800',
  },
];

export default function OurServices() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <SectionHeader
        badge="Our Seva"
        title="Services We Provide"
        description="Dedicated to the lifelong care, protection, and medical treatment of stray and abandoned cows. We provide a sanctuary where every soul is treated with reverence."
      />

      <div className="w-full max-w-7xl mx-auto px-4">
        <MobileServiceCarousel services={services} />
        <DesktopServiceAccordion services={services} />
      </div>
    </section>
  );
}
