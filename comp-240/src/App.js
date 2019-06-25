import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import useFetch from './Components/Fetch/fetch'
import './App.css'

const App = () => {
    const [drop, setDrop] = useState(null) 
    const [page, setPage] = useState(null)
    const { data, loading } = useFetch('http://127.0.0.1:5000/item-info')
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
      // useEffect(async () => {
      //   const resp = await fetch('http://127.0.0.1:5000/item-info')
      //   const data = await resp.json()
      //   setItem(data)
      //   setLoading(false)
      // }, [])
      // useEffect(() => {
      //   fetch('http://127.0.0.1:5000/client-info')
      //   .then(results => {
      //     return results.json()
      //   }).then((data) => {
      //       console.log("Client Info", data)
      //       setClient(data)
      //     }).catch(err => console.log('Fetch Failed'))
      //   }, [])
      //   useEffect(() => {
      //     fetch('http://127.0.0.1:5000/item-info')
      //     .then(results => {
      //       return results.json()
      //     }).then((data) => {
      //         console.log("Item Info", data)
      //         setItem(data)
      //       }).catch(err => console.log('Fetch Failed'))
      //     }, [])
          // useEffect(() => {
          //   fetch('http://127.0.0.1:5000/invoice-info')
          //   .then(results => {
          //     return results.json()
          //   }).then((data) => {
          //       console.log("Invoice Info", data)
          //       setInvoice(data)
          //     })
          //   }, [])
          //   useEffect(() => {
          //     fetch('http://127.0.0.1:5000/line-item-info')
          //     .then(results => {
          //       return results.json()
          //     }).then((data) => {
          //         console.log("Invoice Line Item Infocomp", data)
          //         setLineItem(data)
          //       })
          //     }, [])

      
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
        {/* {data.map((x, key) => (
          <li id ={key}>{Object.keys(x)[0]}</li>
        ))} */}
        {loading ? <div>Loading...</div> : <div>{data[0]}</div>}
    </div>
  )
}

export default App

// attention nick when submitting

// helcim