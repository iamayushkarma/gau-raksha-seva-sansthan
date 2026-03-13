import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const herd = [
  {
    name: 'Gauri',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbuU4uDSLlLsr7xbi4l7lD1DpgVqEAlpl6Q42NRVroByNRgEg3rhARi7fcQ6QpS_kCGphwnC_NxmhE-CuW1ZWcTGXIvN5ZCCBCjiW5WaeL54vwX1BhSfqYN9097682fwu8FduzSbUCELHHl0GxEt6jPjFthwTgSk_y8bgsdrW19W4KtGDyNVBfC9xbAfmgwFsn1dIYjNK_bpXW9EVMTxTprEv7QnlwgPmzQ4zyxHWdrhTkH093i1fCsLMKsep6_-ati5F2uqarugU',
    storyKey: 'aboutPage.herd.gauri',
  },
  {
    name: 'Nandini',
    img: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800',
    storyKey: 'aboutPage.herd.nandini',
  },
  {
    name: 'Surabhi',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvaJSwa-M0xNyX5ez9e_WYqyS7dmYkLMN19IH8_XhLdQ-_OnTpSPCgzVD0yHJ_KhQp67qydrtjMhr_Rf4n-ZF3fCgI8w3l_LkYqcQKXHMGjsVkj-ApOEnZgKkxhYLJKHZjp-kOOBCEkLCK8Yud4PUY-luUyUeWUc358XKwedy6djFF0UZtMJ_Atz80QY0IM5DoazrPQNBv7hRbHoUGLAic1EmC8j5xhY_StN_05pe-_musMAC2I2tq9l2lDE4etArslS91t2efX0M',
    storyKey: 'aboutPage.herd.surabhi',
  },
  {
    name: 'Krishna',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEtWk2fdIXIkdQ02iL35b9pKh4vhnBucZ62aTsagSy8yYPwTHqaufHqypJ8IHIDAyfcBzhBEHCpLGzRnmI2EhxpXKbYoAKfbb8YT0H0kC2JFgF7koDNGQLi3zzxuiGVgwbZ4uMCPNZCq1Twzf32gKrT40kawlywrNTYu74msSfYIaAZWHmA5nh78A1VspOrNMIGdnGtT0OI52wtdKZxVp_6oMlxYf7sMPeoBIYbnjsQbS-q9GxLTPzrcs-Ivw1098Wm1-PzhiGE',
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
