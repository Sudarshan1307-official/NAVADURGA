import React, { useState, useEffect } from 'react';
import { NavadurgaGoddess } from '../data/navadurga';

interface OrbitalNodesProps {
  goddess: NavadurgaGoddess;
  onSelectDetail?: (nodeType: 'significance' | 'vahana' | 'ayudhaMudra' | 'cosmicPlane') => void;
}

export const OrbitalNodes: React.FC<OrbitalNodesProps> = ({ goddess, onSelectDetail }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalNode, setActiveModalNode] = useState<null | 'significance' | 'vahana' | 'ayudhaMudra' | 'cosmicPlane'>(null);

  // Smooth orbital rotation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused) {
        // Complete rotation every 48 seconds (~7.5 deg/sec)
        setRotationAngle(prev => (prev + delta * 7.5) % 360);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Orbit radius in pixels
  // On desktop: ~240px, on tablet: ~190px, on mobile: adjusted gracefully
  const orbitRadius = 240;

  // 4 nodes at 0° (Top), 90° (Right), 180° (Bottom), 270° (Left)
  const nodes = [
    {
      id: 'significance' as const,
      baseAngle: 0, // Top
      label: 'SIGNIFICANCE',
      sublabel: 'Node 1',
      icon: (
        <svg className="w-4 h-4 text-[#fae182]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A7 7 0 0 0 5 9C5 12.38 7.5 15.21 10.74 15.86L10 20H14L13.26 15.86C16.5 15.21 19 12.38 19 9A7 7 0 0 0 12 2M9 21H15V22H9V21Z" />
        </svg>
      ),
      content: goddess.significance.title,
      summary: goddess.significance.description,
      detail: goddess.significance.detailedEssence,
    },
    {
      id: 'vahana' as const,
      baseAngle: 90, // Right
      label: 'VAHANA',
      sublabel: 'Node 2',
      icon: (
        <svg className="w-4 h-4 text-[#fae182]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5M12 7A5 5 0 0 0 7 12A5 5 0 0 0 12 17A5 5 0 0 0 17 12A5 5 0 0 0 12 7Z" />
        </svg>
      ),
      content: goddess.vahana.name,
      summary: goddess.vahana.symbolism,
      detail: goddess.vahana.symbolism,
    },
    {
      id: 'ayudhaMudra' as const,
      baseAngle: 180, // Bottom
      label: 'AYUDHA & MUDRA',
      sublabel: 'Node 3',
      icon: (
        <svg className="w-4 h-4 text-[#fae182]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2H13V9C15.2 9.15 17 11 17 13.25V14H15V13.25C15 12.1 14.1 11.15 13 11V22H11V11C9.9 11.15 9 12.1 9 13.25V14H7V13.25C7 11 8.8 9.15 11 9V2M5 6H7V10H5V6M17 6H19V10H17V6Z" />
        </svg>
      ),
      content: goddess.ayudhaMudra.items,
      summary: goddess.ayudhaMudra.description,
      detail: goddess.ayudhaMudra.description,
    },
    {
      id: 'cosmicPlane' as const,
      baseAngle: 270, // Left
      label: 'COSMIC PLANE',
      sublabel: 'Node 4',
      icon: (
        <svg className="w-4 h-4 text-[#fae182]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 17.65 6.35L6.35 17.65A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 20A8 8 0 0 1 6.35 17.65L17.65 6.35A8 8 0 0 1 20 12A8 8 0 0 1 12 20Z" />
        </svg>
      ),
      content: `${goddess.cosmicPlane.graha} · ${goddess.cosmicPlane.chakra}`,
      summary: goddess.cosmicPlane.description,
      detail: goddess.cosmicPlane.description,
    }
  ];

  return (
    <>
      {/* Visual Orbit Guide Rings in background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Outer orbital guide circle */}
        <div 
          className="w-[480px] h-[480px] rounded-full border border-[#e6b338]/20 border-dashed pointer-events-none"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
        {/* Inner subtle guide circle */}
        <div className="w-[380px] h-[380px] rounded-full border border-[#e6b338]/10 pointer-events-none" />
      </div>

      {/* Orbit Pause / Play Control Pill */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-3 py-1 rounded-full bg-[#1c0408]/90 hover:bg-[#25060b] border border-[#e6b338]/30 hover:border-[#fae182]/60 text-[10px] font-cinzel text-[#fae182] uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-md"
          title="Pause or Resume Orbital Rotation"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-[#ff9900]' : 'bg-[#fae182] animate-pulse'}`} />
          <span>{isPaused ? 'Resume Orbit' : 'Pause Orbit'}</span>
        </button>
      </div>

      {/* The 4 Circular Information Nodes */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {nodes.map(node => {
          // Current angle for this node in radians
          const currentDeg = (node.baseAngle + rotationAngle) % 360;
          const rad = ((currentDeg - 90) * Math.PI) / 180; // 0 deg is top (12 o'clock)

          const x = Math.cos(rad) * orbitRadius;
          const y = Math.sin(rad) * orbitRadius;

          return (
            <div
              key={node.id}
              className="absolute pointer-events-auto"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: isPaused ? 'transform 0.15s ease-out' : 'none',
              }}
            >
              {/* Circular Node container with counter-rotation to keep content upright and readable */}
              <div
                onClick={() => {
                  setActiveModalNode(node.id);
                  onSelectDetail?.(node.id);
                }}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-[#fae182]/40 via-[#e6b338]/20 to-[#120205] shadow-[0_0_20px_rgba(230,179,56,0.3)] hover:shadow-[0_0_35px_rgba(250,225,130,0.65)] hover:scale-105 transition-all duration-300 cursor-pointer group flex items-center justify-center"
                title={`Click to inspect ${node.label} details`}
              >
                {/* Inner Disc */}
                <div className="w-full h-full rounded-full bg-[#1b0408]/95 border border-[#e6b338]/40 flex flex-col items-center justify-center text-center p-3 overflow-hidden backdrop-blur-sm group-hover:border-[#fae182]">
                  {/* Subtle Top Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#2a060d] border border-[#e6b338]/30 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    {node.icon}
                  </div>

                  {/* Node Label */}
                  <span className="font-cinzel text-[9px] font-bold text-[#fae182] uppercase tracking-widest leading-none">
                    {node.label}
                  </span>

                  {/* Summary / Content */}
                  <p className="font-marcellus text-[10px] sm:text-[11px] text-[#fff7d6] font-semibold mt-1 line-clamp-1 group-hover:text-[#fae182] transition-colors leading-tight">
                    {node.content}
                  </p>

                  <p className="font-sans text-[8px] sm:text-[9px] text-[#d6cebe]/85 mt-1 line-clamp-2 leading-tight px-1">
                    {node.summary}
                  </p>

                  <span className="text-[7.5px] font-cinzel text-[#e6b338]/70 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Inspect ↗
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Inspection Modal if a node is clicked */}
      {activeModalNode && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 select-text"
          onClick={() => setActiveModalNode(null)}
        >
          <div 
            className="relative bg-gradient-to-b from-[#2a060d] via-[#1c0408] to-[#120205] border-2 border-[#e6b338]/60 rounded-2xl p-6 max-w-md w-full shadow-[0_0_50px_rgba(230,179,56,0.4)] text-left"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalNode(null)}
              className="absolute top-4 right-4 text-[#fae182] hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            {(() => {
              const nodeInfo = nodes.find(n => n.id === activeModalNode);
              if (!nodeInfo) return null;
              return (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-cinzel text-[#fae182] uppercase tracking-widest">
                      {goddess.name} · {nodeInfo.label}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-gold-gradient tracking-wide mb-2">
                    {nodeInfo.content}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#e6b338]/50 mb-4" />
                  <p className="font-sans text-sm text-[#ede5d8] leading-relaxed mb-4">
                    {nodeInfo.detail}
                  </p>
                  <div className="p-3 rounded-lg bg-black/40 border border-[#e6b338]/20 text-xs font-marcellus text-[#fae182]">
                    <span className="font-bold uppercase tracking-wider block mb-1">Devotional Contemplation:</span>
                    Meditating upon this sacred aspect aligns the seeker with the sovereign grace of {goddess.sanskritTitle}.
                  </div>
                  <div className="mt-5 text-right">
                    <button
                      onClick={() => setActiveModalNode(null)}
                      className="px-4 py-2 rounded-lg bg-[#e6b338] text-[#120205] font-cinzel font-bold text-xs uppercase tracking-widest hover:bg-[#fae182] transition-colors"
                    >
                      Return to Sanctum
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};
