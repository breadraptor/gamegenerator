import React from 'react';
import {Component} from 'react';
import {Accordion, Card } from 'react-bootstrap';

class Tree extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    

    render() {
        return(
            <div>This is the tree part
                <Accordion>
                    {this.props.tree.Routes.map((route, index) => <Routes index={index}  val={route} />)}
                </Accordion>
                
            </div>
            
        )
            
    }
}

function Routes(props){
    console.log(props)
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} key={props.index} eventKey={"0" + props.index}>{props.val.Route}</Accordion.Toggle>
            <Accordion.Collapse eventKey={"0" + props.index}>
                <ul>
                    {props.val.Chapters.map((chapter, index) => <Chapters index={index} val={chapter}></Chapters>)}
                </ul>
                
            </Accordion.Collapse>
         </Card>
           
    )
}

function Chapters(props){
    console.log(props)
    return (
        <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey={"00" + props.index}>Chapter {props.index+1}</Accordion.Toggle>
            <Accordion.Collapse eventKey={"00" + props.index}>
                <ul>
                    {props.val.Stories.map((story, index) => <Stories index={index} val={story}></Stories> )}
                </ul>
            </Accordion.Collapse>
                
        </Accordion>
        
    )
}

function Stories(props){
    console.log(props)
    return (
        <p key={props.index}>Story {props.index+1}</p>
            
    )
}

export default Tree