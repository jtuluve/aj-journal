import React from "react";

const Navbar = () => {
  return (
    <div className="headT">
      <div className="head">
        <a className="goHome" href="/"></a>
        <img className="headbg" src="/headding.png" alt="logo" />
        <a href="/login"className="register">
          REGISTER/LOGIN
        </a>
        {/* unused modals | should be deleted in the future  */}
       {/* <!-- Login Modal --> 
        <div id="loginModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
          </div>
        </div>
         <!-- Submission Modal -->
        <div id="submitModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h1>The submission page here</h1>
          </div>
        </div> */}
      </div>
      <br />
      <section className="menu">
        <a href="/">
          HOME
        </a>

        <a href="/archive">
          ARCHIVE
        </a>

        <a href="/about#aboutSection">
          ABOUT US
        </a>

        <a href="/editorial">
          EDITORIAL TEAM
        </a>

        <a href="/contact">
          CONTACT US
        </a>
      </section>
      <br />
      <hr />
    </div>
  );
};

export default Navbar;
