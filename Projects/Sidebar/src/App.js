
import './App.css';
import {FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"
import {GiCutDiamond,GiHamburgerMenu} from "react-icons/gi"
import {IoClose} from "react-icons/io5"
import { useEffect, useRef, useState } from 'react';

function App() {


  const [showMenu,setShowMenu] = useState(false)

  const menu = useRef(null)

  function handleClick(){
      setShowMenu(prevState => !prevState)
  }

  useEffect(()=>{

    if(showMenu){
      menu.current.classList.remove("hide-menu")
      menu.current.classList.add("show-menu")
    }else{
      menu.current.classList.add("hide-menu")
      menu.current.classList.remove("show-menu")
    }
  },[showMenu])

 return(
 <div className="outer-container">
   <div className="nav-container hide-menu" ref={menu}>
      <div className="nav-top">
        <img src="https://vanilla-js-basic-project-5-sidebar.netlify.app/logo.svg"/>
        <span className="close" onClick={handleClick}><IoClose/></span>
      </div>
      <div className="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="nav-bottom">
        <span><FaFacebook/></span>
        <span><FaTwitter/></span>
        <span><FaLinkedin/></span>
        <span><GiCutDiamond/></span>
      </div>
   </div>
  <span className="hamburger-icon" onClick={handleClick}><GiHamburgerMenu/></span>
 </div>)
}

export default App;
