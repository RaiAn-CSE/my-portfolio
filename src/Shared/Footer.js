import React from 'react';
import { Link } from 'react-router-dom';
import ContactMe from '../Pages/ContactMe/ContactMe';

const Footer = () => {
    return (
        <footer className="mt-6"
        // style={{
        //     background: `url(${footerImg})`,
        //     backgroundSize: 'cover'
        // }}
        >
            <div className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link t0='/' className="link link-hover">Branding</Link>
                    <Link t0='/' className="link link-hover">Web Design</Link>
                    <Link t0='/' className="link link-hover">Front End Developer</Link>
                    <Link t0='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <ContactMe></ContactMe>
                </div>
            </div>
            <div className='text-center mt-8 mb-4'>
                <p>Copyright © 2022 - All right reserved by RaiAn Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;