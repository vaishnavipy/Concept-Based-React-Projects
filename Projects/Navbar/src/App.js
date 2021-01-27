
import './App.css';
import {FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"
import {GiCutDiamond,GiHamburgerMenu} from "react-icons/gi"
import { useEffect, useRef, useState } from 'react';

function App() {

  const linksContainer = useRef(null)

  const ulLinks = useRef(null)

  const [showMenu,setShowMenu] = useState(false)

function handleClick(){

    setShowMenu(prevState => !prevState)

}

useEffect(()=>{
let height = ulLinks.current.getBoundingClientRect().height;
  if(showMenu){
    linksContainer.current.style.height = `${height}px`
  }else{
    linksContainer.current.style.height = `0px`
  }
},[showMenu])

 return(
 <div className="main-container">
   <div  className="nav-container">
      <img src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg" className="logo"/>

      <div className="links-container" ref={linksContainer}>
        <ul className="links" ref={ulLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="hamburger-menu" onClick={handleClick}> <GiHamburgerMenu/></div>

      <div className="icons">
        <span><FaFacebook/></span>
        <span><FaTwitter/></span>
        <span><FaLinkedin/></span>
        <span><GiCutDiamond/></span>
      </div>

   </div>
 </div>)
}

export default App;
