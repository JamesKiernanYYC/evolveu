import React from 'react'
import NodeComp from './NodeComp'
import LinkedList from './LinkedListLogic'
import './LinkedListCompStyle.css'

class LinkedListComp extends React.Component {
    constructor() {
        super()
        this.list = new LinkedList()
        this.state = {
            amtInp:'',
            subInp:'',
            list: this.list 
        }
    }
    onClick (event) {
        if (event.target.id === 'addNode') {
            this.list.insertNode(this.state.subInp, this.state.amtInp)
            this.setState({list: this.list})
        }
    }
    render(){
		return(
        <div>
            <div>
                <input xttype='text' placeholder="Subject"/>
                <input type='text' placeholder="Ammount" />
                <button id="addNode" onClick={this.onClick}>Add Node</button>
            </div>
            <duv>
                <NodeComp 
                list = {this.state.list}
                />
            </duv>
        </div>
        )
    }
}
export default LinkedListComp