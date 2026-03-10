import type { StatCardType } from '@/types/ui.type';
import React from 'react';

function StatCard({ label, value, icon, info, iconBg }: StatCardType) {
  return (
    <div className="border bg-surface rounded-xl shadow border-border px-4 p-6 flex flex-col ">
      {/* Title Value and Icon */}
      <div className="flex justify-between">
        {/* Title and Value */}
        <div>
          <div className="text-sm text-text-secondary font-medium">{label}</div>
          <div className="text-2xl font-bold mt-1">{value}</div>
        </div>
        {/* Icon */}
        <div
          className="size-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBg || 'rgba(0,0,255,0.08)' }}
        >
          <span>{icon}</span>
        </div>
      </div>
      {/* Info */}
      <div className="mt-4 text-sm text-text-secondary">{info}</div>
    </div>
  );
}

export default StatCard;
