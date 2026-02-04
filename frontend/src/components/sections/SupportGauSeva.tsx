import React from "react";
import DonateNow from "../common/button/DonateNow";

function SupportGauSeva() {
  return (
    <section className="mt-12 md:mt-10 lg:px-16 md:px-12 sm:px-8 px-4 py-6">
      <div className="flex flex-col lg:flex-row">
        {/* Video/image section */}
        <div className="lg:w-1/2 p-2 md:p-5">
          <img
            src="https://placehold.co/530x344"
            alt="Gau Mata being cared for at our shelter"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Content section */}
        <div className="lg:w-1/2 p-2 md:p-5 mt-4">
          <h2 className="font-bold text-3xl md:text-4xl text-text-primary">
            Support Gau Mata Through Your Help
          </h2>
          <p className="mt-6">
            Cows need care, food, and medical support to live safely and with
            dignity. At Gau Raksha Seva Sansthan, we work every day to rescue,
            treat, and protect cows in need.
          </p>
          <DonateNow />
        </div>
      </div>
    </section>
  );
}

export default SupportGauSeva;
