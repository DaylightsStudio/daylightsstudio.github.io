import { useEffect, useState, useRef } from "react";

const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
const videoLoop =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

function App() {
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
        onEnded={() => setVidIndex((idx) => idx + 1)}
      />
      <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        src={videoLoop}
        muted
        loop
        ref={ref}
      />
    </div>
  );
}
