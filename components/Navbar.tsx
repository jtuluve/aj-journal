import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div>
        <div className="head">
        <a className="goHome" href="/"></a>
        <img className="headbg" src="/ln.png" alt="logo"/>
        <button className="register" >REGISTER/LOGIN</button>
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
              <button className="btn">
                  <a href="/">HOME</a>
              </button>
              <button className="btn">
                  <a href="/archive">ARCHIVE</a>
              </button>
              <button className="btn">
                  <a href="/about">ABOUT US</a>
              </button>
              <button className="btn">
                  <a href="/editorial">EDITORIAL TEAM</a>
              </button>
              <button className="btn">
                  <a href="/contact">CONTACT US</a>
              </button>
          </section>
          <hr></hr>   
    </div>
  )
}

export default Navbar