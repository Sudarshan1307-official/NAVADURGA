import React from 'react';

interface AartiEffectProps {
  isActive: boolean;
}

export const AartiEffect: React.FC<AartiEffectProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center overflow-visible">
      {/* Dynamic Aarti Glow Aura covering the sanctuary */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ff9900]/25 via-[#ffbb00]/20 to-transparent blur-3xl animate-pulse" />

      {/* Rotating Pradakshina Aarti Lamp Rig */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="animate-aarti-pradakshina flex flex-col items-center">
          {/* Ornate Indian Brass Aarti Lamp (Deepa) */}
          <div className="relative flex flex-col items-center">
            {/* Flames cluster */}
            <div className="flex items-end justify-center -space-x-1.5 mb-0.5">
              <div className="w-2 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fffda8] rounded-full animate-flame" />
              <div className="w-2.5 h-6 bg-gradient-to-t from-[#ff3300] via-[#ffbb00] to-[#ffffff] rounded-full animate-flame" />
              <div className="w-2 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fffda8] rounded-full animate-flame" />
            </div>

            {/* Brass Diya Vessel */}
            <div className="w-10 h-3.5 bg-gradient-to-r from-[#8f6208] via-[#fae182] to-[#8f6208] rounded-b-full border-t border-[#fff7d6] shadow-[0_0_20px_rgba(255,180,50,0.9)] flex items-center justify-center">
              <div className="w-6 h-1 bg-[#4a3000] rounded-full opacity-60" />
            </div>

            {/* Stem & Handle */}
            <div className="w-2 h-5 bg-gradient-to-b from-[#e6b338] to-[#8f6208] rounded-sm shadow-md" />
            <div className="w-6 h-1.5 bg-[#8f6208] rounded-full shadow-sm" />
          </div>

          {/* Devotional Caption Pill */}
          <span className="mt-1 px-2 py-0.5 rounded-full bg-[#120205]/90 border border-[#fae182]/60 text-[9px] font-cinzel text-[#fae182] uppercase tracking-widest whitespace-nowrap shadow-lg">
            Maha Mangala Aarti
          </span>
        </div>
      </div>
    </div>
  );
};
