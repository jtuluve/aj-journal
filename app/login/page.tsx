'use client'

import React, { useState } from 'react';
import '../../styles/login.css';

const Login: React.FC = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);

    const toggleView = () => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
    };

    const toggleRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <>
            <div className="log">
                <div className={showLogin && !showRegister ? 'login' : 'login hidden'}>
                    <div className="login-in">
                        <div className="login-head">
                            <h1>LOGIN</h1>
                        </div>
                        <div className="txt-field">
                            <input type="email" required />
                            <span></span>
                            <label>Email id</label>
                        </div>
                        <div className="txt-field">
                            <input type="password" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="txt-field">
                            <input type="captcha" required />
                            <span></span>
                            <label>Captcha</label>
                        </div>
                        <br />
                        <div className="pass">Forgot Password?</div>
                        <input type="submit" value="Login" />
                        <button className='buttonz' onClick={toggleView}>Don't have an account? Switch to Register</button>
                    </div>
                </div>

                <div className={showRegister && !showLogin ? 'reg' : 'reg hidden'}>
                    <div className="registerz">
                        <div className="login-head">
                            <h1>REGISTER</h1>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Name</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Designation</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Department</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Institute</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Email id</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" required />
                            <span></span>
                            <label>Captcha</label>
                        </div>
                        <br />
                        <input type="submit" value="Register" />
                        <button className='buttonz' onClick={toggleView}>Already have an account? Switch to Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
