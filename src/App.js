import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import GameGenerator from './components/gamegenerator'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button className="navigation" onClick={() => alert("hello")}>
        {this.props.direction}
      </Button>
    )
  }
}

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
