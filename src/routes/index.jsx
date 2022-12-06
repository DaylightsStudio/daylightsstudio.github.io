export default function Root() {
    return (
      <>
        <div>
          <h1>Router</h1>
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