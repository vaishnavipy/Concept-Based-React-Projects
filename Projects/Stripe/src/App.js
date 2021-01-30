
import './App.css';

import { useEffect,useState,useRef } from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {FaCreditCard,FaAddressBook,FaToolbox} from "react-icons/fa"


function App() {
  
  const modalRef = useRef(null)

  const [width,setWidth] = useState(1)

  const data = [
                {name:"Products",
               
                contents : ["Payment","Terminal","Connect"]},

                {name:"Developers",
                
                contents:["Plugins","Library","Plugins","Billing"]},

                {name:"Company",
                
                  contents:["About","Customers"]}
              ]

  const modalContent = data.map((obj,i) => {

    return(
    <div className="category-container" key={i}>
      <h4>{obj.name}</h4>
      <div className="category-grid">
        {obj.contents.map((title,i)=> <p key={i}> 
        <span className="icons">{obj.name === "Products" ? <FaCreditCard /> : obj.name === "Developers" ? <FaAddressBook /> : <FaToolbox />}</span> 
        {title}</p>)
        }
      </div>
    </div>)

  })

  const tooltip = data.map((obj,i) => {
    
    return (
    <div class={`${obj.name}-tooltip links`} key={i}  onMouseEnter={handleHover} >
      {obj.name}
     
      <span class="tooltiptext" style={{marginLeft:`-${width/2}px`}} id={obj.name}>
        <span className="tooltip-h5">{obj.name} <br/></span>
        <div className="tooltip-grid">
            {obj.contents.map((title,i)=> <span key={i} className="tooltip-category"> 
            <span className="icons">{obj.name === "Products" ? <FaCreditCard /> : obj.name === "Developers" ? <FaAddressBook /> : <FaToolbox />}</span> 
            {title}</span>)
            }
      </div>
      </span>
    </div>)
  })

  function handleHover(e){
   
    setWidth(e.currentTarget.children[0].offsetWidth)
  }




  function openModal(){
    document.body.classList.add("blur")
   
    modalRef.current.style.display ="block"
  }

  function closeModal(){
    document.body.classList.remove("blur")
    modalRef.current.style.display ="none"
  }

  return(
    <div className="main-flex">

     

      <div className="nav-outer">
        <div className="navbar-container">
          <img src="https://vannilla-js-basic-project-17-stripe-submenus.netlify.app/images/logo.svg" />

          <div className="links-div">
            {tooltip}
          </div>

          <button className="sign-in" id="sign-in">Sign In</button>

          <div className="menu-icon" onClick={openModal}><GiHamburgerMenu /></div>

        </div>
      </div>

      <div className="body-grid">
        <div className="content">
          <h1>Payments</h1>
          <h1>infrastructure</h1>
          <h1>for the internet</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className="sign-in">Start Now</button>
        </div>

        <div className="mobile-img">
        <img src="https://vannilla-js-basic-project-17-stripe-submenus.netlify.app/images/phone.svg"/>
        </div>
      </div>
 

      <div className="modal" ref={modalRef}>
          <div className="close-modal" onClick={closeModal}>X</div>
          {modalContent}
      </div>
      
    </div>
  )

  
}

export default App;
