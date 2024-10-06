import React from 'react';
import LandingNavbar from './components/LandingNavbar/LandingNavbar';
import WelcomeLanding from './components/WelcomeLanding/WelcomeLanding';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <LandingNavbar />
      <WelcomeLanding />
      <Gallery />
    </div>
  );
}

export default App;
