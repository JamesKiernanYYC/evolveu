import React, { Component } from 'react';
import Home from './default'
import NavBar from './NavBar'
import Calc from './calculator'
import AccountForm from './AccountForm'
import Construction from './Construction' 
import './App.css';


class App extends Component {
    constructor() {
      super()
        this.state = {main: <AccountForm />}
        this.changeOne = this.changeOne.bind(this)
        this.changeTwo = this.changeTwo.bind(this)
        this.changeThree = this.changeThree.bind(this)
        this.home = this.home.bind(this)
    }
    changeOne() {
      console.log('working one')
         this.setState({main: <Calc />})
     }
    changeTwo() {
      console.log('working two')
        this.setState({main: <AccountForm />})
     }
    changeThree() {
        console.log('working three')
          this.setState({main: <Construction />})
     }
    home() {
      console.log('working home')
        this.setState({main: <Home />})
     }
  render() {
    
    return (
      <div className="App">
        <NavBar 
        setOne = {this.changeOne}
        setTwo = {this.changeTwo}
        setThree = {this.changeThree}
        setHome = {this.home} 
        />
        {this.state.main}
      </div>
    );
  }
}

export default App;
