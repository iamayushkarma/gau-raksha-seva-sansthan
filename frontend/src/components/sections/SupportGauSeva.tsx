import React from "react";
import DonateNowShimmer from "../common/button/DonateNowShimmer";

function SupportGauSeva() {
  return (
    <section className="mt-12 md:mt-10 lg:px-16 md:px-12 sm:px-8 px-4 py-6">
      <div className="flex flex-col lg:flex-row">
        {/* Video/image section */}
        <div className="lg:w-1/2 p-2 md:p-5">
          <img
            src="https://placehold.co/1000x667" // (3:2 ratio)
            // srcSet="
            //     /images/support-gau-seva-sm.jpg 480w,   // 480x320 for mobile
            //     /images/support-gau-seva-md.jpg 768w,   // 768x512 for tablet
            //     /images/support-gau-seva-lg.jpg 1000w   // 1000x667 for desktop
            //   "
            sizes="(max-width: 768px) 100vw, 50vw"
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
          <DonateNowShimmer />
        </div>
      </div>
    </section>
  );
}

export default SupportGauSeva;
