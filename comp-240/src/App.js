import React, { useState } from 'react'
import Home from './Components/Home'
import './App.css'

const App = () => {
    const [drop, setDrop] = useState(null) 
    const [page, setPage] = useState(null)
      const dropClick = () => {
        if (drop === null) {
          setDrop(
            <div className="buttonBlock">
            <button className="button" onClick={()=>( setDrop(null), setPage(<Home />))}>Home</button>
            <button className="button" onClick={()=>( setDrop(null), setPage(null))}>Shop</button>
            <button className="button" onClick={()=>( setDrop(null), setPage(null))}>Cart</button>
            <button className="button" onClick={()=>( setDrop(null), setPage(null))}>Profile</button>
            <button className="button" onClick={()=>( setDrop(null), setPage(null)) }>About</button>
            </div>
          )
        } else {
          setDrop(null)
        }
      }
  return(
    <div>
      <div className="navBar">
      <button className="dropBtn" className="dropNavBtn" onClick={dropClick}>Menu</button>
      <div className="titleDiv">
      <p className="title">My Shop</p>
      </div>
      <div className="navBtn">
        <button className="dropBtn" >Sign In</button>
        <button className="dropBtn" >Register</button>
        <button className="dropBtn" >Options</button>
      </div>
      </div>
      {drop}
      {page}
    </div>
  )
}

export default App
