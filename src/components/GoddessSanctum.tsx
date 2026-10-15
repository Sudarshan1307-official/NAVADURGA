import React from 'react';
import { NavadurgaGoddess } from '../data/navadurga';
import { OrbitalNodes } from './OrbitalNodes';
import { AartiEffect } from './AartiEffect';
import { PujaControls } from './PujaControls';

interface GoddessSanctumProps {
  goddess: NavadurgaGoddess;
  prevGoddess: NavadurgaGoddess;
  nextGoddess: NavadurgaGoddess;
  onPrev: () => void;
  onNext: () => void;
  onOpenMandala: () => void;
  onReplayShloka: () => void;
  onBellAndAarti: () => void;
  onOfferFlowers: () => void;
  isPlayingAudio: boolean;
  isAartiActive: boolean;
  offeringCount: number;
}

export const GoddessSanctum: React.FC<GoddessSanctumProps> = ({
  goddess,
  prevGoddess,
  nextGoddess,
  onPrev,
  onNext,
  onOpenMandala,
  onReplayShloka,
  onBellAndAarti,
  onOfferFlowers,
  isPlayingAudio,
  isAartiActive,
  offeringCount,
}) => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center px-4 md:px-8 py-4 sm:py-6 select-none overflow-hidden bg-sanctum-radial">
      {/* Corner Akhanda Jyoti Sanctum Oil Lamps */}
      <div className="absolute top-3 left-4 hidden lg:flex items-center gap-2 text-[#fae182]/80">
        <div className="w-2.5 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fff38a] rounded-full animate-flame" />
        <span className="text-[10px] font-cinzel uppercase tracking-widest">Sanctum Jyoti</span>
      </div>
      <div className="absolute top-3 right-4 hidden lg:flex items-center gap-2 text-[#fae182]/80">
        <span className="text-[10px] font-cinzel uppercase tracking-widest">{goddess.tithi}</span>
        <div className="w-2.5 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fff38a] rounded-full animate-flame" />
      </div>
      <div className="absolute bottom-3 left-4 hidden lg:flex items-center gap-2 text-[#fae182]/80">
        <div className="w-2.5 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fff38a] rounded-full animate-flame" />
        <span className="text-[10px] font-cinzel uppercase tracking-widest">{goddess.cosmicPlane.chakra}</span>
      </div>
      <div className="absolute bottom-3 right-4 hidden lg:flex items-center gap-2 text-[#fae182]/80">
        <span className="text-[10px] font-cinzel uppercase tracking-widest">Graha {goddess.cosmicPlane.graha}</span>
        <div className="w-2.5 h-4 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#fff38a] rounded-full animate-flame" />
      </div>

      {/* Main 3-Column Sanctum Layout: Left Navigation, Center Goddess + Orbit, Right Puja Controls */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 my-auto relative z-20">
        
        {/* =========================================
            LEFT COLUMN: Sanctum Index & Navigation
            ========================================= */}
        <section 
          aria-label="Sanctum Navigation Rail"
          className="w-full lg:w-64 flex flex-col gap-3 shrink-0 order-2 lg:order-1 items-center lg:items-start"
        >
          {/* Index Card */}
          <div className="w-full max-w-xs lg:max-w-none p-4 rounded-2xl bg-[#25060b]/85 border border-[#e6b338]/40 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-cinzel text-[#fae182] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#fae182] animate-pulse" />
                Sanctum Index
              </span>
              <span className="text-[10px] font-mono text-[#fae182]/70">
                {goddess.dayNumber} / 09
              </span>
            </div>

            {/* Large numeral & goddess title */}
            <div className="mt-2">
              <div className="font-cinzel text-3xl font-black text-gold-gradient tracking-tight">
                {goddess.dayNumber}
                <span className="text-sm font-normal text-[#e6b338]/60 ml-1">/ 09</span>
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#fff7d6] tracking-wide mt-0.5">
                {goddess.name}
              </h2>
              <p className="font-marcellus text-xs text-[#fae182]/80 tracking-wide mt-0.5">
                {goddess.tithi}
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e6b338]/40 to-transparent my-3" />

            {/* Short Dhyana Namavalli */}
            <p className="font-marcellus text-[10.5px] text-[#ede5d8]/85 italic leading-relaxed">
              "{goddess.shortMantra}"
            </p>
          </div>

          {/* Previous & Next Navigation Buttons */}
          <div className="w-full max-w-xs lg:max-w-none flex flex-row lg:flex-col gap-2">
            {/* Previous Button */}
            <button
              onClick={onPrev}
              type="button"
              className="flex-1 lg:flex-initial flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1c0408]/90 hover:bg-[#25060b] border border-[#e6b338]/40 hover:border-[#fae182] text-left transition-all duration-200 group shadow-md"
              title={`Navigate to previous manifestation: ${prevGoddess.name}`}
            >
              <div className="w-6 h-6 rounded-lg bg-[#25060b] border border-[#e6b338]/30 flex items-center justify-center text-[#fae182] group-hover:-translate-x-0.5 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-cinzel text-[#fae182]/70 uppercase tracking-widest">
                  Previous
                </span>
                <span className="text-[11px] font-cinzel font-bold text-[#ede5d8] group-hover:text-[#fae182] transition-colors truncate">
                  {prevGoddess.dayNumber} · {prevGoddess.name.replace('Maa ', '')}
                </span>
              </div>
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              type="button"
              className="flex-1 lg:flex-initial flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#25060b] to-[#340b12] hover:from-[#340b12] hover:to-[#480f1a] border border-[#e6b338]/60 hover:border-[#fae182] text-left transition-all duration-200 group shadow-md"
              title={`Navigate to next manifestation: ${nextGoddess.name}`}
            >
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-cinzel text-[#fae182] uppercase tracking-widest font-semibold">
                  Next Svarupa
                </span>
                <span className="text-[11px] font-cinzel font-bold text-[#fff7d6] group-hover:text-[#fae182] transition-colors truncate">
                  {nextGoddess.dayNumber} · {nextGoddess.name.replace('Maa ', '')}
                </span>
              </div>
              <div className="w-6 h-6 rounded-lg bg-[#140306] border border-[#e6b338]/40 flex items-center justify-center text-[#fae182] group-hover:translate-x-0.5 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="hidden lg:flex items-center gap-1.5 text-[9px] font-mono text-[#fae182]/60 px-1">
            <span>Keys [←] [→] to cycle sanctums</span>
          </div>
        </section>

        {/* =========================================
            CENTER COLUMN: Fixed Goddess Artwork & Orbital Nodes
            ========================================= */}
        <section 
          aria-label="Sanctum Sanctorum Garbhagriha"
          className="relative flex-1 flex items-center justify-center w-full min-h-[520px] sm:min-h-[580px] order-1 lg:order-2 my-4 lg:my-0"
        >
          {/* Subtle Ambient Mandala Background Glow */}
          <div className="absolute w-[440px] h-[440px] md:w-[540px] md:h-[540px] rounded-full bg-radial from-[#e6b338]/15 via-[#25060b]/40 to-transparent pointer-events-none blur-2xl" />

          {/* Sacred Yantra Background Overlay Geometry */}
          <svg 
            className="absolute w-[460px] h-[460px] md:w-[560px] md:h-[560px] text-[#e6b338]/20 pointer-events-none" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="48" strokeDasharray="2 3" />
            <circle cx="50" cy="50" r="39" />
            <polygon points="50,15 80,72 20,72" />
            <polygon points="50,85 80,28 20,28" />
            <polygon points="50,22 75,68 25,68" />
            <polygon points="50,78 75,32 25,32" />
          </svg>

          {/* THE 4 CIRCULAR NODES ORBITING AROUND HER */}
          <OrbitalNodes goddess={goddess} />

          {/* AARTI EFFECT (When Bell & Aarti active) */}
          <AartiEffect isActive={isAartiActive} />

          {/* STATIONARY GODDESS ARTWORK FIXED AT THE CENTRE */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Ornate Arch (Prabhavali / Torana) Container with consistent framing */}
            <div className="relative w-[230px] sm:w-[260px] md:w-[280px] h-[330px] sm:h-[370px] md:h-[400px] rounded-t-[140px] rounded-b-3xl p-1.5 bg-gradient-to-b from-[#fff7d6] via-[#fae182] to-[#8f6208] shadow-[0_0_40px_rgba(230,179,56,0.45)] border border-[#fae182]">
              {/* Inner Arch Sanctum */}
              <div className="relative w-full h-full rounded-t-[136px] rounded-b-2xl overflow-hidden bg-[#120205] border border-[#e6b338]/40 shadow-inner">
                {/* Full-length goddess artwork with consistent aspect ratio */}
                <img
                  src={goddess.image}
                  alt={goddess.name}
                  className="w-full h-full object-cover object-center scale-100 transition-transform duration-700 ease-out"
                />

                {/* Ambient Golden Backlight Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100305] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Bottom Plaque inside arch */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#100305] via-[#100305]/90 to-transparent flex flex-col items-center text-center">
                  <span className="font-cinzel text-[8.5px] tracking-[0.25em] text-[#fae182] uppercase font-bold">
                    {goddess.sanskritTitle}
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-black text-[#fff7d6] tracking-wider uppercase drop-shadow mt-0.5">
                    {goddess.name}
                  </h3>
                  <span className="font-marcellus text-[9px] text-[#e6b338]/90 tracking-wide mt-0.5 line-clamp-1">
                    {goddess.epithet}
                  </span>
                </div>
              </div>

              {/* Top Trishula Finial Emblem on Arch */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#120205] border border-[#fae182] flex items-center justify-center text-[#fae182] shadow-md">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 2H13V9C15.2 9.15 17 11 17 13.25V14H15V13.25C15 12.1 14.1 11.15 13 11V22H11V11C9.9 11.15 9 12.1 9 13.25V14H7V13.25C7 11 8.8 9.15 11 9V2M5 6H7V10H5V6M17 6H19V10H17V6Z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            RIGHT COLUMN: Puja Ritual Controls
            ========================================= */}
        <section 
          aria-label="Sanctum Puja Rail"
          className="w-full lg:w-64 flex flex-col items-center lg:items-end shrink-0 order-3"
        >
          <PujaControls
            onReplayShloka={onReplayShloka}
            onBellAndAarti={onBellAndAarti}
            onOfferFlowers={onOfferFlowers}
            onOpenMandala={onOpenMandala}
            isPlayingAudio={isPlayingAudio}
            isAartiActive={isAartiActive}
            offeringCount={offeringCount}
            flowerName={goddess.flower}
          />
        </section>
      </div>
    </div>
  );
};
