import React from 'react';
import Logo from '../images/logo.svg';
import '../styles/header.css';

export default function Header() {

    return (
        <div className="lg:w-2/3 w-screen flex items-center justify-center py-8 text-white text-xl lg:mx-auto fixed left-0 right-0 z-50">
            <a href="#s" className="lg:block hidden flex-1 text-center hover:text-highlight">About</a>
            <a href="#f" className="lg:block hidden flex-1 text-center hover:text-highlight">Sponsors</a>
            <img src={Logo} alt="" className="px-10 logo cursor-pointer" />
            <a href="#a" className="lg:block hidden flex-1 text-center hover:text-highlight">Contact</a>
            <a href="#s" className="lg:block hidden flex-1 text-center hover:text-highlight">Sign Up</a>
        </div>
    );

}
