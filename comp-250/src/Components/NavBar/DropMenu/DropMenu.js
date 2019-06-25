import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './DropMenu.css'

const DropMenu = (props) => {
    return(
        <div className="dropMenuBox">
            
               
                <button
                id='forumDropNav'
                className="menuBtn"
                onClick={props.click}
                >Forum</button>
            
           
            
                
                <button
                id='myPostsDropNav'
                onClick={props.click}
                className="menuBtn"
                >My Posts</button>
                
            
        </div>
    )
}

export default DropMenu