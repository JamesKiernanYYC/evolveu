import React from 'react';
import Particles from 'react-particles-js';
import NavBar from './Components/Navigation/NavBar'
import Logo from './Components/Logo/Logo'
import Clarifai from 'clarifai'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import ImgLinkForm from './Components/ImgLink/ImgLinkForm'
import Rank from './Components/Rank/Rank'
import SignIn from './Components/SignIn/SignIn'
import Register from './Components/Register/Register'
import './App.css';

const app = new Clarifai.App({
  apiKey: '43b6379fad244301a61fab2acbed28b8'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inpImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInpChange = (event) => {
    this.setState({input:event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
       .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
       .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({route: route})
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
  }

  render() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
     <NavBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
     { this.state.route === 'home'
     ? <div>
        <Logo />
        <Rank />
        <ImgLinkForm 
        onInpChange={this.onInpChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imgUrl = {this.state.imgUrl}/>
      </div>
     : (
       this.state.route === 'signin' 
       ? <SignIn onRouteChange={this.onRouteChange} />
       : <Register onRouteChange={this.onRouteChange} />
     )
      
     }
     </div>
  );
  }  
}

export default App;
