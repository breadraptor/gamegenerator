import React from 'react';
import {Component} from 'react';
import dummyData from '../data/sample_romancejson.json'
import Tree from './tree'
import PageInput from './pageinput'
import PreviewWindow from './previewWindow'

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
            <div>This is the game part
                <Tree tree={this.state.treedata}></Tree>
                <PreviewWindow></PreviewWindow>
                <PageInput></PageInput>
            </div>
            
        )
            
    }
}

export default GameGenerator