import React from 'react'
import './CitysCompStyle.css'

class CityCardComp extends React.Component {
    render() {
        return(
            <div className = "cityCard">
                <div className = "cityInfo">
                    <div className = "cityInfo1">
                        <ul>
                            <li>
                            {this.props.type} Name: {this.props.cityName}
                            </li>
                            <li>
                            Latitude: {this.props.cityLat}
                            </li>
                            <li>
                            Longatude:{this.props.cityLong}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                            Population:{this.props.cityPop}
                            </li>
                            <li>
                            Hemisphere: {this.props.sphere}
                            </li>
                        </ul>
                    </div>
                </div>
                <input
                value = {this.props.inOut}
                id = {`inOutInp${this.props.id}`}
                onChange = {this.props.change} 
                type = "number" 
                className = "cityInp"
                />
                <br />
                <button 
                id = {`movedOutBtn${this.props.id}`}
                className="cityBtn"
                onClick = {this.props.click}
                >
                Moved Out
                </button>
                <button 
                id = {`movedInBtn${this.props.id}`}
                className="cityBtn"
                onClick = {this.props.click}
                >
                Moved In
                </button>
            </div>
        )
    }
}

export default CityCardComp