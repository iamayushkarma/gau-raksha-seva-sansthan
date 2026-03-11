const SevaLoadingSkeleton: React.FC = () => (
  <section className="py-10 lg:px-16 md:px-12 sm:px-8 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-2xl bg-gray-100 animate-pulse h-72" />
      ))}
    </div>
  </section>
);

export default SevaLoadingSkeleton;
