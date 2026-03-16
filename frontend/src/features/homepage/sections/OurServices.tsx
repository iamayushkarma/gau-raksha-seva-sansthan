import { SectionHeader } from '@/features/services/components/SectionHeader';
import { MobileServiceCarousel } from '@/features/services/components/MobileServiceCarousel';
import { DesktopServiceAccordion } from '@/features/services/components/DesktopServiceAccordion';
import type { Service } from '@/shared/types/servicestypes';
import { useTranslation } from 'react-i18next';

const serviceImages = [
  'https://pethelpful.com/.image/w_1080,q_auto:good,c_fill,ar_4:3,g_xy_center,x_516,y_384/NDowMDAwMDAwMDAwMDg3MzY3/black-cow-standing-pasture.jpg?arena_f_auto', // Cow rescue - cow on street India
  'https://www.livemint.com/lm-img/img/2025/03/23/600x338/2-0-344859234-cows-111-0_1680602151939_1742750582466.jpg', // Medical care - cow close up
  'https://static.toiimg.com/thumb/msid-91413546,width-1280,height-720,resizemode-72/91413546.jpg', // Daily feeding - cow grazing
  'https://saveindiancows.org/wp-content/uploads/2016/10/cow-shed-1-1024x680.jpg', // Shelter care - cows together
  'https://t4.ftcdn.net/jpg/05/32/77/03/360_F_532770371_mJZ8XJraWC0nOrHv1Ow6q9JAKyGjFeSO.jpg', // Adoption - cow portrait
];
export default function OurServices() {
  const { t } = useTranslation();
  const rawServices = t('services.list', { returnObjects: true }) as Service[];

  const services = rawServices.map((s, i) => ({
    ...s,
    img: s.img || serviceImages[i] || serviceImages[0],
  }));

  return (
    <section className="max-sm:mt-10 max-sm:pb-10 md:py-20 relative overflow-hidde bg-surface">
      <SectionHeader
        badge={t('services.badge')}
        title={t('services.title')}
        description={t('services.description')}
      />
      <div className="w-full max-w-7xl mx-auto px-4">
        <MobileServiceCarousel services={services} />
        <DesktopServiceAccordion services={services} />
      </div>
    </section>
  );
}
