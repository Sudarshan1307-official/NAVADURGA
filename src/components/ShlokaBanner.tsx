import React, { useState } from 'react';
import { soundEngine } from '../utils/audio';

interface ShlokaBannerProps {
  shloka: string;
  meaning: string;
  goddessName: string;
  isPlayingAudio: boolean;
  onPlayShloka: () => void;
}

export const ShlokaBanner: React.FC<ShlokaBannerProps> = ({
  shloka,
  meaning,
  goddessName,
  isPlayingAudio,
  onPlayShloka
}) => {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <section 
      aria-label="Sanskrit Dhyana Shloka Inscription Banner"
      className="relative z-30 w-full bg-[#120205] border-y border-[#e6b338]/30 shadow-inner overflow-hidden select-none"
    >
      <div className="flex items-center">
        {/* Left Fixed Badge: Dhyana Shloka & Replay */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#25060b] border-r border-[#e6b338]/30 shrink-0 z-10 shadow-lg">
          {/* Trishula / Sacred Icon */}
          <div className="w-5 h-5 rounded-full border border-[#fae182]/50 flex items-center justify-center text-[#fae182]">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 2H13V9C15.2 9.15 17 11 17 13.25V14H15V13.25C15 12.1 14.1 11.15 13 11V22H11V11C9.9 11.15 9 12.1 9 13.25V14H7V13.25C7 11 8.8 9.15 11 9V2M5 6H7V10H5V6M17 6H19V10H17V6Z" />
            </svg>
          </div>

          <span className="font-cinzel text-[11px] font-bold text-[#fae182] uppercase tracking-widest whitespace-nowrap hidden sm:inline">
            Dhyana Shloka
          </span>

          {/* Quick Replay Button */}
          <button
            onClick={onPlayShloka}
            disabled={isPlayingAudio}
            title={`Listen to authentic recitation for ${goddessName}`}
            aria-label={`Play Dhyana Shloka for ${goddessName}`}
            type="button"
            className={`flex items-center gap-1.5 px-2 py-1 rounded border text-[10px] font-cinzel font-semibold tracking-wider uppercase transition-all ${
              isPlayingAudio 
                ? 'border-[#fae182] bg-[#e6b338]/30 text-[#fff7d6] animate-pulse' 
                : 'border-[#e6b338]/40 bg-[#140306] text-[#fae182] hover:bg-[#e6b338]/20'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fae182] animate-ping" />
                <span>Chanting</span>
              </>
            ) : (
              <>
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Replay</span>
              </>
            )}
          </button>

          {/* Meaning Toggle Button */}
          <button
            onClick={() => setShowMeaning(!showMeaning)}
            title="Toggle English Translation of Shloka"
            type="button"
            className="text-[10px] font-sans tracking-wide text-[#d6cebe] hover:text-[#fae182] underline underline-offset-2 ml-1"
          >
            {showMeaning ? 'Hide Meaning' : 'View Meaning'}
          </button>
        </div>

        {/* Center: Railway-Station Destination Display Style Continuous Ticker */}
        <div 
          className="relative flex-1 overflow-hidden py-2 cursor-pointer group"
          onClick={() => setShowMeaning(!showMeaning)}
          title="Click to view full English meaning"
        >
          {/* Subtle edge fading for authentic illuminated ticker glass */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#120205] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#120205] to-transparent z-10 pointer-events-none" />

          <div className="animate-shloka-ticker flex items-center">
            {/* Displaying twice to form an infinite seamless loop */}
            <span className="font-marcellus text-xs md:text-sm tracking-[0.25em] text-[#fae182] uppercase px-4 whitespace-nowrap">
              {shloka} &nbsp; ❖ &nbsp; {shloka} &nbsp; ❖ &nbsp;
            </span>
            <span className="font-marcellus text-xs md:text-sm tracking-[0.25em] text-[#fae182] uppercase px-4 whitespace-nowrap">
              {shloka} &nbsp; ❖ &nbsp; {shloka} &nbsp; ❖ &nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Expandable Shloka Translation & Meaning Box */}
      {showMeaning && (
        <div className="px-6 py-3 bg-[#20050a] border-t border-[#e6b338]/20 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex-1">
            <span className="font-cinzel text-[#fae182] uppercase tracking-wider font-semibold mr-2">
              Translation ({goddessName}):
            </span>
            <span className="text-[#ede5d8] font-sans italic leading-relaxed">
              "{meaning}"
            </span>
          </div>
          <button
            onClick={() => setShowMeaning(false)}
            className="text-[11px] font-cinzel text-[#fae182]/80 hover:text-[#fae182] uppercase tracking-widest shrink-0"
          >
            [Close]
          </button>
        </div>
      )}
    </section>
  );
};
