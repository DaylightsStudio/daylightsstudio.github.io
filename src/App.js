import './App.css';
import Tilt from 'react-parallax-tilt';
import TiltCardWidget from './TiltCardWidget';
import foreground from './assets/foreground.png';
import middleground from './assets/middleground.png';
import background from './assets/background.png';

function App() {
  return (
    <div className="App">

    <header className="App-header">
      <TiltCardWidget />  
    </header>
    </div>
  );
}

export default App;
