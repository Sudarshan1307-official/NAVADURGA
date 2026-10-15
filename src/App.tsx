/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { NAVADURGA_DATA, NavadurgaGoddess } from './data/navadurga';
import { soundEngine } from './utils/audio';
import { Header } from './components/Header';
import { ShlokaBanner } from './components/ShlokaBanner';
import { GoddessSanctum } from './components/GoddessSanctum';
import { MandalaScreen } from './components/MandalaScreen';
import { OpeningScreen } from './components/OpeningScreen';
import { FlowerPetals } from './components/FlowerPetals';

export default function App() {
  // Navigation states: 'opening' | 'sanctum' | 'mandala'
  const [currentView, setCurrentView] = useState<'opening' | 'sanctum' | 'mandala'>('opening');

  // Currently active goddess (index 0 to 8, id 1 to 9)
  const [currentGoddessIndex, setCurrentGoddessIndex] = useState<number>(0);

  // Audio recitation state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioFeedback, setAudioFeedback] = useState<string | null>(null);

  // Ritual interaction states
  const [isAartiActive, setIsAartiActive] = useState<boolean>(false);
  const [flowerTrigger, setFlowerTrigger] = useState<number>(0);
  const [offeringCount, setOfferingCount] = useState<number>(1008);

  const currentGoddess: NavadurgaGoddess = NAVADURGA_DATA[currentGoddessIndex];
  const prevGoddess: NavadurgaGoddess = 
    NAVADURGA_DATA[(currentGoddessIndex - 1 + NAVADURGA_DATA.length) % NAVADURGA_DATA.length];
  const nextGoddess: NavadurgaGoddess = 
    NAVADURGA_DATA[(currentGoddessIndex + 1) % NAVADURGA_DATA.length];

  // Stop any active recitation when navigating or switching goddess
  const stopCurrentAudio = useCallback(() => {
    soundEngine.stopRecitation();
    setIsPlayingAudio(false);
  }, []);

  // Navigation Handlers
  const handleSelectGoddess = useCallback((goddessId: number) => {
    stopCurrentAudio();
    const index = NAVADURGA_DATA.findIndex(g => g.id === goddessId);
    if (index !== -1) {
      setCurrentGoddessIndex(index);
      setCurrentView('sanctum');
    }
  }, [stopCurrentAudio]);

  const handlePrev = useCallback(() => {
    stopCurrentAudio();
    setCurrentGoddessIndex(prev => (prev - 1 + NAVADURGA_DATA.length) % NAVADURGA_DATA.length);
  }, [stopCurrentAudio]);

  const handleNext = useCallback(() => {
    stopCurrentAudio();
    setCurrentGoddessIndex(prev => (prev + 1) % NAVADURGA_DATA.length);
  }, [stopCurrentAudio]);

  // Keyboard navigation: Left Arrow -> Prev, Right Arrow -> Next, Escape -> Mandala
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentView === 'sanctum') {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'm' || e.key === 'M') {
          setCurrentView('mandala');
        }
      } else if (currentView === 'mandala') {
        if (e.key === 'Escape') {
          setCurrentView('sanctum');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, handlePrev, handleNext]);

  // Ritual: Replay Shloka Recitation with authentic Sanskrit pronunciation & devotional cadence
  const handleReplayShloka = useCallback(() => {
    stopCurrentAudio();
    setIsPlayingAudio(true);
    setAudioFeedback(null);

    const result = soundEngine.reciteShloka(currentGoddess.audioSrc, {
      onStart: () => {
        setIsPlayingAudio(true);
      },
      onEnd: () => {
        setIsPlayingAudio(false);
      },
      onError: (err) => {
        setIsPlayingAudio(false);
        setAudioFeedback(`${err} The verified transliterated shloka remains visible.`);
        setTimeout(() => setAudioFeedback(null), 5000);
      }
    });

    if (!result.supported) {
      setIsPlayingAudio(false);
      setAudioFeedback('Authentic Sanskrit recitation recording currently unavailable. English text-to-speech has been disabled to prevent mispronunciation.');
      setTimeout(() => setAudioFeedback(null), 5000);
    }
  }, [currentGoddess.audioSrc, stopCurrentAudio]);

  // Ritual: Bell & Aarti
  const handleBellAndAarti = useCallback(() => {
    soundEngine.playTempleBell(528, 4.0);
    setIsAartiActive(true);

    // Keep Aarti pradakshina active for 8 seconds
    setTimeout(() => {
      soundEngine.playTempleBell(440, 3.0);
    }, 4000);

    setTimeout(() => {
      setIsAartiActive(false);
    }, 8500);
  }, []);

  // Ritual: Offer Flowers
  const handleOfferFlowers = useCallback(() => {
    soundEngine.playTempleBell(660, 2.0);
    setFlowerTrigger(prev => prev + 1);
    setOfferingCount(prev => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#100305] text-[#ede5d8] font-sans relative selection:bg-[#e6b338] selection:text-[#120205]">
      {/* Universal Sanctum Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          stopCurrentAudio();
          setCurrentView(view);
        }}
        currentGoddessName={currentGoddess.name}
        tithi={currentGoddess.tithi}
      />

      {/* Scrolling Shloka Banner at top of Sanctum & Mandala screens */}
      {currentView === 'sanctum' && (
        <ShlokaBanner
          shloka={currentGoddess.shloka}
          meaning={currentGoddess.shlokaMeaning}
          goddessName={currentGoddess.name}
          isPlayingAudio={isPlayingAudio}
          onPlayShloka={handleReplayShloka}
        />
      )}

      {/* Temporary Audio Fallback / Notice Toast */}
      {audioFeedback && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-[#25060b] border border-[#e6b338] text-xs font-cinzel text-[#fae182] shadow-2xl flex items-center gap-2">
          <span>{audioFeedback}</span>
          <button 
            onClick={() => setAudioFeedback(null)}
            className="text-white hover:text-[#fae182] font-bold ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Dynamic Devotional Flower Petals Falling Particle Shower */}
      <FlowerPetals 
        triggerCount={flowerTrigger} 
        preferredFlower={currentGoddess.flower}
      />

      {/* Main View Router */}
      <div className="flex-1 flex flex-col">
        {currentView === 'opening' && (
          <OpeningScreen
            onEnterJourney={() => setCurrentView('sanctum')}
            onSelectGoddessDirect={(id) => handleSelectGoddess(id)}
          />
        )}

        {currentView === 'sanctum' && (
          <GoddessSanctum
            goddess={currentGoddess}
            prevGoddess={prevGoddess}
            nextGoddess={nextGoddess}
            onPrev={handlePrev}
            onNext={handleNext}
            onOpenMandala={() => {
              stopCurrentAudio();
              setCurrentView('mandala');
            }}
            onReplayShloka={handleReplayShloka}
            onBellAndAarti={handleBellAndAarti}
            onOfferFlowers={handleOfferFlowers}
            isPlayingAudio={isPlayingAudio}
            isAartiActive={isAartiActive}
            offeringCount={offeringCount}
          />
        )}

        {currentView === 'mandala' && (
          <MandalaScreen
            selectedGoddessId={currentGoddess.id}
            onSelectGoddess={(id) => handleSelectGoddess(id)}
            onBackToSanctum={() => setCurrentView('sanctum')}
          />
        )}
      </div>
    </div>
  );
}
