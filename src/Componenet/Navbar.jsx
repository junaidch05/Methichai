import React, { useState,useEffect } from 'react';
import './Navbar.css';
import {Link} from "react-scroll";


function Navbar() {

const [togglemenu,settogglemenu] = useState(false)
const Togglenav =()=>{
settogglemenu(!togglemenu)
}
useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
const[show ,handleshow]=useState(false);
const transition=()=>{
    if(window.scrollY>500){
        handleshow(true)
     settogglemenu(false)
    }
    else{
        handleshow(false)
        
    }
}
useEffect(()=>{

    window.addEventListener("scroll",transition)
    
    return()=>{
        window.removeEventListener("scroll",transition)
    }
    
    
        },[])
       // {`header ${show&& "nav-back"}`}

  return(
  
  <>
  <section className= {`header ${show&& "nav-back"}`}>
      <div className="logo">
          <h1>chai<span>میٹھی</span></h1>
      </div>
    
         {(togglemenu ||screenWidth >786) &&
         (
          <nav className="navbar">
    <Link to='home' id='homes' className='links'>Home</Link>
    <Link to='about'  id='aboutus' className='links'>About</Link>
    <Link to='specials'  id='specials1' className='links'>Specials</Link>
    <Link to='ourfood'  id='ourfoods' className='links'>Ourfood</Link>
    <Link to='contact' id='contacts' className='links'>Contact</Link>
          </nav>
          )
          }
      
      <div id="menu-bar" className="fas fa-bars" onClick={Togglenav}></div>
  </section>
 
  
  </>);

}

export default Navbar;
