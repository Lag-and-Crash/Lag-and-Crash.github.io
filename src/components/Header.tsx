import React from 'react';
import Logo from '../images/logo.svg';
import '../styles/header.css';

export default function Header() {

    return (
        <div className="w-screen flex items-center justify-center py-8 text-white text-xl lg:px-[17%] fixed left-0 right-0 z-50 bg-black">
            <a href="#about" className="lg:block hidden flex-1 text-center hover:text-highlight">About</a>
            <a href="#sponsors" className="lg:block hidden flex-1 text-center hover:text-highlight">Sponsors</a>
            <a href="/" className="lg:block">
                <img src={Logo} alt="" className="px-10 logo cursor-pointer" />
            </a>
            <a href="#contacts" className="lg:block hidden flex-1 text-center hover:text-highlight">Contact</a>
            <a href="/details" className="lg:block hidden flex-1 text-center hover:text-highlight">Details</a>
        </div>
    );

}
