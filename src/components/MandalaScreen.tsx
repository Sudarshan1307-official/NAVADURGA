import React, { useState } from 'react';
import { NAVADURGA_DATA, NavadurgaGoddess, UNIVERSAL_NAVADURGA_SHLOKA } from '../data/navadurga';
import { soundEngine } from '../utils/audio';

interface MandalaScreenProps {
  selectedGoddessId: number;
  onSelectGoddess: (goddessId: number) => void;
  onBackToSanctum: () => void;
}

export const MandalaScreen: React.FC<MandalaScreenProps> = ({
  selectedGoddessId,
  onSelectGoddess,
  onBackToSanctum,
}) => {
  const [hoveredGoddess, setHoveredGoddess] = useState<NavadurgaGoddess | null>(null);

  // Position the 9 Goddesses evenly around a circle (360 / 9 = 40 degrees each)
  // 1. Shailaputri at 0 deg (Top / 12 o'clock)
  // 2. Brahmacharini at 40 deg
  // 3. Chandraghanta at 80 deg
  // 4. Kushmanda at 120 deg
  // 5. Skandamata at 160 deg
  // 6. Katyayani at 200 deg
  // 7. Kalaratri at 240 deg
  // 8. Mahagauri at 280 deg
  // 9. Siddhidatri at 320 deg
  const mandalaRadius = 310; // Desktop radius in px

  const handleSelect = (id: number) => {
    soundEngine.playTempleBell(528, 2.5);
    onSelectGoddess(id);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between p-4 sm:p-6 bg-mandala-radial select-none overflow-x-hidden">
      {/* Top Bar inside Mandala Screen */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-b border-[#e6b338]/20 pb-4">
        {/* Back Button */}
        <button
          onClick={onBackToSanctum}
          type="button"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25060b]/90 hover:bg-[#340b12] border border-[#e6b338]/40 hover:border-[#fae182] text-xs font-cinzel font-bold text-[#fae182] uppercase tracking-widest transition-all duration-200 shadow-lg"
          title="Return to the Active Deity Sanctum"
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Temple Sanctum</span>
        </button>

        {/* Center Title Display */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
            <span className="font-cinzel text-[10px] sm:text-xs text-[#fae182] tracking-[0.25em] uppercase">
              Adi Parashakti Mahayantra
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-gold-gradient tracking-widest uppercase">
            Sri Navadurga Sacred Mandala
          </h2>
          <p className="font-marcellus text-xs text-[#d6cebe]/80 mt-0.5">
            Select Any Holy Manifestation to Enter Her Sanctum Directly
          </p>
        </div>

        {/* Quick Legend / Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c0408]/80 border border-[#e6b338]/30 text-[10px] font-cinzel text-[#fae182] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#ffaa00] animate-ping" />
          <span>9 Divine Shrines</span>
        </div>
      </div>

      {/* Main Symmetrical Circular Mandala Arena */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4 py-8 lg:py-16 min-h-[680px]">
        {/* Background Sacred Geometric Rays SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="mandalaRays" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fae182" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#e6b338" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a87913" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Symmetrical Concentric Circles */}
          <circle cx="500" cy="400" r="140" stroke="#e6b338" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.4" />
          <circle cx="500" cy="400" r="220" stroke="#e6b338" strokeWidth="0.75" fill="none" opacity="0.3" />
          <circle cx="500" cy="400" r="310" stroke="#e6b338" strokeWidth="1.2" strokeDasharray="3 6" fill="none" opacity="0.5" />
          <circle cx="500" cy="400" r="390" stroke="#fae182" strokeWidth="0.5" fill="none" opacity="0.2" />

          {/* 9 Radial Golden Beams from Center (500, 400) */}
          {NAVADURGA_DATA.map((_, i) => {
            const angleDeg = i * 40 - 90; // Start at top (-90 deg)
            const rad = (angleDeg * Math.PI) / 180;
            const x2 = 500 + Math.cos(rad) * 310;
            const y2 = 400 + Math.sin(rad) * 310;
            return (
              <line 
                key={i} 
                x1="500" 
                y1="400" 
                x2={x2} 
                y2={y2} 
                stroke="#fae182" 
                strokeWidth="1" 
                strokeDasharray="2 4" 
                opacity="0.45" 
              />
            );
          })}
        </svg>

        {/* Center Golden Medallion with Om (ॐ) */}
        <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none">
          {/* Ambient Radiance Halo */}
          <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#e6b338]/30 via-[#ffaa00]/25 to-transparent blur-3xl animate-pulse" />

          {/* Multi-layered Sacred Disc */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#2a060d] to-[#120205] border-2 border-[#fae182] shadow-[0_0_40px_rgba(250,225,130,0.5)] flex flex-col items-center justify-center p-3">
            <div className="w-24 h-24 md:w-30 md:h-30 rounded-full border border-[#e6b338]/40 bg-[#1c0408] flex items-center justify-center shadow-inner">
              <span className="font-marcellus text-4xl md:text-5xl text-[#fae182] drop-shadow-[0_0_15px_rgba(250,225,130,0.8)] select-none">
                ॐ
              </span>
            </div>
            <span className="absolute -top-3 px-2 py-0.5 rounded-full bg-[#120205] border border-[#e6b338]/50 text-[8px] font-cinzel text-[#fae182] uppercase tracking-widest">
              Adi Shakti
            </span>
            <span className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-[#120205] border border-[#e6b338]/50 text-[8px] font-cinzel text-[#fae182] uppercase tracking-widest">
              Mahayantra
            </span>
          </div>
        </div>

        {/* Desktop 360-degree Radial Positions / Mobile Circular Mosaic */}
        <div className="w-full xl:absolute xl:inset-0 z-30 flex items-center justify-center pointer-events-none">
          {/* Desktop circular positioning container */}
          <div className="hidden xl:block relative w-[1000px] h-[800px]">
            {NAVADURGA_DATA.map((goddess, index) => {
              const angleDeg = index * 40 - 90; // 0 is top
              const rad = (angleDeg * Math.PI) / 180;
              const x = 500 + Math.cos(rad) * mandalaRadius;
              const y = 400 + Math.sin(rad) * mandalaRadius;

              const isSelected = goddess.id === selectedGoddessId;

              return (
                <div
                  key={goddess.id}
                  className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}px`, top: `${y}px` }}
                >
                  <button
                    onClick={() => handleSelect(goddess.id)}
                    onMouseEnter={() => setHoveredGoddess(goddess)}
                    onMouseLeave={() => setHoveredGoddess(null)}
                    type="button"
                    className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-110 focus:outline-none"
                    title={`Enter ${goddess.name} Sanctum (${goddess.tithi})`}
                  >
                    {/* Goddess Circular Portrait Frame */}
                    <div
                      className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#ffffff] via-[#fae182] to-[#e6b338] shadow-[0_0_35px_rgba(250,225,130,0.9)] scale-110'
                          : 'bg-gradient-to-b from-[#fae182]/40 via-[#e6b338]/30 to-[#25060b] shadow-[0_0_15px_rgba(230,179,56,0.3)] group-hover:shadow-[0_0_25px_rgba(250,225,130,0.7)]'
                      }`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden relative bg-[#140306] border border-[#fae182]/40">
                        <img
                          src={goddess.image}
                          alt={goddess.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hover Overlay with Enter prompt */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                          <span className="font-cinzel text-[8.5px] text-[#fae182] font-bold tracking-widest uppercase">
                            Darshan →
                          </span>
                        </div>
                      </div>

                      {/* Active Indicator Ring */}
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#fae182] border-2 border-[#120205] shadow-md flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#120205]" />
                        </span>
                      )}
                    </div>

                    {/* Goddess Labels */}
                    <div className="mt-2 flex flex-col items-center">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-cinzel font-semibold uppercase tracking-wider ${
                        isSelected 
                          ? 'bg-[#fae182] text-[#120205]' 
                          : 'bg-[#25060b]/90 text-[#fae182] border border-[#e6b338]/30 group-hover:border-[#fae182]'
                      }`}>
                        {goddess.dayNumber} · {goddess.name.replace('Maa ', '')}
                      </span>
                      <span className="font-sans text-[10px] text-[#d6cebe]/80 mt-0.5">
                        {goddess.vahana.name.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Responsive Grid Fallback */}
          <div className="xl:hidden w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-4 pointer-events-auto px-4">
            {NAVADURGA_DATA.map((goddess) => {
              const isSelected = goddess.id === selectedGoddessId;
              return (
                <button
                  key={goddess.id}
                  onClick={() => handleSelect(goddess.id)}
                  type="button"
                  className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-[#340b12] border-[#fae182] shadow-[0_0_20px_rgba(250,225,130,0.4)]'
                      : 'bg-[#1c0408]/80 hover:bg-[#25060b] border-[#e6b338]/30'
                  }`}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-[#fae182]/50 mb-2 shadow-md">
                    <img src={goddess.image} alt={goddess.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-cinzel text-[#fae182] uppercase tracking-wider font-bold">
                    {goddess.dayNumber} · {goddess.name}
                  </span>
                  <span className="text-[9px] font-sans text-[#d6cebe]/70 mt-0.5">
                    {goddess.tithi}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Inscription: Universal Navadurga Shloka Transliteration */}
      <div className="relative z-20 max-w-5xl mx-auto w-full mt-4 pt-3 border-t border-[#e6b338]/20 text-center">
        <span className="text-[10px] font-cinzel text-[#fae182]/80 uppercase tracking-widest block mb-1">
          Markandeya Purana · Navadurga Dhyana Stotram
        </span>
        <p className="font-marcellus text-xs md:text-sm text-[#fae182] tracking-wider leading-relaxed px-4 max-w-4xl mx-auto">
          {UNIVERSAL_NAVADURGA_SHLOKA}
        </p>
        <p className="font-sans italic text-[11px] text-[#d6cebe]/75 mt-1 max-w-3xl mx-auto">
          "First Shailaputri, second Brahmacharini, third Chandraghanta, fourth Kushmanda, fifth Skandamata, sixth Katyayani, seventh Kalaratri, eighth Mahagauri, and ninth Siddhidatri — thus are the Nine Durgas renowned."
        </p>
      </div>
    </div>
  );
};
