import React, { Component } from 'react';
import Home from './Home'
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Calculator from './Components/Calculator/CalculatorComp'
import AccountsComp from './Components/Accounts/AccountsComp'
import CitysComp from './Components/Citys/CitysComp'
import LinkedListComp from './Components/LinkedList/LinkedListComp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: <Calculator />
    }
  }
  // Click handler method for changing the "display" state or the view on the page
  handleClick = (event) => {
    if (event.target.id === "calc") {
      console.log("Calculator Navigation Clicked")
      this.setState({display: <Calculator />})
    } else if (event.target.id === "acc") {
      console.log("Accounts Navigation Clicked")
      this.setState({display: <AccountsComp />})
    } else if (event.target.id === "city") {
      console.log("Citys Navigation Clicked")
      this.setState({display: <CitysComp />})
    } else if (event.target.id === "link") {
      console.log("Linked List Navigation Clicked")
      this.setState({display: <LinkedListComp />})
    } else if (event.target.id === "home") {
      console.log("Home Navigation Clicked")
      this.setState({display: <Home />})
    }
  }
  render() {
    return (
      <div className="App">
      <NavBar navClick={this.handleClick}/>
        {this.state.display}
      </div>
    );
  }
}

export default App;
