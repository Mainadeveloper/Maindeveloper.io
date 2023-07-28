//The code imports necessary dependencies and components from various files.
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//import Home from './components/Home'
import About from "./Pages/About"
import Work from "./Pages/Work"
import Listing from "./Pages/Listing"
import Explore from "./Pages/Explore"
//import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'//These are used for setting up routing in the application
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/Homee/Home'
import Bar from './components/Homee/Bar'
import Text1 from './components/Homee/Text1'
import Button1 from './components/Homee/Button1'
import Button2 from './components/Homee/Button2'
import Text2 from './components/Homee/Text2'
import Button3 from './components/Homee/Button3'
import Text3 from './components/Homee/Text3'
import Card1 from './components/Homee/Card1'
import Text4 from './components/Homee/Text4'
import Button4 from './components/Homee/Button4'
import Text5 from './components/Homee/Text5'
import Text6 from './components/Homee/Text6'
//import Text7 from './components/Homee/Text7'
import Card2 from './components/Homee/Card2'
import Card3 from './components/Homee/Card3'
import Card4 from './components/Homee/Card4'

//Router wraps the entire component to enable routing functionality.
//The second div with class name App contains the main content of the application.
//The Route components inside Routes define the paths and corresponding components to be rendered.
//This code sets up a basic React application with routing functionality using React Router. It renders a navigation bar, login and sign-up components, and a set of components for the home page.
function App() {
  return (
   
    <Router>
      <div className="home.container">
    
      </div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                
         
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/testimonials'}>
                    List an Item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                    How it works
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} /> 
            </Routes>
          </div>
        </div>
      </div>
      <div className="App">
      <Bar />
      </div>
      <div className="App">
      <Text1 />
    </div>
    <div className="App">
      <Button1 />
    </div>
    <div className="App">
      <Button2/>
    </div>
    <div className="App">
      <Text2/>
    </div>
    <div className="App">
      <Button3/>
    </div>
    <div className="App">
      <Text3/>
    </div>
    <div className="App">
      <Card1/>
    </div>
    <div className="App">
      <Text4/>
    </div>
    <div className="App">
      <Button4/>
    </div>
    <div className="App">
      <Text5/>
    </div>
    <div className="App">
      <Text6/>
    </div>
    <div className="App">
      <Card2/>
    </div>
    <div className="App">
      <Card3/>
    </div>
    <div className="App">
      <Card4/>
    </div>


      <div className="App">
      <Home />
      <About />
      <Work />
      <Listing />
    
      <Explore/>
      
    
    </div>
        </Router>
  )
}
export default App