import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const anchorLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Timeline', href: '/#timeline' },
    { label: 'Sponsors', href: '/#sponsors' },
    { label: 'Contact', href: '/#contacts' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-cosmic-base/98 border-b border-cosmic-blue-light/15 shadow-depth'
                : 'bg-cosmic-base/80 border-b border-cosmic-blue-light/5'
        }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4">

                {/* Logo */}
                <Link to="/" onClick={close} className="relative group flex-shrink-0">
                    <img
                        src="/images/logo.svg"
                        alt="Lag and Crash"
                        className="h-9 w-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-1 -right-1 text-[10px] font-bold tracking-wider text-cosmic-blue-light/80 font-mono">
                        v6.0
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-7">
                    {anchorLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-cosmic-text-secondary hover:text-cosmic-blue-light transition-colors duration-300 tracking-wide text-sm font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        to="/details"
                        className="text-cosmic-text-secondary hover:text-cosmic-red-light transition-colors duration-300 tracking-wide text-sm font-medium"
                    >
                        Details
                    </Link>
                    <a
                        href="https://forms.gle/6N6hvu5ujPp3TvLc9"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 px-4 py-2 border border-cosmic-blue-light/50 text-cosmic-blue-light text-sm font-mono rounded hover:bg-cosmic-blue-light/10 hover:border-cosmic-blue-light transition-all duration-300"
                    >
                        Register →
                    </a>
                </nav>

                {/* Hamburger (mobile) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col justify-center gap-[5px] p-2 w-10 h-10"
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block h-0.5 bg-cosmic-text-secondary rounded transition-all duration-300 origin-center ${
                        menuOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'
                    }`} />
                    <span className={`block h-0.5 bg-cosmic-text-secondary rounded transition-all duration-300 ${
                        menuOpen ? 'opacity-0 w-6' : 'w-4'
                    }`} />
                    <span className={`block h-0.5 bg-cosmic-text-secondary rounded transition-all duration-300 origin-center ${
                        menuOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-6'
                    }`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                menuOpen ? 'max-h-96 border-t border-cosmic-blue-light/10' : 'max-h-0'
            }`}>
                <nav className="flex flex-col bg-cosmic-base/98 px-6 py-2">
                    {anchorLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={close}
                            className="py-3 text-cosmic-text-secondary hover:text-cosmic-blue-light transition-colors duration-200 tracking-wide border-b border-cosmic-text-muted/10 text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        to="/details"
                        onClick={close}
                        className="py-3 text-cosmic-text-secondary hover:text-cosmic-red-light transition-colors duration-200 tracking-wide border-b border-cosmic-text-muted/10 text-sm"
                    >
                        Details
                    </Link>
                    <a
                        href="https://forms.gle/6N6hvu5ujPp3TvLc9"
                        target="_blank"
                        rel="noreferrer"
                        onClick={close}
                        className="mt-3 mb-4 py-3 px-4 border border-cosmic-blue-light/50 text-cosmic-blue-light font-mono text-sm rounded text-center hover:bg-cosmic-blue-light/10 transition-all duration-300"
                    >
                        Register →
                    </a>
                </nav>
            </div>
        </header>
    );
}
