import React, { useEffect, useState } from 'react';

export interface Petal {
  id: number;
  x: number;
  driftX: number;
  rot: number;
  duration: number;
  size: number;
  type: 'marigold' | 'lotus' | 'hibiscus' | 'jasmine';
}

interface FlowerPetalsProps {
  triggerCount: number;
  preferredFlower?: string;
}

export const FlowerPetals: React.FC<FlowerPetalsProps> = ({ triggerCount, preferredFlower }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (triggerCount === 0) return;

    // Generate a fresh shower of 28 realistic flower petals
    const newPetals: Petal[] = [];
    const types: ('marigold' | 'lotus' | 'hibiscus' | 'jasmine')[] = [
      'marigold', 'lotus', 'hibiscus', 'jasmine', 'marigold', 'lotus'
    ];

    for (let i = 0; i < 28; i++) {
      newPetals.push({
        id: Date.now() + i,
        x: Math.random() * 94 + 3, // 3% to 97% width
        driftX: (Math.random() - 0.5) * 120, // drift sideways
        rot: Math.random() * 720 - 360,
        duration: Math.random() * 2.5 + 3.2, // 3.2s to 5.7s
        size: Math.random() * 8 + 14, // 14px to 22px
        type: types[i % types.length]
      });
    }

    setPetals(prev => [...prev.slice(-30), ...newPetals]);

    // Clean up after animation finishes
    const timer = setTimeout(() => {
      setPetals(prev => prev.filter(p => !newPetals.some(np => np.id === p.id)));
    }, 6000);

    return () => clearTimeout(timer);
  }, [triggerCount]);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map(p => {
        let colorGrad = 'from-[#ffaa00] to-[#ff6600]'; // marigold default
        if (p.type === 'lotus') {
          colorGrad = 'from-[#ff70a6] to-[#e63946]';
        } else if (p.type === 'hibiscus') {
          colorGrad = 'from-[#e63946] to-[#9b111e]';
        } else if (p.type === 'jasmine') {
          colorGrad = 'from-[#ffffff] to-[#fae182]';
        }

        return (
          <div
            key={p.id}
            className="absolute top-0 animate-petal"
            style={{
              left: `${p.x}%`,
              ['--fall-duration' as string]: `${p.duration}s`,
              ['--petal-x' as string]: `${p.driftX}px`,
              ['--petal-rot' as string]: `${p.rot}deg`,
            }}
          >
            {/* Organic petal SVG shape */}
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              className="drop-shadow-[0_2px_8px_rgba(230,179,56,0.5)]"
            >
              <path
                d="M12 0 C18 8 24 18 12 32 C0 18 6 8 12 0 Z"
                className={`bg-gradient-to-b ${colorGrad}`}
                fill={
                  p.type === 'marigold' ? '#ff9900' :
                  p.type === 'lotus' ? '#ff85a1' :
                  p.type === 'hibiscus' ? '#d90429' : '#fffbe0'
                }
                opacity={0.92}
              />
              <path
                d="M12 2 Q12 16 12 30"
                stroke={p.type === 'jasmine' ? '#e6b338' : '#fff'}
                strokeWidth="0.5"
                opacity="0.4"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
