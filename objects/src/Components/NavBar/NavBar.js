import React, {Component} from 'react'
import AccLogo from './AccountsLogo.svg'
import CalcLogo from './CalculatorLogo.svg'
import CityLogo from './CityLogo.svg'
import LinkLogo from './LinkedListLogo.svg'
import ReactLogo from './ReactLogo.svg'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return(
            <div className="NavBar">
            <img alt="navlogos" id="home" src={ReactLogo} className="logo" onClick={this.props.navClick} />
            <img alt="navlogos" id="calc" src={CalcLogo} className="logo" onClick={this.props.navClick} />
            <img alt="navlogos" id="acc" src={AccLogo} className="logo" onClick={this.props.navClick} />
            <img alt="navlogos" id="city" src={CityLogo} className="logo" onClick={this.props.navClick} />
            <img alt="navlogos" id="link" src={LinkLogo} className="logo" onClick={this.props.navClick} />
            </div>
        )
    }
}

export default NavBar
