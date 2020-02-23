import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
      <p>Game: generated. Nailed it</p>
    </div>
  );
}

export default App;
