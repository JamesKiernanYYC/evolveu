import React, {Component} from 'react'
import Accounts from './AccFormController'

class MinMaxTotal extends Component {
    render(){

        return(
            <div>
                <h1>Total:{this.total}</h1>
                <h1>Min:{this.min}</h1>
                <h1>Max:{this.max}</h1>
            </div>
        )
    }
}

export default MinMaxTotal