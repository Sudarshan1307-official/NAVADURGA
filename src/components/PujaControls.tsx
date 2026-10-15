import React from 'react';

interface PujaControlsProps {
  onReplayShloka: () => void;
  onBellAndAarti: () => void;
  onOfferFlowers: () => void;
  onOpenMandala: () => void;
  isPlayingAudio: boolean;
  isAartiActive: boolean;
  offeringCount: number;
  flowerName: string;
}

export const PujaControls: React.FC<PujaControlsProps> = ({
  onReplayShloka,
  onBellAndAarti,
  onOfferFlowers,
  onOpenMandala,
  isPlayingAudio,
  isAartiActive,
  offeringCount,
  flowerName,
}) => {
  return (
    <aside 
      aria-label="Sanctum Puja Controls"
      className="flex flex-col gap-2.5 sm:gap-3 z-30 select-none w-full max-w-[210px]"
    >
      {/* 1. Mandala Selector Button */}
      <button
        onClick={onOpenMandala}
        type="button"
        className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-[#25060b]/90 hover:bg-[#340b12] border border-[#e6b338]/40 hover:border-[#fae182] text-left transition-all duration-200 group shadow-lg"
        title="Open Full-Screen Sacred Mandala Portal with all 9 Goddesses"
      >
        <div className="flex flex-col">
          <span className="font-cinzel text-xs font-bold text-[#fae182] uppercase tracking-wider group-hover:text-white transition-colors">
            Mandala Selector
          </span>
          <span className="font-sans text-[10px] text-[#d6cebe]/70 tracking-wide mt-0.5">
            All 9 Shrines
          </span>
        </div>
        {/* Sacred Geometry Icon */}
        <div className="w-7 h-7 rounded-lg bg-[#140306] border border-[#e6b338]/30 flex items-center justify-center text-[#fae182] group-hover:scale-110 group-hover:border-[#fae182] transition-transform">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
        </div>
      </button>

      {/* 2. Replay Shloka Button */}
      <button
        onClick={onReplayShloka}
        type="button"
        disabled={isPlayingAudio}
        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border transition-all duration-200 group shadow-lg ${
          isPlayingAudio
            ? 'bg-[#e6b338]/25 border-[#fae182] text-[#fff7d6] shadow-[0_0_20px_rgba(230,179,56,0.5)] animate-pulse'
            : 'bg-[#25060b]/90 hover:bg-[#340b12] border-[#e6b338]/40 hover:border-[#fae182] text-left'
        }`}
        title="Play authentic Vedic recitation of current Goddess Dhyana Mantra"
      >
        <div className="flex flex-col">
          <span className="font-cinzel text-xs font-bold text-[#fae182] uppercase tracking-wider group-hover:text-white transition-colors">
            {isPlayingAudio ? 'Reciting Shloka...' : 'Replay Shloka'}
          </span>
          <span className="font-sans text-[10px] text-[#d6cebe]/70 tracking-wide mt-0.5">
            Vedic Sanskrit Chants
          </span>
        </div>
        {/* Audio / Note Icon */}
        <div className="w-7 h-7 rounded-lg bg-[#140306] border border-[#e6b338]/30 flex items-center justify-center text-[#fae182] group-hover:scale-110 transition-transform">
          {isPlayingAudio ? (
            <span className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 bg-[#fae182] h-2 animate-pulse" />
              <span className="w-0.5 bg-[#fae182] h-3 animate-pulse" />
              <span className="w-0.5 bg-[#fae182] h-1.5 animate-pulse" />
            </span>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          )}
        </div>
      </button>

      {/* 3. Bell & Aarti Button */}
      <button
        onClick={onBellAndAarti}
        type="button"
        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border transition-all duration-200 group shadow-lg ${
          isAartiActive
            ? 'bg-[#e6b338]/30 border-[#fae182] text-[#fff7d6] shadow-[0_0_25px_rgba(255,180,50,0.6)]'
            : 'bg-[#25060b]/90 hover:bg-[#340b12] border-[#e6b338]/40 hover:border-[#fae182] text-left'
        }`}
        title="Ring sanctum bell and perform sacred Aarti offering pradakshina"
      >
        <div className="flex flex-col">
          <span className="font-cinzel text-xs font-bold text-[#fae182] uppercase tracking-wider group-hover:text-white transition-colors">
            {isAartiActive ? 'Aarti In Motion...' : 'Bell & Aarti'}
          </span>
          <span className="font-sans text-[10px] text-[#d6cebe]/70 tracking-wide mt-0.5">
            Ghanta & Camphor Flame
          </span>
        </div>
        {/* Flame Icon */}
        <div className="w-7 h-7 rounded-lg bg-[#140306] border border-[#e6b338]/30 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.5 4.5 9 6.5 9 9.5C9 12 11 14 12 15C13 14 15 12 15 9.5C15 6.5 13.5 4.5 12 2M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.72 15.5 9.07 15.5 8C15.5 6.96 16.2 5.95 16.5 5C14.7 6.13 13.5 8.1 13.5 10.5C13.5 12.3 14.5 13.8 16 14.5C16.8 14.9 17.7 15.1 18.6 15C19.5 13.6 19.3 11.7 17.66 11.2Z" />
            <path d="M12 17.5C9 17.5 7 19.5 7 21H17C17 19.5 15 17.5 12 17.5Z" />
          </svg>
        </div>
      </button>

      {/* 4. Offer Flowers Button */}
      <button
        onClick={onOfferFlowers}
        type="button"
        className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-gradient-to-r from-[#e6b338] via-[#fae182] to-[#e6b338] text-[#120205] border border-[#fff7d6] shadow-[0_0_20px_rgba(230,179,56,0.4)] hover:shadow-[0_0_35px_rgba(250,225,130,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group text-left"
        title={`Offer holy ${flowerName} petals to the Goddess`}
      >
        <div className="flex flex-col">
          <span className="font-cinzel text-xs font-black uppercase tracking-wider">
            Offer Flowers
          </span>
          <span className="font-sans text-[10px] text-[#340b12] font-semibold tracking-wide mt-0.5">
            {flowerName}
          </span>
        </div>
        {/* Lotus Icon */}
        <div className="w-7 h-7 rounded-lg bg-[#340b12] text-[#fae182] flex items-center justify-center group-hover:rotate-12 transition-transform">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C12.5 5 14.5 7 17 8C14.5 9 13 11.5 12 14C11 11.5 9.5 9 7 8C9.5 7 11.5 5 12 3M6.5 12.5C7.8 13.7 9.8 14.5 12 14.5C14.2 14.5 16.2 13.7 17.5 12.5C18.8 14.7 18.5 17.5 16.5 19.5C14.2 21.8 9.8 21.8 7.5 19.5C5.5 17.5 5.2 14.7 6.5 12.5Z" />
          </svg>
        </div>
      </button>

      {/* Offerings Counter */}
      <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-[#140306]/60 border border-[#e6b338]/20 text-[10px] font-cinzel text-[#fae182]/85">
        <span>Sacred Offerings:</span>
        <span className="font-bold text-[#fff7d6]">{offeringCount.toLocaleString()}</span>
      </div>
    </aside>
  );
};
