import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div>
        <div className="head">
        <a className="goHome" href="index.html"></a>
        <Image fill className="headbg" src="/ln1.jpg" alt="logo"/>
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
    </div>
  )
}

export default Navbar