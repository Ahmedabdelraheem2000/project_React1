import React, { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [state , setState] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);



    // تنظيف الحدث عند تفكيك المكون
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const location = useLocation();  // Get current route location
  const showNavbar_SignIn = location.pathname == '/signIn'; // Hide navbar on signin page

  return (
 <header className={showNavbar_SignIn==false?'header':'header_signIn'}>


      <div className='headerMobile'>
        
      <Link to="/" onClick={()=>{
        if(state==true){
          setState(!state);
        }
      }} className={showNavbar_SignIn==false?"logo":"logo_SignIn"}>Chonga Bonga</Link>
      <h1 className={showNavbar_SignIn==false?"menu":"menu_SignIn"} onClick={() => {
         console.log("Fuck");
         setState(!state);
        }}><FontAwesomeIcon  icon={state==false?faBars:faRemove}  />
        </h1>
      </div>
      {
          state==true?
      <hr className='line'/>
        :null
      }
      <nav className="navbar">
        {
          (showNavbar_SignIn==false || width<=600)?(
            <div className={state?'navigation_Mobile_on':'navigation_Mobile_off'}>
          <Link onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} className='link_Nav' to="/">Home</Link>
          <Link className='link_Nav' onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} to="/about">About</Link>
          <Link className='link_Nav' onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} to="/portfolio">Portfolio</Link>
          <Link className='link_Nav' onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} to="/services">Services</Link>
          <Link className='link_Nav' onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} to="/contact">Contact</Link>
          <Link className='link_Nav' style={{
            background:"white",
            color:"rgb(1, 14, 35)",
            alignItems:"center",
            display:"inline-flex",
            flexDirection:"column"
          }} onClick={()=>{
            if(state==true){
              setState(!state);
            }
          }} to="/signIn">Sign In</Link>

            </div>
          ):<>
          </>
        }
      </nav>
      
    </header>
   
  );
}

export default NavBar;
