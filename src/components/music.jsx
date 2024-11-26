import '../../public/imgs/EnchantingTable.wav'
import React, { useEffect, useRef } from "react";
import '../css/audioPg.css'

function AudioPlayer() {
    const audioRef = useRef(null);

    //Play when the component mounts
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play(); //Play when renders
      }
    }, [])

    return (
      <div>
        <audio className='audio' ref={audioRef} controls>
          <source src="../../public/imgs/EnchantingTable.wav" type="audio/wav" />
          <source src="../../public/imgs/EnchantingTable.wav" type="audio/mpeg" />
          <source src="../../public/imgs/EnchantingTable.wav" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  
  export default AudioPlayer;