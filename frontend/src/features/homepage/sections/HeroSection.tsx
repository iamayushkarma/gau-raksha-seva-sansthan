function HeroSection() {
  return (
    <section className="relative w-full h-125 overflow-hidden">
      {/* Mobile image */}
      <div
        className="
            absolute inset-0
            bg-[url('/images/mobile-hero-section-gaushala-image.jpg')]
            md:bg-[url('/images/banner5770740.webp')]
            bg-cover bg-center bg-no-repeat
        "
      />
      {/* <div
        className="
            absolute inset-0
            bg-[linear-gradient(to_top,#fff5b3_0%,rgba(255,245,179,0.6)_35%,transparent_70%)]
            md:bg-[linear-gradient(to_right,#fff5b3_0%,#fff5b3_35%,rgba(255,245,179,0.5)_50%,transparent_100%)]
        "
      /> */}
    </section>
  );
}

export default HeroSection;
