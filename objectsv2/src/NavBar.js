import React, { Component } from 'react';
import logo from './logo.svg';
import icon from './icon.svg'
import unknown from './unknown.svg'
import acc from './acc.svg'
// import Calc from './calculator'
// import AccountForm from './AccountForm';
// import Construction from './Construction';
// import Home from './default';
class NavBar extends Component {
   
   render() {
     
    return(
        <div className='NavBar'>
            {/* <div className="logoOne"> */}
               <img src={logo} className="logo-custom" alt="logo" onClick={this.props.setHome}/>
            {/* </div>
            <div className="logoTwo"> */}
               <img src={icon} className="logo" alt="logo" onClick={this.props.setOne}/>
            {/* </div>
            <div className="logoThree"> */}
               <img src={acc} className="logo" alt="logo" onClick={this.props.setTwo}/>
            {/* </div> */}
            {/* <div className="logoFour"> */}
               <img src={unknown} className="logo" alt="logo" onClick={this.props.setThree}/>
            {/* </div> */}
         </div>
    )
   }
}
export default NavBar