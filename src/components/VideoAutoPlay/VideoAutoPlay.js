import { useEffect, useState, useRef } from "react";

// 
// TOUT LE AUTOPLAY DE https://stackoverflow.com/a/72444123
// 

// const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
// const videoLoop = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

function VideoAutoPlay({videoIntro, videoLoop}) {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);
  return (
    <div className="main">
      <video
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={videoIntro}
        autoPlay
        muted
        controls
        onEnded={() => setVidIndex((idx) => idx + 1)}
        type="video/mp4"
      />
      <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        src={videoLoop}
        muted
        loop
        autoPlay
        controls
        ref={ref}
        type="video/mp4"
      />
    </div>
  );
}

export default VideoAutoPlay