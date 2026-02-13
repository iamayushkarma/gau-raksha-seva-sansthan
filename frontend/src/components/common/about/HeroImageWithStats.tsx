import React from 'react';

function HeroImageWithStats() {
  return (
    <div className="relative group h-125 lg:h-150 w-full rounded-2xl overflow-hidden shadow-lg">
      <img
        alt="A gentle cow being fed by hand in a sunny outdoor setting"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-c1JCF9cBWaXdh7WId7JWDbUtFDEb1408ey8PUqiu-iNu4nqtOem3UnbTIRqAY1d36UPJzARQ5EMvol3oYg1gNCMRbk78Z9u6-cIfq7o8Gi3Juv9tRscc6vETq9wpEY3agKPtpbwWH8VhqZg_qW3s2ozktVq672w5FtBQ4CUAnhqmclxpE01u-MFvBMtJoXfMSXTP88mJvEwzJm9mv7ezJsqwYnIN-Fn4mpblCBQa_tTmplSE7vJt-TKdECxvUK8u5G6_vTJewYA"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-text-primary/60 via-transparent to-transparent opacity-80" />
      {/* Floating Stats Card on Image */}
      <div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur-sm p-5 rounded-xl border-l-4 border-primary shadow-lg">
        <div className="flex justify-between items-center text-center divide-x divide-divider">
          <div className="px-2 w-1/3">
            <span className="block text-2xl font-bold text-primary">500+</span>
            <span className="text-xs uppercase tracking-wide text-text-tertiary font-semibold">
              Cows Rescued
            </span>
          </div>
          <div className="px-2 w-1/3">
            <span className="block text-2xl font-bold text-primary">15+</span>
            <span className="text-xs uppercase tracking-wide text-text-tertiary font-semibold">
              Acres Land
            </span>
          </div>
          <div className="px-2 w-1/3">
            <span className="block text-2xl font-bold text-primary">24/7</span>
            <span className="text-xs uppercase tracking-wide text-text-tertiary font-semibold">
              Vet Care
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImageWithStats;
