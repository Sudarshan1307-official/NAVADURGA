/**
 * Sacred Temple Sound & Sanskrit Recitation Engine
 * Uses Web Audio API for harmonic temple bell and tanpura drone resonance,
 * paired with authentic Sanskrit chanting audio with native Indian pronunciation and devotional cadence.
 * Note: English browser text-to-speech is strictly avoided to prevent mispronunciation.
 */

class SacredSoundEngine {
  private ctx: AudioContext | null = null;
  private tanpuraGain: GainNode | null = null;
  private tanpuraOscillators: OscillatorNode[] = [];
  private isTanpuraActive = false;
  private currentAudio: HTMLAudioElement | null = null;

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Synthesizes an authentic bronze temple bell (Ghanta)
   * Uses realistic overtone partials (1.0, 2.0, 2.76, 5.4, 8.93) and exponential decay.
   */
  public playTempleBell(frequency = 520, duration = 3.5): void {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      // Temple bell harmonic partials and their relative amplitudes
      const partials = [
        { freqMult: 0.5, amp: 0.35, decay: duration * 1.1 },   // Hum note
        { freqMult: 1.0, amp: 0.85, decay: duration * 0.95 },  // Fundamental strike
        { freqMult: 1.2, amp: 0.45, decay: duration * 0.7 },   // Tierce
        { freqMult: 2.0, amp: 0.55, decay: duration * 0.6 },   // Quint
        { freqMult: 2.76, amp: 0.35, decay: duration * 0.45 }, // Nominal
        { freqMult: 4.1, amp: 0.2, decay: duration * 0.3 },    // Super-overtone
        { freqMult: 5.4, amp: 0.15, decay: duration * 0.2 }    // Shimmer
      ];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.7, now);
      masterGain.connect(ctx.destination);

      partials.forEach(p => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency * p.freqMult, now);

        // Immediate strike followed by smooth exponential decay
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(p.amp, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + p.decay);
      });

      // Transient metallic clapper strike (filtered noise burst)
      const bufferSize = ctx.sampleRate * 0.05;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2400, now);
      noiseFilter.Q.setValueAtTime(3.0, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.05);
    } catch {
      console.warn('Audio synthesis not permitted or unsupported.');
    }
  }

  /**
   * Sacred Vedic Tanpura Drone (C# / D resonant root with fifth and octave)
   */
  public toggleTanpura(active?: boolean): boolean {
    const shouldActivate = active !== undefined ? active : !this.isTanpuraActive;

    if (!shouldActivate) {
      if (this.tanpuraGain && this.ctx) {
        this.tanpuraGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.tanpuraOscillators.forEach(osc => {
            try { osc.stop(); } catch { /* ignore */ }
          });
          this.tanpuraOscillators = [];
        }, 1300);
      }
      this.isTanpuraActive = false;
      return false;
    }

    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      this.tanpuraOscillators.forEach(osc => {
        try { osc.stop(); } catch { /* ignore */ }
      });
      this.tanpuraOscillators = [];

      this.tanpuraGain = ctx.createGain();
      this.tanpuraGain.gain.setValueAtTime(0.001, now);
      this.tanpuraGain.gain.exponentialRampToValueAtTime(0.18, now + 1.5);

      // Warm low-pass filter to simulate wood and gourd acoustics
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      this.tanpuraGain.connect(filter);
      filter.connect(ctx.destination);

      // C# root notes: C#2 (69.3 Hz), G#2 (103.8 Hz - Fifth / Pa), C#3 (138.6 Hz - Sa), C#3 octave
      const notes = [69.3, 103.83, 138.59, 138.9]; // Slight detune for shimmer
      notes.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.25, now);

        osc.connect(oscGain);
        oscGain.connect(this.tanpuraGain!);

        osc.start(now);
        this.tanpuraOscillators.push(osc);
      });

      this.isTanpuraActive = true;
      return true;
    } catch {
      this.isTanpuraActive = false;
      return false;
    }
  }

  public getIsTanpuraActive(): boolean {
    return this.isTanpuraActive;
  }

  /**
   * Plays authentic Sanskrit chanting audio recording with native Indian pronunciation.
   * If authentic audio cannot be loaded, gracefully disables chanting rather than using English TTS.
   */
  public reciteShloka(
    audioUrl: string,
    options?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: string) => void;
    }
  ): { supported: boolean; cancel: () => void } {
    this.stopRecitation();

    // Verify audio source is provided
    if (!audioUrl) {
      options?.onError?.(
        'Authentic Sanskrit recitation recording is currently unavailable. English text-to-speech has been disabled to preserve sacred pronunciation.'
      );
      return { supported: false, cancel: () => {} };
    }

    try {
      // Ring soft temple bell as devotional invocation
      this.playTempleBell(440, 2.5);

      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      audio.onplay = () => {
        options?.onStart?.();
      };

      audio.onended = () => {
        this.playTempleBell(520, 2.0);
        this.currentAudio = null;
        options?.onEnd?.();
      };

      audio.onerror = () => {
        this.currentAudio = null;
        options?.onError?.(
          'Authentic Sanskrit recitation recording could not be loaded. English browser voice has been disabled to prevent mispronunciation.'
        );
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          this.currentAudio = null;
          options?.onError?.(
            err.name === 'NotAllowedError'
              ? 'Please interact with the page to allow holy chanting audio.'
              : 'Authentic Sanskrit audio could not be played.'
          );
        });
      }

      return {
        supported: true,
        cancel: () => {
          this.stopRecitation();
        }
      };
    } catch {
      options?.onError?.(
        'Audio playback failed. English browser text-to-speech has been disabled to preserve sacred pronunciation.'
      );
      return { supported: false, cancel: () => {} };
    }
  }

  public stopRecitation(): void {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {
        // ignore
      }
      this.currentAudio = null;
    }
  }
}

export const soundEngine = new SacredSoundEngine();
