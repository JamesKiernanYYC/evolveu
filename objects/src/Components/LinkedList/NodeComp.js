import React from 'react'
import './LinkedListCompStyle.css'

class NodeComp extends React.Component {
render() {
    return(
        <div className="NodeCard">
            <h1>Hello from NodeComp</h1>
            <div className="btnContainer">
                <button 
                className = "linkedBtn"
                onClick={this.props.firstClick}
                >
                First Node
                </button>
                <button
                className = "linkedBtn"
                >
                Next Node
                </button>
                <button
                className = "linkedBtn"
                >
                Previous Node
                </button>
                <button
                onClick = {this.props.lastClick}
                className = "linkedBtn"
                >
                Last Node
                </button>
                <button
                className = "linkedBtn"
                >
                Delete Node
                </button>
            </div>
            <h3>{`Current Node:  ${this.props.list.currentNode}`}</h3>
            

        </div>
    )
}
}
export default NodeComp