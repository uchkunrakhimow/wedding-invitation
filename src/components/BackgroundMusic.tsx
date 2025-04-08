import { useEffect, useRef, useState } from "react";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [, setIsPlaying] = useState<boolean>(false);
  const hasInteractedRef = useRef<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;

      // Function to play audio on first interaction
      const playAudio = (): void => {
        if (!hasInteractedRef.current) {
          hasInteractedRef.current = true;

          audio
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error: Error) => {
              console.error("Error playing audio:", error);
              setIsPlaying(false);
            });
        }
      };

      document.addEventListener("click", playAudio, { once: true });

      // Cleanup function
      return () => {
        document.removeEventListener("click", playAudio);
        audio.pause();
      };
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/wedding.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;
