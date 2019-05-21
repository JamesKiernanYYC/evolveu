import React from 'react'
import NodeComp from './NodeComp'
import LinkedList from './LinkedListLogic'
import './LinkedListCompStyle.css'

class LinkedListComp extends React.Component {
    constructor() {
        super()
        this.list = new LinkedList()
        this.state = {
            amtInp: '',
            subInp: '',
            list: this.list,
            display: '',
            currentNode: this.list.currentNode
        }
    }
    eventHandle = (event) => {
        if (event.target.id === "sub") {
            this.setState({subInp: event.target.value})
            console.log("Subject Field Changed")
        } else if (event.target.id === "amt") {
            this.setState({amtInp: Number(event.target.value)})
            console.log("Ammount Field Changed")
        } else if (this.state.amtInp !== '' && this.state.subInp !== '' && event.target.id === "add") {
            this.list.initNode(this.state.subInp, this.state.amtInp)
            this.setState({
                list: this.list,
                currentNode: this.list.currentNode,
                amtInp: '',
                subInp: '',
                display: <NodeComp 
                show = {this.list.currentNode.show()}
                firstClick = {this.list.moveToFirst()}
                lastClick = {this.list.moveToLast()}
                />
            })   
        } else {
            return(window.confirm("Please enter a subject and an ammount before submiting"))
        }
    }
    render() {
        return(
            <div className="LinkedListMain">
                <h1>Hello From Linked List Comp!</h1>
                <input 
                value = {this.state.subInp}
                placeholder = "Subject"
                className = "linkedInp"
                type='text' 
                id="sub" 
                onChange={this.eventHandle}
                />
                <input
                value = {this.state.amtInp}
                placeholder = "Ammount"
                className = "linkedInp" 
                type='number' 
                id="amt"
                onChange={this.eventHandle}
                />
                <button 
                className = "linkedBtn"
                id="add"
                onClick={this.eventHandle}
                >
                Add
                </button>
                {this.state.display}
            </div>
        )
    }
}

export default LinkedListComp