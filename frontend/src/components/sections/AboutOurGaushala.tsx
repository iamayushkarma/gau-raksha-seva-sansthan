import { Shield, FileText } from 'lucide-react';
import DonateNow from '@/components/common/button/DonateNow';
import MissionVisionCards from '@/components/common/about/MissionVisionCards';
import OurJourney from '@/components/common/about/OurJourney';
import WhatMakesUsDifferent from '@/components/common/about/WhatMakesUsDifferent';
import HeroImageWithStats from '@/components/common/about/HeroImageWithStats';
import QuoteBlock from '@/components/common/about/QuoteBlock';

function AboutOurGaushala() {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-12 lg:py-20 px-4 lg:px-8">
        {/* Left Column: Content (7 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col space-y-10">
          {/* Header Block */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-1 w-12 bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              About Our{' '}
              <span className="text-primary relative inline-block">
                Gaushala
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              At{' '}
              <span className="font-semibold text-text-primary">
                Gau Raksha Seva Sansthan
              </span>
              , we believe that serving cows is serving humanity. Since our
              inception, we have been a sanctuary for abandoned, sick, and
              injured cows, providing them with a loving home, medical care, and
              dignity.
            </p>
          </div>

          {/* Info Cards / Mission & Vision */}
          <MissionVisionCards />
          {/* Our Journey Section */}
          <OurJourney />
          {/* What Makes Us Different */}
          <WhatMakesUsDifferent />

          {/* CTA & Trust Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <DonateNow />
            <div className="flex items-center gap-4 text-xs font-medium text-text-tertiary">
              <div className="flex items-center gap-1.5 min-w-36 bg-surface px-3 py-1.5 rounded-full border border-border">
                <Shield className="text-success w-4 h-4" />
                Registered NGO
              </div>
              <div className="flex items-center min-w-36 gap-1.5 bg-surface px-3 py-1.5 rounded-full border border-border">
                <FileText className="text-info w-4 h-4" />
                80G Tax Exempt
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 h-full flex flex-col gap-6 lg:sticky lg:top-8">
          <HeroImageWithStats /> {/* Main Hero Image */}
          <QuoteBlock /> {/* Quote Block */}
        </div>
      </div>
    </section>
  );
}

export default AboutOurGaushala;
