import { useEffect, useState, useRef } from "react";
import videoIntro from './videos/teaser_titans_card.mp4'
import videoLoop from './videos/triangle.mp4'
import staticImage from './videos/image-media-disabled.png'
import './VideoAutoPlay.css'

// 
// TOUT LE AUTOPLAY DE https://stackoverflow.com/a/72444123
// 

function VideoAutoPlay() {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  var webkit = !!ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);


  if (document.cookie === "showMedia=true") {
    return (
      <div className="containerVideo">
        <video
          id="videoBg"
          style={{ display: vidIndex === 1 ? "none" : "block" }}
          autoPlay
          playsInline
          muted
          onEnded={() => setVidIndex((idx) => idx + 1)}>
          <source src={videoIntro} type="video/webm" />
        </video>
        <video
          id="videoBg"
          style={{ display: vidIndex === 0 ? "none" : "block" }}
          src={videoLoop}
          muted
          loop
          playsInline
          autoPlay
          ref={ref}
          type="video/mp4"
        />
      </div>
    );
  }
  else if (iOSSafari || document.cookie === "showMedia=false") {
    return (
      <div className="containerVideo">
        <img src={staticImage} id="videoBg" alt="Fond de la page d'accueil introuvable." />
      </div>
    );
  }
}

export default VideoAutoPlay