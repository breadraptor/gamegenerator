import React from 'react';
import {Component} from 'react';
import dummyData from '../data/sample_romancejson.json'

class GameGenerator extends Component {
    constructor(){
        super();
        this.state = {treedata: {}}
    }

    componentDidMount() {
        var data = dummyData;
        this.setState({
            treedata: data
        })
    }
    render() {
        return(
            <div>This is the game part</div>
        )
            
    }
}

export default GameGenerator