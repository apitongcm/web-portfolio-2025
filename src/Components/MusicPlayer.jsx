import React, { useRef, useState } from "react";
import Music from "../assets/music.mp3";
import { Play, Pause } from "lucide-react"; 

function MusicPlayer() {
    const audioReference = useRef(null);
    const[isPlaying,setIsPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = audioReference.current;
        if(!audio) return;
        
        audio.volume = 1.0;

        (isPlaying)?audio.pause():audio.play().catch((err) => console.log("Playback blocked:", err));
        setIsPlaying(!isPlaying)
    };

  return (
    <>
    <div className="fixed bottom-6 right-6 flex items-center gap-2">
      <audio ref={audioReference} loop>
        <source src={Music} type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        className=" flex items-center justify-center
          bg-slate-800 text-white rounded-full
          shadow-lg transition-transform duration-300
          hover:scale-110 active:scale-95
          w-14 h-14 sm:w-12 sm:h-12 xs:w-10 xs:h-10"
        variant="outline"
      >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
    </>
  )
}

export default MusicPlayer