import React, { useState } from 'react';
import { NAVADURGA_DATA } from '../data/navadurga';
import { soundEngine } from '../utils/audio';

interface OpeningScreenProps {
  onEnterJourney: () => void;
  onSelectGoddessDirect: (id: number) => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  onEnterJourney,
  onSelectGoddessDirect,
}) => {
  const [showSvarupasModal, setShowSvarupasModal] = useState(false);

  const handleEnter = () => {
    soundEngine.playTempleBell(440, 3.0);
    onEnterJourney();
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between items-center text-center px-4 md:px-8 py-8 md:py-14 select-none overflow-hidden bg-sanctum-radial">
      {/* Decorative Ornate Corner Accents */}
      <div className="fixed top-16 left-3 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-[#e6b338]/40 pointer-events-none z-20 flex items-start justify-start p-1.5">
        <div className="w-2.5 h-2.5 border-t border-l border-[#fae182]" />
      </div>
      <div className="fixed top-16 right-3 w-12 h-12 md:w-20 md:h-20 border-t-2 border-r-2 border-[#e6b338]/40 pointer-events-none z-20 flex items-start justify-end p-1.5">
        <div className="w-2.5 h-2.5 border-t border-r border-[#fae182]" />
      </div>

      {/* Main Central Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto my-auto py-6">
        {/* Top Floating Golden Mandala with Trishula */}
        <div className="mb-4 inline-flex items-center justify-center animate-pulse">
          <div className="relative flex items-center justify-center">
            {/* Spinning Concentric Mandala Rings */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#fae182]/40 flex items-center justify-center bg-radial from-[#e6b338]/20 to-transparent shadow-[0_0_30px_rgba(230,179,56,0.3)]">
              <svg 
                className="w-14 h-14 md:w-16 md:h-16 text-[#fae182] animate-spin-mandala" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor"
              >
                <circle cx="50" cy="50" r="46" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" strokeWidth="1" />
                <polygon points="50,15 80,72 20,72" strokeWidth="1" />
                <polygon points="50,85 80,28 20,28" strokeWidth="1" />
                <circle cx="50" cy="50" r="10" strokeWidth="1" />
              </svg>
            </div>

            {/* Sacred Trishula Centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center text-[#fae182]">
              <svg className="w-7 h-7 drop-shadow-[0_0_8px_rgba(250,225,130,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 2H13V9C15.2 9.15 17 11 17 13.25V14H15V13.25C15 12.1 14.1 11.15 13 11V22H11V11C9.9 11.15 9 12.1 9 13.25V14H7V13.25C7 11 8.8 9.15 11 9V2M5 6H7V10H5V6M17 6H19V10H17V6Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Devotional Pre-title Ribbon */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e6b338]/20 via-[#340b12]/80 to-[#e6b338]/20 border border-[#fae182]/35 mb-4 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
          <span className="text-xs md:text-sm font-cinzel font-semibold tracking-[0.3em] text-[#fae182] uppercase">
            Adi Parashakti Mahatmya
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
        </div>

        {/* Grand Majestic Title: NAVADURGA */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest uppercase text-gold-gradient drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] mb-3">
          NAVADURGA
        </h1>

        {/* Subtitle: Nine Forms. One Divine Shakti. */}
        <p className="font-marcellus text-xl sm:text-2xl md:text-3xl tracking-[0.18em] text-[#fff7d6] font-normal mb-5 drop-shadow-md">
          Nine Forms. One Divine Shakti.
        </p>

        {/* Devotional Invocation Couplet */}
        <p className="font-sans italic text-sm sm:text-base md:text-lg max-w-2xl text-[#d6cebe] font-light leading-relaxed mb-8 sm:mb-10 text-balance px-4 opacity-90">
          “Journey through the celestial sanctum of the Nine Divine Mothers — from Shailaputri to Siddhidatri.”
        </p>

        {/* Divine Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-lg">
          {/* Primary Action Button: Enter the Divine Journey */}
          <button
            onClick={handleEnter}
            type="button"
            className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center px-8 py-4 text-[#120205] font-cinzel font-bold text-sm tracking-[0.2em] uppercase overflow-hidden rounded-xl bg-gradient-to-r from-[#fae182] via-[#e6b338] to-[#c68f18] shadow-[0_0_30px_rgba(230,179,56,0.5)] hover:shadow-[0_0_50px_rgba(250,225,130,0.85)] hover:-translate-y-0.5 transition-all duration-300 border border-[#fff7d6]"
          >
            {/* Button Light Sheen Animation */}
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-[#120205] group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2V9C15.2 9.15 17 11 17 13.25V14H15V13.25C15 12.1 14.1 11.15 13 11V22H11V11C9.9 11.15 9 12.1 9 13.25V14H7V13.25C7 11 8.8 9.15 11 9V2M5 6H7V10H5V6M17 6H19V10H17V6Z" />
              </svg>
              <span>Enter the Divine Journey</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>

          {/* Secondary Action: Explore Nine Svarupas */}
          <button
            onClick={() => setShowSvarupasModal(true)}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-[#e6b338]/40 hover:border-[#fae182] bg-[#1c0408]/80 hover:bg-[#25060b] text-[#fae182] font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#fae182] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C12.5 5 14.5 7 17 8C14.5 9 13 11.5 12 14C11 11.5 9.5 9 7 8C9.5 7 11.5 5 12 3M6.5 12.5C7.8 13.7 9.8 14.5 12 14.5C14.2 14.5 16.2 13.7 17.5 12.5C18.8 14.7 18.5 17.5 16.5 19.5C14.2 21.8 9.8 21.8 7.5 19.5C5.5 17.5 5.2 14.7 6.5 12.5Z" />
              </svg>
              Explore Nine Svarupas
            </span>
          </button>
        </div>

        {/* Darshan Trust Pillars */}
        <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-[#fae182]/80 font-marcellus">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
            Authentic Vedic Shlokas
          </span>
          <span className="hidden sm:inline-block text-[#a87913]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
            Sacred Dhyana & Yantras
          </span>
          <span className="hidden sm:inline-block text-[#a87913]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fae182]" />
            Bhavana & Archana
          </span>
        </div>
      </main>

      {/* Bottom Feature Ticker of 9 Forms */}
      <footer className="relative z-20 w-full border-t border-[#e6b338]/25 backdrop-blur-xl bg-[#100305]/95 pt-3 pb-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] font-cinzel text-[#fae182] tracking-wider overflow-x-auto no-scrollbar gap-4">
          {/* Akhanda Jyoti */}
          <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-[#e6b338]/20">
            <div className="w-2 h-3 bg-gradient-to-t from-[#ff5500] via-[#ffaa00] to-[#ffffff] rounded-full animate-flame" />
            <span className="font-marcellus uppercase tracking-widest text-[#fae182]">Akhand Jyoti</span>
          </div>

          {/* 9 Goddess Quick Navigation Links */}
          <div className="flex items-center space-x-4 md:space-x-5 shrink-0 px-2">
            {NAVADURGA_DATA.map(goddess => (
              <button
                key={goddess.id}
                onClick={() => {
                  soundEngine.playTempleBell(528, 2.0);
                  onSelectGoddessDirect(goddess.id);
                }}
                className="hover:text-white transition-colors flex items-center gap-1 group whitespace-nowrap"
              >
                <span className="text-[#a87913] font-bold group-hover:text-[#fae182]">{goddess.id}.</span>
                <span className="group-hover:underline underline-offset-4 decoration-[#fae182]">{goddess.name.replace('Maa ', '')}</span>
              </button>
            ))}
          </div>

          {/* Sacred Benediction in Romanized Sanskrit */}
          <div className="shrink-0 pl-4 border-l border-[#e6b338]/20 text-right">
            <span className="font-cinzel tracking-[0.2em] text-xs font-bold text-[#fae182]">
              OM DUM DURGAYAI NAMAH
            </span>
          </div>
        </div>
      </footer>

      {/* Nine Svarupas Overview Modal */}
      {showSvarupasModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-text"
          onClick={() => setShowSvarupasModal(false)}
        >
          <div 
            className="relative bg-gradient-to-b from-[#2a060d] via-[#1c0408] to-[#120205] border-2 border-[#e6b338]/60 rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-[0_0_50px_rgba(230,179,56,0.3)] text-left"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setShowSvarupasModal(false)}
              className="absolute top-4 right-4 p-2 text-[#fae182] hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close Modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <span className="text-xs font-cinzel tracking-widest text-[#fae182] uppercase">
                Sanctum Guide
              </span>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-gold-gradient tracking-wider mt-1 uppercase">
                The Nine Svarupas of Durga
              </h2>
              <p className="text-xs md:text-sm text-[#d6cebe] font-marcellus mt-1">
                Each manifestation represents an evolutionary stage of spiritual consciousness and maternal benediction.
              </p>
            </div>

            {/* Grid of Nine Forms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[60vh] overflow-y-auto pr-1">
              {NAVADURGA_DATA.map(g => (
                <div 
                  key={g.id}
                  onClick={() => {
                    setShowSvarupasModal(false);
                    onSelectGoddessDirect(g.id);
                  }}
                  className="p-3.5 rounded-xl bg-black/40 border border-[#e6b338]/30 hover:border-[#fae182] hover:bg-[#25060b]/70 transition-all cursor-pointer group flex items-start gap-3"
                >
                  <img src={g.image} alt={g.name} className="w-12 h-12 rounded-full object-cover border border-[#fae182]/40 shrink-0" />
                  <div>
                    <span className="text-[#fae182] font-cinzel font-bold text-xs block group-hover:text-white">
                      Day {g.id} · {g.name}
                    </span>
                    <span className="text-[10px] text-[#e6b338]/80 font-marcellus block mt-0.5">
                      {g.vahana.name}
                    </span>
                    <p className="text-[#d6cebe]/80 text-[11px] font-sans mt-1 line-clamp-2">
                      {g.significance.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Action */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setShowSvarupasModal(false);
                  onSelectGoddessDirect(1);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#e6b338] text-[#120205] font-cinzel font-bold text-xs uppercase tracking-widest hover:bg-[#fae182] transition-all shadow-[0_0_15px_rgba(230,179,56,0.4)]"
              >
                Begin from Form 01 - Maa Shailaputri →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
