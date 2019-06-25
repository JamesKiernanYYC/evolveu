import React, {useState} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Forum from './Components/Forum/Forum'
import SignIn from './Components/SignIn/SignIn'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import UserPosts from './Components/Profile/UserPosts/UserPosts'

const App  = () => {
  const [display, setDisplay] = useState(<Home />)
  
  const handleNavClick = (event) => {
    if (event.target.id === 'forumDropNav') {
        setDisplay(<Forum />)
    }else if (event.target.id === 'signIn') {
        setDisplay(<SignIn />)
    }else if (event.target.id === 'profile') {
      setDisplay(<Profile />)
    }else if (event.target.id === 'myPostsDropNav') {
      setDisplay(<UserPosts />)
    }else if (event.target.id === 'signInHome') {
      setDisplay(<SignIn />)
    }
  }
    return(
      <Router>
        <div>
          <NavBar 
          click = {handleNavClick}
          />
          {display}    
        </div>
      </Router>
    )
}

export default App;
