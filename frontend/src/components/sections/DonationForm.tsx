import GauSevaSelect from '../common/form/GauSevaSelect';

function DonationForm() {
  return (
    <section
      className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-linear-to-t
            from-[rgba(92,77,26,0.45)]
            via-[rgba(255,222,77,0.22)]
            to-transparent"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold text-text-primary mb-4">
        Support Gau Seva and help us care for cows in need
      </h2>
      {/* Form */}
      <div className="bg-background rounded-lg w-full flex flex-row p-8">
        <div className="md:w-1/2 flex flex-row">
          <form action="">
            <div className="flex flex-col md:flex-row md:gap-3">
              <div>
                <label
                  htmlFor="seva"
                  className="block mb-2 font-medium text-text-primary"
                >
                  Select Seva
                </label>

                <GauSevaSelect />
              </div>
              <div className="max-sm:mt-4">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  min={0}
                  className="
                    w-full
                    rounded-lg
                    mt-2
                    border border-border
                    bg-surface
                    px-4 py-2
                    text-text-primary
                    focus:outline-none
          focus:border-text-primary
                "
                />
              </div>
            </div>
          </form>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default DonationForm;
