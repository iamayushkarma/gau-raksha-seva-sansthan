import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '@/shared/components/ui/Button';

const herd = [
  {
    name: 'Gauri',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Indian_Cow.jpg',
    storyKey: 'aboutPage.herd.gauri',
  },
  {
    name: 'Nandini',
    img: 'https://live.staticflickr.com/2859/33633878870_944933cdbd_z.jpg',
    storyKey: 'aboutPage.herd.nandini',
  },
  {
    name: 'Surabhi',
    img: 'https://cdn.pixabay.com/photo/2017/08/04/09/39/indian-cow-2579534_960_720.jpg',
    storyKey: 'aboutPage.herd.surabhi',
  },
  {
    name: 'Krishna',
    img: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-37864,resizemode-75,msid-113815521/news/mumbai-news/maharashtra-declares-desi-cows-as-rajyamata-gomata-for-nutritional-milk-and-dung-benefits/native-indian-cow-breeds.jpg',
    storyKey: 'aboutPage.herd.krishna',
  },
];

const MeetTheHerd = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-20 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {t('aboutPage.herd.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            {t('aboutPage.herd.title')}
          </h2>
          <p className="text-text-secondary mt-3">
            {t('aboutPage.herd.description')}
          </p>
        </div>
        <Button
          icon={<ArrowRight size={18} />}
          className="inline-flex items-center gap-2 text-secondary font-bold bg-transparent hover:gap-4 transition-all"
        >
          {t('aboutPage.herd.view_all')}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {herd.map((cow) => (
          <div key={cow.name} className="group cursor-pointer">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-4">
              <img
                src={cow.img}
                alt={cow.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-text-primary">
                  {cow.name}
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-text-secondary italic">
              {t(cow.storyKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheHerd;
