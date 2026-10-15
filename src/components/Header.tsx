import React, { useState } from 'react';
import { soundEngine } from '../utils/audio';

interface HeaderProps {
  currentView: 'opening' | 'sanctum' | 'mandala';
  onNavigate: (view: 'opening' | 'sanctum' | 'mandala') => void;
  currentGoddessName?: string;
  tithi?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  currentGoddessName = 'Maa Shailaputri',
  tithi = 'Pratipada Tithi'
}) => {
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [isDroneOn, setIsDroneOn] = useState(false);

  const handleRingBell = () => {
    setIsBellRinging(true);
    soundEngine.playTempleBell(528, 3.5);
    setTimeout(() => setIsBellRinging(false), 800);
  };

  const handleToggleDrone = () => {
    const active = soundEngine.toggleTanpura();
    setIsDroneOn(active);
  };

  return (
    <header className="relative z-40 w-full bg-[#140306]/90 border-b border-[#e6b338]/25 backdrop-blur-md px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div 
          onClick={() => onNavigate('opening')}
          className="flex items-center gap-3 cursor-pointer group"
          title="Return to Grand Temple Entrance"
        >
          {/* Sacred Yantra Emblem */}
          <div className="w-9 h-9 rounded-full border border-[#fae182]/50 flex items-center justify-center p-1 bg-gradient-to-br from-[#e6b338]/30 to-[#25060b] shadow-[0_0_15px_rgba(230,179,56,0.3)] group-hover:border-[#fae182] transition-colors">
            <svg 
              className="w-6 h-6 text-[#fae182] group-hover:rotate-180 transition-transform duration-700" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <circle cx="50" cy="50" r="46" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="38" />
              <polygon points="50,15 80,72 20,72" />
              <polygon points="50,85 80,28 20,28" />
              <circle cx="50" cy="50" fill="currentColor" r="4" />
            </svg>
          </div>

          <div>
            <h1 className="font-cinzel text-xs sm:text-sm tracking-[0.2em] font-bold text-[#fae182] uppercase leading-tight">
              Sri Navadurga Sanctum
            </h1>
            <p className="font-marcellus text-[10px] text-[#e6b338]/80 tracking-widest uppercase">
              Nine Forms. One Divine Shakti.
            </p>
          </div>
        </div>

        {/* Center Zone: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-cinzel text-xs tracking-[0.15em] uppercase">
          <button
            onClick={() => onNavigate('opening')}
            className={`transition-colors whitespace-nowrap ${
              currentView === 'opening' 
                ? 'text-[#fae182] border-b border-[#fae182] pb-0.5' 
                : 'text-[#d6cebe] hover:text-[#fae182]'
            }`}
          >
            Temple Portal
          </button>
          <button
            onClick={() => onNavigate('sanctum')}
            className={`transition-colors whitespace-nowrap ${
              currentView === 'sanctum' 
                ? 'text-[#fae182] border-b border-[#fae182] pb-0.5' 
                : 'text-[#d6cebe] hover:text-[#fae182]'
            }`}
          >
            Sanctum Darshan
          </button>
          <button
            onClick={() => onNavigate('mandala')}
            className={`transition-colors whitespace-nowrap ${
              currentView === 'mandala' 
                ? 'text-[#fae182] border-b border-[#fae182] pb-0.5' 
                : 'text-[#d6cebe] hover:text-[#fae182]'
            }`}
          >
            Sacred Mandala
          </button>
        </nav>

        {/* Right Zone: Ritual Atmosphere Controls */}
        <div className="flex items-center gap-3">
          {/* Tithi / Manifestation Indicator */}
          <div className="text-right hidden sm:block">
            <div className="text-[11px] font-cinzel tracking-wider text-[#fae182] font-semibold uppercase">
              {currentGoddessName}
            </div>
            <div className="text-[9px] font-sans tracking-widest text-[#fae182]/70 uppercase">
              {tithi}
            </div>
          </div>

          {/* Temple Bell Sound Trigger */}
          <button
            onClick={handleRingBell}
            aria-label="Ring Temple Bell (Ghanta)"
            title="Ring Sacred Temple Bell"
            type="button"
            className={`p-2 rounded-lg border border-[#e6b338]/40 bg-[#25060b]/80 hover:bg-[#e6b338]/20 transition-all ${
              isBellRinging ? 'scale-110 text-[#fff7d6] bg-[#e6b338]/30 shadow-[0_0_15px_rgba(230,179,56,0.6)]' : 'text-[#fae182]'
            }`}
          >
            <svg 
              className={`w-4 h-4 ${isBellRinging ? 'animate-bounce' : ''}`} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2A4 4 0 0 0 8 6V7.07C5.7 7.74 4 9.87 4 12.4V17L2 19V20H22V19L20 17V12.4C20 9.87 18.3 7.74 16 7.07V6A4 4 0 0 0 12 2M10 21A2 2 0 0 0 12 23A2 2 0 0 0 14 21H10Z" />
            </svg>
          </button>

          {/* Tanpura Drone Ambience Toggle */}
          <button
            onClick={handleToggleDrone}
            aria-label="Toggle Vedic Tanpura Drone"
            title={isDroneOn ? "Vedic Tanpura Drone Active (Click to Mute)" : "Enable Meditative Vedic Tanpura Drone"}
            type="button"
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-cinzel tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              isDroneOn 
                ? 'border-[#fae182] bg-[#e6b338]/25 text-[#fae182] shadow-[0_0_12px_rgba(230,179,56,0.4)]' 
                : 'border-[#e6b338]/30 bg-[#25060b]/70 text-[#d6cebe] hover:text-[#fae182]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isDroneOn ? 'bg-[#fae182] animate-ping' : 'bg-[#a87913]'}`} />
            <span className="hidden lg:inline">{isDroneOn ? 'Vedic Drone' : 'Vedic Drone'}</span>
          </button>

          {/* Akhand Diya Indicator */}
          <div 
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25060b]/80 border border-[#e6b338]/30"
            title="Akhanda Jyoti (Eternal Sanctum Lamp) Lit"
          >
            <div className="w-2 h-3.5 bg-gradient-to-t from-[#ff6b08] via-[#ffaa00] to-[#fff38a] rounded-full animate-flame" />
            <span className="text-[10px] font-cinzel text-[#fae182] tracking-wider uppercase hidden sm:inline">
              Akhand Jyoti
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
