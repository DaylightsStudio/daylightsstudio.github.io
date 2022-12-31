import { useEffect, useState, useRef } from "react";
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

  // var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
  // console.log(isSafari)

  var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  if (iOSSafari) 
  {
    return (
      <div className="containerVideo">
        <img src="https://images-ext-1.discordapp.net/external/JEeuPJSgm9NNGOQAPk1d1Wfyu8aUd4nMXwRcWQaG53g/https/storage.ko-fi.com/cdn/useruploads/post/2703d4e0-bcd2-4028-9c56-5be34e887869_pr%25C3%25A9commandedetail.jpg" alt="Fond de la page d'accueil pour iPhones introuvable"/>
      </div>
    );
  } 
  else 
  {
    return (
      <div className="containerVideo">
        <video
          id="videoBg"
          style={{ display: vidIndex === 1 ? "none" : "block" }}
          autoPlay
          playsInline
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
          playsInline
          autoPlay
          ref={ref}
          type="video/mp4"
        />
      </div>
    );
  }
}

export default VideoAutoPlay