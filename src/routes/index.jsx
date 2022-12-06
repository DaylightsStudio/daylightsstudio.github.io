import VideoAutoPlay from '../components/VideoAutoPlay/VideoAutoPlay'

export default function Root() {
    return (
      <>
        <div>
          <h1>Router</h1>

        {/* <video preload="true" controls autoPlay loop muted id="videoBG">
          <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video> */}
        <VideoAutoPlay
          videoIntro="public/videos/smoke.mp4"
          videoLoop="public/videos/triangle.mp4"/>
          <nav>
            <ul>
              {/* Faire en sorte que la liste se charge automatiquement ici!! */}
              <li>
                <button>
                  <a href={`potter`}>Potter</a>
                </button>
              </li>
              <li>
                <button>
                  <a href={`daylights`}>Daylights</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }