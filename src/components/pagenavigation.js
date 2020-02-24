import React from 'react';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'

class Navigation extends Component {
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

export default Navigation