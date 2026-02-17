import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TerminalBlock, { createTerminalLines } from '../components/TerminalBlock';
import '../styles/nebula.css';

function Link({ href, children }: { href: string; children: React.ReactNode | React.ReactNode[] }) {
    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function IndexPage() {

    const [hasPlayed, setPlayed] = useState(false);
    const [sponsorsVisible, setSponsorsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasPlayed) {
                        setTimeout(() => {
                            setSponsorsVisible(true);
                            setPlayed(true);
                        }, 800);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const toObserve = document.getElementById('sponsors-section');
        if (toObserve) observer.observe(toObserve);

        return () => observer.disconnect();
    }, [hasPlayed]);

    const bootTerminalLines = createTerminalLines([
        { type: 'command', content: 'boot lnc_6.0' },
        { type: 'output', content: 'Initializing inter-poly CTF environment…' },
        { type: 'output', content: 'Status: Accepting challengers' },
    ]);

    const aboutTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat about.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Lag and Crash is an inter-polytechnic CTF targeted at Polytechnic, ITE and JC students. Organised between the Polytechnic Cybersecurity Interest Groups.' },
        { type: 'empty' },
        { type: 'output', content: 'This competition provides exposure to students from various Institutions of Higher Learning to the field of Cybersecurity and the concepts involved.' },
    ]);

    const eligibilityTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat eligibility.txt' },
        { type: 'empty' },
        { type: 'output', content: '• Jeopardy CTF: Open to all teams' },
        { type: 'output', content: '• Finals & Prizes: Pre-University teams only' },
        { type: 'output', content: '  (Secondary School, JC, ITE, Polytechnic)' },
        { type: 'output', content: '• Location: Teams must be Singapore-based' },
    ]);

    return (
        <div className="w-full min-h-screen bg-cosmic-base">
            <Helmet>
                <title>Lag and Crash 6.0</title>
                <link rel="icon" type="image/x-icon" href="/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Helmet>
            {/* Nebula Background System (Optimized: 2 layers) */}
            <div className="nebula-container">
                <div id="nebula_layer_01" />
                <div id="nebula_layer_02" />
            </div>

            {/* Starfield and overlays */}
            <div className="starfield" />
            <div className="grain-overlay" />
            <div className="vignette" />
            <div className="scanlines" />

            {/* Rim lighting */}
            <div className="rim-light-top" />
            <div className="rim-light-left" />
            <div className="rim-light-right" />

            {/* Corner frames */}
            <div className="cosmic-frame-tl" />
            <div className="cosmic-frame-tr" />
            <div className="cosmic-frame-bl" />
            <div className="cosmic-frame-br" />

            {/* Content Layer */}
            <div className="content-layer">
                <Header />

                {/* Hero Section */}
                <div className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 pb-8">
                    <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[3fr,2fr] gap-12 lg:gap-16 items-top">
                        {/* Left: Hero Content */}
                        <div className="space-y-4 animate-fadeIn">
                            {/* Main Headline */}
                            <h1 
                                className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight tracking-wide"
                                style={{
                                    background: 'linear-gradient(135deg, #60A5FA 0%, #E5E7EB 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 2px 20px rgba(96, 165, 250, 0.2)'
                                }}
                            >
                                Multiple Targets.<br />
                                Multiple Exploits.<br />
                                One Winner.
                            </h1>

                            {/* Terminal Boot Block */}
                            <TerminalBlock lines={bootTerminalLines} showCursor variant="blue" />

                            {/* Description */}
                            <p className="text-cosmic-text-secondary text-base md:text-lg leading-relaxed">
                                Lag and Crash is back for its <span className="text-cosmic-blue-light font-semibold">sixth edition</span>. 
                                Whether you're new to cybersecurity or an experienced flag hunter, this is your chance to learn, 
                                compete, and prove your skills.
                            </p>

                            <p className="text-cosmic-text-secondary text-sm md:text-base leading-relaxed">
                                Join us for a <span className="text-cosmic-text-primary font-semibold">30-hour online Jeopardy CTF</span> (March 16-17), 
                                with <span className="text-cosmic-red-light font-semibold">top 10 teams</span> advancing to the{' '}
                                <span className="text-cosmic-red-light font-semibold">King of the Hill</span> finals at SIT on March 21.
                            </p>

                            {/* CTA Button */}
                            <div className="pt-2">
                                <a 
                                    href="https://forms.gle/6N6hvu5ujPp3TvLc9"
                                    className="inline-block group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue-mid to-cosmic-red-mid opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />
                                    <div className="relative bg-cosmic-panel border-l-2 border-cosmic-blue-light border-r-2 border-cosmic-red-light px-8 py-4 rounded-lg transition-all duration-300 group-hover:shadow-glow-blue">
                                        <span className="text-cosmic-text-primary font-bold text-xl tracking-wide">
                                            Register Now
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Hooded Figure with Rim Lighting */}
                        <div className="relative lg:block hidden animate-slideUp">
                            <div className="relative">
                                {/* Blue rim light (left side) */}
                                <div 
                                    className="absolute -left-8 top-1/4 w-32 h-3/4 opacity-40 blur-3xl"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(96, 165, 250, 0.4) 0%, transparent 100%)'
                                    }}
                                />
                                {/* Red rim light (right side) */}
                                <div 
                                    className="absolute -right-8 top-1/3 w-32 h-2/3 opacity-40 blur-3xl"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(248, 113, 113, 0.4) 0%, transparent 100%)'
                                    }}
                                />
                                {/* Atmospheric fade at bottom */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 h-1/3 opacity-60"
                                    style={{
                                        background: 'linear-gradient(0deg, #05070D 0%, transparent 100%)'
                                    }}
                                />
                                <img 
                                    src="/images/hacker.png" 
                                    className="relative z-10 w-full h-auto" 
                                    alt="Hacker silhouette"
                                    style={{ 
                                        transform: 'scale(-1, 1)',
                                        filter: 'drop-shadow(0 0 40px rgba(96, 165, 250, 0.2)) drop-shadow(0 0 60px rgba(248, 113, 113, 0.15))',
                                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                                    }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div id="about" className="max-w-5xl mx-auto px-4 md:px-8 py-20">
                    <TerminalBlock 
                        lines={aboutTerminalLines} 
                        className="mb-12"
                        variant="blue"
                    />

                    <TerminalBlock 
                        lines={eligibilityTerminalLines}
                        className="mb-12"
                        variant="red"
                    />

                    <p className="text-cosmic-text-secondary text-center text-lg">
                        Find out more details on prizes, dates and team formation{' '}
                        <a 
                            href="/details" 
                            className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300 underline"
                        >
                            here
                        </a>.
                    </p>
                </div>

                {/* Team Logos */}
                <div id="organisers" className="max-w-5xl mx-auto px-4 md:px-8 py-16">
                    <div className="bg-cosmic-panel/30 border border-cosmic-blue-light/20 rounded-lg p-8" style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.12), inset 0 0 18px rgba(96, 165, 250, 0.04)' }}>
                        <h2 className="text-2xl font-bold text-cosmic-text-primary text-center mb-8 font-mono tracking-wide">
                            Organised by Polytechnic Cybersecurity Interest Groups
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                            <Link href="https://www.instagram.com/sp.gryphons/">
                                <img className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300" src="/images/logos/SP.png" alt="Singapore Polytechnic" />
                            </Link>
                            <Link href="https://www.instagram.com/nyp_infosec/">
                                <img className="w-32 h-28 object-contain hover:scale-110 transition-transform duration-300" src="/images/logos/NYP.png" alt="Nanyang Polytechnic" />
                            </Link>
                            <Link href="https://www.instagram.com/nullsec.sig/">
                                <img className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300" src="/images/logos/NP.png" alt="Ngee Ann Polytechnic" />
                            </Link>
                            <Link href="https://www.instagram.com/rp.hextech/">
                                <img className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300" src="/images/logos/RP.png" alt="Republic Polytechnic" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contacts Section */}
                <div id="contacts" className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-[0.3rem]"
                        style={{
                            background: 'linear-gradient(135deg, #60A5FA 0%, #8B5CF6 50%, #F87171 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        INTERPOLY
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
                        <Link href="https://discord.gg/H6U6NykFRe">
                            <img className="w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" src="/images/socials/discord.png" alt="Discord" />
                        </Link>
                        <Link href="https://www.instagram.com/lagandcrash/">
                            <img className="w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" src="/images/socials/instagram.png" alt="Instagram" />
                        </Link>
                        <Link href="https://www.youtube.com/@lagandcrash">
                            <img className="w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" src="/images/socials/youtube.png" alt="Youtube" />
                        </Link>
                        <Link href="https://github.com/Lag-and-Crash">
                            <img className="w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" src="/images/socials/github.png" alt="Github" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/lagandcrash/">
                            <img className="w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" src="/images/socials/linkedin.png" alt="LinkedIn" />
                        </Link>
                    </div>
                </div>

                {/* Footer Spacing */}
                <div className="h-20" />
            </div>
        </div>
    );
}

export default IndexPage;
