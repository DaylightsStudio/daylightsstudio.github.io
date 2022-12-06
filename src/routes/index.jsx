export default function Root() {
    return (
      <>
        <div>
          <h1>Router</h1>
          <nav>
            <ul>
              <li>
                <a href={`potter`} color="white">Potter</a>
              </li>
              <li>
                <a href={`daylights`} color="white">Daylights</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }