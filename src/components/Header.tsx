import React from 'react';
import Logo from '../images/logo.svg';

export default function Header() {

    return (
        <div className="w-screen flex items-center justify-center py-6 text-white text-lg lg:px-[17%] fixed left-0 right-0 z-50 bg-cosmic-base/95 border-b border-cosmic-blue-light/10">
            <a 
                href="/#about" 
                className="lg:block hidden flex-1 text-center text-cosmic-text-secondary hover:text-cosmic-blue-light transition-colors duration-300 tracking-wide"
            >
                About
            </a>
            <a 
                href="/#sponsors" 
                className="lg:block hidden flex-1 text-center text-cosmic-text-secondary hover:text-cosmic-blue-light transition-colors duration-300 tracking-wide"
            >
                Sponsors
            </a>
            <a href="/" className="lg:block relative group">
                <img src={Logo} alt="Lag and Crash" className="px-10 logo cursor-pointer transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute -bottom-2 right-4 text-xs font-bold tracking-wider text-cosmic-blue-light/70">
                    v6.0
                </span>
            </a>
            <a 
                href="/#contacts" 
                className="lg:block hidden flex-1 text-center text-cosmic-text-secondary hover:text-cosmic-blue-light transition-colors duration-300 tracking-wide"
            >
                Contact
            </a>
            <a 
                href="/details" 
                className="lg:block hidden flex-1 text-center text-cosmic-text-secondary hover:text-cosmic-red-light transition-colors duration-300 tracking-wide"
            >
                Details
            </a>
        </div>
    );

}
