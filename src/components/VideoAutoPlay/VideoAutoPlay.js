import { useEffect, useState, useRef } from "react";
import ReactPlayer from 'react-player'
import videoIntro from './videos/teaser_titans_card.mp4'
import videoLoop from './videos/triangle.mp4'
import './VideoAutoPlay.css'

// 
// TOUT LE AUTOPLAY DE https://stackoverflow.com/a/72444123
// 

// const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
// const videoLoop = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

function VideoAutoPlay() {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);
  return (
    <div className="containerVideo">
      <video
        id="videoBg"
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        autoPlay
        muted
        onEnded={() => setVidIndex((idx) => idx + 1)}>
          <source src={videoIntro} type="video/webm"/>
        </video>
      <video
        id="videoBg"
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        src={videoLoop}
        muted
        loop
        autoPlay
        ref={ref}
        type="video/mp4"
      />
    </div>
  );
}

export default VideoAutoPlay