import React, {useState} from 'react'
import './SignIn.css'

const SignIn = () => {
    const [register, setRegister] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerClick = (event) => {
        if (register === false) {
            setRegister(true)
        } else if (register === true) {
            setRegister(false)
        }
    }
    const registerChange = (event) => {
        if (event.target.id === 'signInUserInp') {
            return (setUsername(event.target.value))
        } else if (event.target.id === 'signInPassInp') {
            return(setPassword(event.target.value))
        }else if (event.target.id === 'registerPassInp') {
            return(setPassword(event.target.value))
        }else if (event.target.id === 'registerUserInp') {
            return (setUsername(event.target.value))
        }
    }
    if (register === false){
    return(
        <div className="signInMain">
            <div className="signInBox">
                <h4>Sign In</h4>
                <div className="userNameBox">
                    <input 
                    onChange={registerChange}
                    className="signInInp"
                    id="signInUserInp" 
                    type='text' 
                    placeholder='Username'
                    />
                </div>
                <div className="passwordBox">
                    <input 
                    onChange={registerChange}
                    className="signInInp"
                    id="signInPassInp" 
                    type='password' 
                    placeholder='Password'
                    />
                </div>
                <div className='signInNavBox'>
                    <button 
                    onClick={() => console.log(`User: ${username} has Signed In!`)}
                    id="signInBtn"
                    className="signInFormBtn"
                    >Sign In</button>
                    <p>Not a Member?</p>
                    <p className="registerChange" onClick={registerClick}>Register</p>
                </div>
            </div>
        </div>
    )
    } else if (register === true) {
        return (
            <div className="signInMain">
            <div className="signInBox">
                <h4>Register</h4>
                <div className="userNameBox">
                    <input 
                    onChange={registerChange}
                    className="signInInp"
                    id="registerUserInp" 
                    type='text' 
                    placeholder='Username'
                    />
                </div>
                <div className="passwordBox">
                    <input 
                    onChange={registerChange}
                    className="signInInp"
                    id="registerPassInp" 
                    type='password' 
                    placeholder='Password'
                    />
                </div>
                <div className='signInNavBox'>
                    <button 
                    onClick={() => console.log(`User: ${username} has Registered!`)}
                    className="signInFormBtn"
                    id="registerBtn"
                    >Register!</button>
                    <p>Already a Member?</p>
                    <p className="registerChange" onClick={registerClick}>Sign In!</p>
                </div>
            </div>
        </div>
        )
    }
}

export default SignIn