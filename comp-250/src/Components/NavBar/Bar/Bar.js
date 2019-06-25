import React from 'react'
//import User from './Icons/user.png'

const Bar = (props) => {
    return(
        <div className = "navBarBox">
            <div className="leftBtnBox">
                <button 
                className="dropMenuBtn"
                id="dropMenuNav" 
                onClick = {props.menuClick}
                >Nav</button>
            </div>
            <div className="rightBtnBox">
                <button 
                className="signInBtn"
                id="signIn" 
                onClick = {props.click}
                >Sign In</button>
            </div>
        </div>
    )
}

export default Bar