import React from 'react';

function OurJourney() {
  return (
    <div className="relative pl-8 border-l-2 border-primary/20 space-y-6">
      <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
      <div>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Our Journey
        </h3>
        <p className="text-text-secondary">
          Started in 2015 with just 2 rescued cows in a small shed, we have
          grown into a family of over 500+ cattle, supported by a dedicated team
          of veterinarians and volunteers. Our journey is a testament to the
          community's trust and support.
        </p>
      </div>
    </div>
  );
}

export default OurJourney;
