import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
    <>
    <footer className="about footer" id="contact">
    <Image src="/logo.jpg" alt="site logo" fill className="footer_logo"/>
        <div>
            <h1>CONTACTS </h1>
            <ul>
                <li>DETAILES ABOUT CONTACT (NAME PLACE ETC....)</li>
                <li>MOBILE NO:#1234567890</li>
                <li>el ph no:#66725631</li>
            </ul>
        </div>       
    <div><h1>FAQ</h1></div>
    <div>
        <h1> EMAIL </h1>
        <ul>
            <li>ENQUIRY EMAIL: 123@gmal.com</li>
            <li> SUBMISSION EMAIL: 123@gmal.com
            </li>
        </ul>
    </div> 
</footer>
</>
);
}

export default Footer;