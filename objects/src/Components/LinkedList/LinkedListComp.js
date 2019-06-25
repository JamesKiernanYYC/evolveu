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
            currentNode : this.list.currentNode,
            list: this.list
        }
    }
    onChange = (event) => {
        if (event.target.id === 'subInp') {
            this.setState({subInp:event.target.value})
        } else if (event.target.id === 'amtInp') {
            this.setState({amtInp:event.target.value})
        }
    }
    onClick = (event) => {
        if (event.target.id === 'addNode') {
            this.list.insertNode(this.state.subInp, this.state.amtInp)
            this.setState({
                list: this.list,
                amtInp: '',
                subInp: ''
            })
            console.log(this.list.currentNode.show())
        }
    }
    showNode = () => {
        if (this.state.currentNode === null) {
            return 'No Nodes'
        } else return this.state.currentNode.show()
    }
    render(){
		return(
        <div>
            <div>
                <input id='subInp' type='text' placeholder="Subject" onChange={this.onChange} value={this.state.subInp}/>
                <input id='amtInp' type='text' placeholder="Ammount" onChange={this.onChange} value={this.state.amtInp}/>
                <button id="addNode" onClick={this.onClick}>Add Node</button>
            </div>
            <div>
                <NodeComp 
                    node = {this.showNode()}
                />
            </div>
        </div>
        )
    }
}
export default LinkedListComp