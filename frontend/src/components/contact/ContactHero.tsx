import { useTranslation } from 'react-i18next';

const ContactHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-20 py-8">
      <div
        className="relative overflow-hidden rounded-xl md:rounded-3xl min-h-[300px] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgCYqYooVnu3Q93EyEcLx47RksDQqOKBp7yKLi7XSkOCwVFQJPmXxXCdDnXtF-ZhxbX76xP0qfyLkoBJmStHYPyVajy2yAKx2BiKR-DMZN8ExlDCtYDERqWSn1pIK-FFcXTLN46yB5-VoSC6E_bl_wC0xYOwEsg0Um-q5_jZXYUTtsbLhjCcCFufUHdzjW11WqT2GEndfvaHcwhdl2vr5hoo7zQGOmupOEIdXK7KlvGVjjSHumTN7I725SNrwRgzQt8Mdt7itWEzI")`,
        }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
          {t('contactPage.hero.title')}
        </h1>
        <p className="text-white/90 text-lg max-w-2xl">
          {t('contactPage.hero.description')}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
