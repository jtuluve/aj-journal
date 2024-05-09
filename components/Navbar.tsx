import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
<div className="headT">
    <div className="head">
        <a className="goHome" href="/"></a>
        <img className="headbg" src="/headding.png" alt="logo"/>
        <a  href='/login'><button className="register" >REGISTER/LOGIN</button></a>
        {/* <!-- Login Modal --> */}
        <div id="loginModal" className="modal">
            <div className="modal-content">
                <span className="close" >&times;</span>
            </div>
        </div>        
        {/* <!-- Submission Modal --> */}
        <div id="submitModal" className="modal">
            <div className="modal-content">
                <span className="close" >&times;</span>
                <h1>The submission page here</h1>
            </div>
        </div>       
    </div>
    <br/>      
    <section className="menu">
              
        <a href="/" className="btn a">HOME</a>
              
        <a href="/archive" className="btn b">ARCHIVE</a>

        <a href="/about#aboutSection" className="btn c">ABOUT US</a>
            
        <a href="/editorial" className="btn d">EDITORIAL TEAM</a>
      
        <a href="/contact" className="btn e">CONTACT US</a>
             
    </section>
    <br />
    <hr/> 
</div>
  )
}

export default Navbar