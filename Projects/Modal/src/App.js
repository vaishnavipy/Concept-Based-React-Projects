
import './App.css';
import {FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"
import {GiCutDiamond,GiHamburgerMenu} from "react-icons/gi"
import {IoClose} from "react-icons/io5"
import { useEffect, useRef, useState } from 'react';
import image from "./image.jpg"

function App() {

  const heading = useRef(null)
  const btn = useRef(null)
  const content = useRef(null)

  const [openModal,setOpenModal] = useState(false)

  function handleClick(){

    setOpenModal(prevState => !prevState)

    
  }

  useEffect(()=>{

    if(openModal){
      document.body.classList.add("blur")
      heading.current.style.display="none"
      btn.current.style.display = "none"
      content.current.style.display="block"
    }else{
      document.body.classList.remove("blur")
      heading.current.style.display="block"
    btn.current.style.display = "inline"
    content.current.style.display="none"


    }


  },[openModal])


return(

  <div className="modal-container">
     <h1 ref={heading}>Modal Project</h1>
     <button onClick={handleClick} ref={btn}>Open Modal</button>
      <div className="content" ref={content}>
        <div className="close" onClick={handleClick}><IoClose/></div>
        <h1>Modal Content</h1>
      </div>
  </div>
)

  
}

export default App;
