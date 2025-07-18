import { useEffect, useRef } from 'react';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicControl = ({ isPlaying, onToggle }: MusicControlProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log('Audio playback failed:', error);
        // Auto-play was prevented, we'll handle this gracefully
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleClick = () => {
    onToggle();
  };

  return (
    <>
      <audio 
        ref={audioRef}
        src="/relaxing-background.mp3" 
        loop 
        preload="auto"
      />
      <button
        onClick={handleClick}
        className="fixed top-5 right-5 z-50 glass-effect rounded-full w-14 h-14 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? (
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
        ) : (
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
              clipRule="evenodd" 
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicControl; 