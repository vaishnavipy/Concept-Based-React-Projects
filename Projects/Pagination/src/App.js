
import './App.css';

import { useEffect,useState } from 'react';
import Page from "./page"


function App() {

  const [allfollowers,setAllFollowers] = useState([])

  const [pageNo,setPageNo] = useState(1)

  const [followers,setFollowers] =useState([])

  const btnElements = document.querySelectorAll("button")

    useEffect(()=>{
      fetch("https://api.github.com/users/john-smilga/followers?per_page=100")
      .then(response => response.json())
      .then(data => setAllFollowers(data) )
    },[])


    useEffect(()=>{

      let first = (pageNo *10) -10;

      let last = (pageNo*10)

      if(allfollowers.length != 0){

      setFollowers(allfollowers.slice(first,last))

      }
    

    },[pageNo,allfollowers])

    function handleClick(e){
      let elm = e.target
      if(e.target.nodeName === "BUTTON"){

        btnElements.forEach(elm => elm.classList.remove("active"))
        let id = "";
        if(e.target.id === "prev" ){
         
          if(pageNo == 1){
            setPageNo(10)
            id="10"
          }else{
            setPageNo(prevNo => prevNo -1);
            id = pageNo-1
          }
        
          document.getElementById(id).classList.add("active")

        }else if(e.target.id === "next"){

          if(pageNo == 10){
            setPageNo(1);
            id="1"
          }else{
            setPageNo(prevNo => prevNo +1);
            id = pageNo+1;
          }

          document.getElementById(id).classList.add("active")
        }else{

          elm.classList.add("active")

          setPageNo(Number(e.target.id))
        
        }

      }

    }
  
  

 
  return (
    <div className="main-container">
        <h1>Pagination</h1>
        <hr />
        

        <Page followers={followers}/>

        <div className="page-nos-div" onClick={handleClick}>
          <button className="prev" id="prev">Prev</button>
          <button className="active page-no" id="1"> 1 </button>
          <button className="page-no" id="2"> 2 </button>
          <button className="page-no" id="3"> 3 </button>
          <button className="page-no" id="4"> 4 </button>
          <button className="page-no" id="5"> 5 </button>
          <button className="page-no" id="6"> 6 </button>
          <button className="page-no" id="7"> 7 </button>
          <button className="page-no" id="8"> 8 </button>
          <button className="page-no" id="9"> 9 </button>
          <button className="page-no" id="10"> 10 </button>
          <button className="next" id="next">Next</button>
        </div>

    </div>)

  
}

export default App;
