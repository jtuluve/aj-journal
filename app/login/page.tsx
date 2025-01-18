'use client'

import React, { useState } from 'react';
import '@/styles/login.css';

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
                            <input type="email" id="loginEmail" required />
                            <label htmlFor="loginEmail">Email id</label>
                        </div>
                        <div className="txt-field">
                            <input type="password" id="loginPassword" required />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                        <div className="txt-field">
                            <input type="captcha" id="loginCaptcha" required />
                            <label htmlFor="loginCaptcha">Captcha</label>
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
                            <input type="name" id="registerName" required />
                            <label htmlFor="registerName">Name</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerDesignation" required />
                            <label htmlFor="registerDesignation">Designation</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerDepartment" required />
                            <label htmlFor="registerDepartment">Department</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerInstitute" required />
                            <label htmlFor="registerInstitute">Institute</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerEmail" required />
                            <label htmlFor="registerEmail">Email id</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerPassword" required />
                            <label htmlFor="registerPassword">Password</label>
                        </div>
                        <div className="txt-field">
                            <input type="name" id="registerCaptcha" required />
                            <label htmlFor="registerCaptcha">Captcha</label>
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
