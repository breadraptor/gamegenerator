import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import GameGenerator from './components/gamegenerator'
import Navigation from './components/pagenavigation'


function App() {
  return (
    <div className="App">
      <Navigation 
        direction="Prev"
      />
      <Navigation 
        direction="Top"
      />
      <Navigation 
        direction="End"
      />
      <Navigation 
        direction="Next"
      />
      <GameGenerator />
    </div>
  );
}

export default App;
