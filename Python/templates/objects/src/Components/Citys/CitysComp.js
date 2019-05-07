import React from 'react'
import Community from './CommunityLogic'
import CityCardComp from './CityCardComp'
import CityInfoCard from './CityInfoCard'
import './CitysCompStyle.css'

class CitysComp extends React.Component {
    constructor() {
        super()
        this.community = new Community()
        this.state = {
            community: this.community,
            cityNameInp: '',
            cityLatInp: '',
            cityLongInp: '',
            cityPopInp: '',
            mostNorth: "None",
            mostSouth: "None",
            totalPop: 0,
            inOut: '',
        }
    }
    handleChange = (event) => {
        if (event.target.id === "cityName") {
            this.setState({cityNameInp: event.target.value})
        } else if (event.target.id === "cityLat") {
            this.setState({cityLatInp: Number(event.target.value)})
        } else if (event.target.id === "cityLong") {
            this.setState({cityLongInp: Number(event.target.value)})
        } else if (event.target.id === "cityPop") {
            this.setState({cityPopInp: Number(event.target.value)})
        } else if (event.target.id.includes("inOutInp")) {
            this.setState({inOut: Number(event.target.value)})
        }
    }
    handleClick = (event) => {
        if (event.target.id === "newCityBtn" 
        && this.state.cityNameInp !== '' 
        && this.state.cityLatInp !== '' 
        && this.state.cityLongInp !== '' 
        && this.state.cityPopInp !== '' 
        && this.state.cityLatInp >= -90 
        && this.state.cityLatInp <= 90 
        && this.state.cityLongInp >= -180 
        && this.state.cityLatInp <= 180
        && this.state.cityPopInp > 0) {
            this.community.addCity(
                this.state.cityNameInp, 
                this.state.cityLatInp,
                this.state.cityLongInp,
                this.state.cityPopInp
                )
                this.setState({
                    community: this.community,
                    cityNameInp: '',
                    cityLatInp: '',
                    cityLongInp: '',
                    cityPopInp: '',
                    totalPop: this.community.getPopulation(),
                    mostSouth: this.community.getMostSouthern(),
                    mostNorth: this.community.getMostNorthern(),
                }) 
        } else if (event.target.id.includes("movedOutBtn")) {
            let index = event.target.id.slice(11)
            this.community.commArray[index].movedOut(this.state.inOut)
            this.setState({
                community: this.community,
                inOut: '',
                totalPop: this.community.getPopulation(),
            })
        } else if (event.target.id.includes("movedInBtn")) {
            let index = event.target.id.slice(10)
            this.community.commArray[index].movedIn(this.state.inOut)
            this.setState({
                community: this.community,
                inOut: '',
                totalPop: this.community.getPopulation(),
            })
        } else {
            alert(
                "please enter a city name, valid latitude (-90 - 90), valid longatude (-180 - 180), and population before entering")
        }
    }
    render() {
        let mapped = this.state.community.commArray.map((props, index) => 
        <CityCardComp 
            key = {index}
            id = {index}
            cityName = {props.Name}
            cityLat = {props.Latitude}
            cityLong = {props.Longitude}
            cityPop = {props.Population}
            click = {this.handleClick}
            change = {this.handleChange}
            inOut = {this.state.inOut}
            sphere = {props.whichSphere()}
            type = {props.howBig()}
        />) 
        return(
            
            <div className="CitysCompMain">
                <h1>Citys</h1>
                <div className="inpContainer">
                    <input
                    id = "cityName" 
                    onChange = {this.handleChange}
                    placeholder = "City Name"
                    className = "cityInp"
                    type = "text"
                    value = {this.state.cityNameInp}
                    />
                    <input
                    id = "cityLat"
                    onChange = {this.handleChange}
                    placeholder = "City Latitude" 
                    className = "cityInp"
                    type = "number"
                    value = {this.state.cityLatInp}
                    />
                    <input 
                    id = "cityLong"
                    onChange = {this.handleChange}
                    placeholder = "City Longatude"
                    className = "cityInp"
                    type = "number"
                    value = {this.state.cityLongInp}
                    />
                    <input 
                    id = "cityPop"
                    onChange = {this.handleChange}
                    placeholder = "City Population"
                    className = "cityInp"
                    type = "number"
                    value = {this.state.cityPopInp}
                    />
                </div>
                <br />
                <button 
                id = "newCityBtn"
                className  = "cityBtn"
                onClick = {this.handleClick}
                >
                Add City!
                </button>
                <div className="cityCardCase">
                    {mapped}
                </div>
                <div className = "infoCard">
                    <CityInfoCard 
                    total = {this.state.totalPop}
                    north = {this.state.mostNorth}
                    south = {this.state.mostSouth}
                    />
                </div>
            </div>
        )
    }
}

export default CitysComp