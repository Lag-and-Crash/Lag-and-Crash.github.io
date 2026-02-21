import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TerminalBlock, { createTerminalLines } from '../components/TerminalBlock';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';
import '../styles/nebula.css';

const REGISTER_URL = 'https://forms.gle/6N6hvu5ujPp3TvLc9';

const stats = [
    { value: '30 hrs', label: 'Qualifier duration' },
    { value: 'Jeopardy + KotH', label: 'Competition formats' },
    { value: 'Top 10', label: 'Teams advance to finals' },
    { value: 'Free', label: 'Entry, open to all' },
];

const organiserLinks = [
    { href: 'https://www.instagram.com/sp.gryphons/', src: '/images/logos/SP.png', alt: 'Singapore Polytechnic', size: 'w-28 h-28' },
    { href: 'https://www.instagram.com/nyp_infosec/', src: '/images/logos/NYP.png', alt: 'Nanyang Polytechnic', size: 'w-28 h-24' },
    { href: 'https://www.instagram.com/nullsec.sig/', src: '/images/logos/NP.png', alt: 'Ngee Ann Polytechnic', size: 'w-28 h-28' },
    { href: 'https://www.instagram.com/rp.hextech/', src: '/images/logos/RP.png', alt: 'Republic Polytechnic', size: 'w-28 h-28' }
];

const socialLinks = [
    { href: 'https://discord.gg/H6U6NykFRe', src: '/images/socials/discord.png', alt: 'Discord' },
    { href: 'https://www.instagram.com/lagandcrash/', src: '/images/socials/instagram.png', alt: 'Instagram' },
    { href: 'https://www.youtube.com/@lagandcrash', src: '/images/socials/youtube.png', alt: 'YouTube' },
    { href: 'https://github.com/Lag-and-Crash', src: '/images/socials/github.png', alt: 'GitHub' },
    { href: 'https://www.linkedin.com/company/lagandcrash/', src: '/images/socials/linkedin.png', alt: 'LinkedIn' },
];

const aboutTerminalLines = createTerminalLines([
    { type: 'command', content: 'cat about.txt' },
    { type: 'empty' },
    {
        type: 'output',
        content: 'Lag and Crash is an inter-polytechnic CTF targeted',
    },
    {
        type: 'output',
        content: 'at Polytechnic, ITE and JC students — organised by',
    },
    {
        type: 'output',
        content: 'the Polytechnic Cybersecurity Interest Groups.',
    },
    { type: 'empty' },
    {
        type: 'output',
        content: 'This is your chance to learn, compete, and prove',
    },
    {
        type: 'output',
        content: 'your skills in a real hacking environment.',
    },
]);

export default function IndexPage() {
    return (
        <div className="w-full min-h-screen bg-cosmic-base">
            <Helmet>
                <title>Lag and Crash 6.0</title>
                <meta name="description" content="Singapore's inter-polytechnic cybersecurity CTF — qualifiers March 16–17, finals March 21, 2026." />
                <link rel="icon" type="image/x-icon" href="/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Helmet>

            {/* ── Background system ── */}
            <div className="nebula-container">
                <div id="nebula_layer_01" />
                <div id="nebula_layer_02" />
            </div>
            <div className="starfield" />
            <div className="grain-overlay" />
            <div className="vignette" />
            <div className="scanlines" />
            <div className="rim-light-top" />
            <div className="rim-light-left" />
            <div className="rim-light-right" />
            <div className="cosmic-frame-tl" />
            <div className="cosmic-frame-tr" />
            <div className="cosmic-frame-bl" />
            <div className="cosmic-frame-br" />

            {/* ── Content ── */}
            <div className="content-layer">
                <Header />

                {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center px-4 md:px-8 pt-20 pb-24">
                    <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[3fr,2fr] gap-12 lg:gap-16 items-center">

                        {/* ── Left: text ── */}
                        <div className="space-y-7">

                            {/* Terminal tagline — typewriter */}
                            <div className="overflow-hidden">
                                <p className="hero-typewriter font-mono text-cosmic-text-muted text-base md:text-lg tracking-widest">
                                    BREACH THE SYSTEM.
                                </p>
                            </div>

                            {/* Event name */}
                            <div className="hero-reveal-1">
                                <h1
                                    className="text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tighter"
                                    style={{
                                        background: 'linear-gradient(135deg, #60A5FA 0%, #E5E7EB 55%, #F87171 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    LAG &amp;<br />CRASH
                                </h1>
                                <p className="text-5xl md:text-6xl font-black text-cosmic-text-muted tracking-tight mt-1">
                                    6.0
                                </p>
                            </div>

                            {/* Sub-copy */}
                            <p className="hero-reveal-2 text-cosmic-text-secondary text-lg leading-relaxed max-w-lg">
                                Singapore's premier inter-polytechnic cybersecurity competition.
                                30-hour Jeopardy qualifiers online — King of the Hill finals at SIT.
                            </p>

                            {/* Date badges */}
                            <div className="hero-reveal-3 flex flex-wrap gap-3">
                                <span
                                    className="font-mono text-sm px-4 py-2 rounded border border-cosmic-blue-light/40 text-cosmic-blue-light"
                                    style={{ background: 'rgba(96,165,250,0.06)' }}
                                >
                                    📅 Mar 16–17 · Qualifiers
                                </span>
                                <span
                                    className="font-mono text-sm px-4 py-2 rounded border border-cosmic-red-light/40 text-cosmic-red-light"
                                    style={{ background: 'rgba(248,113,113,0.06)' }}
                                >
                                    👑 Mar 21 · Finals @ SIT
                                </span>
                            </div>

                            {/* CTAs */}
                            <div className="hero-reveal-4 flex flex-wrap gap-4 pt-2">
                                {/* Primary */}
                                <a
                                    href={REGISTER_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative inline-block"
                                >
                                    <div className="absolute inset-0 bg-cosmic-blue-mid opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-lg" />
                                    <div
                                        className="relative px-8 py-4 border-2 border-cosmic-blue-light rounded-lg font-bold text-cosmic-blue-light text-lg tracking-wide transition-all duration-300 group-hover:text-white"
                                        style={{ background: 'rgba(96,165,250,0.1)' }}
                                    >
                                        Register Now
                                    </div>
                                </a>
                                {/* Secondary */}
                                <Link
                                    to="/details"
                                    className="inline-block px-8 py-4 border border-cosmic-text-muted/40 text-cosmic-text-secondary rounded-lg font-semibold text-lg hover:border-cosmic-text-secondary/60 hover:text-cosmic-text-primary transition-all duration-300"
                                >
                                    Event Details →
                                </Link>
                            </div>
                        </div>

                        {/* ── Right: hacker image (desktop) ── */}
                        <div className="relative hidden lg:block hero-reveal-img">
                            <div className="relative">
                                {/* Blue rim */}
                                <div
                                    className="absolute -left-10 top-1/4 w-36 h-3/4 opacity-50 blur-3xl"
                                    style={{ background: 'linear-gradient(180deg, rgba(96,165,250,0.4) 0%, transparent 100%)' }}
                                />
                                {/* Red rim */}
                                <div
                                    className="absolute -right-10 top-1/3 w-36 h-2/3 opacity-50 blur-3xl"
                                    style={{ background: 'linear-gradient(180deg, rgba(248,113,113,0.4) 0%, transparent 100%)' }}
                                />
                                {/* Atmospheric fade */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/3 opacity-80"
                                    style={{ background: 'linear-gradient(0deg, #05070D 0%, transparent 100%)' }}
                                />
                                <img
                                    src="/images/hacker.png"
                                    className="relative z-10 w-full h-auto"
                                    alt="Hacker silhouette"
                                    style={{
                                        transform: 'scale(-1, 1)',
                                        filter: 'drop-shadow(0 0 40px rgba(96,165,250,0.25)) drop-shadow(0 0 60px rgba(248,113,113,0.15))',
                                        maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="scroll-chevron">
                        <svg
                            className="w-6 h-6 text-cosmic-text-muted"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </section>

                {/* ═════════════════════════════════════════ ABOUT ═════════════════════════════════════════ */}
                <section id="about" className="max-w-6xl mx-auto px-4 md:px-8 py-24">
                    <div className="text-center mb-16">
                        <p className="font-mono text-cosmic-text-muted text-xs tracking-[0.3em] mb-3 uppercase">
                            $ whoami
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-text-primary tracking-wide">
                            About{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #60A5FA 0%, #F87171 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Lag &amp; Crash
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Terminal block */}
                        <TerminalBlock lines={aboutTerminalLines} variant="blue" />

                        {/* Stat cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.value}
                                    className="border border-cosmic-blue-light/20 bg-cosmic-panel/40 rounded-lg p-5 hover:border-cosmic-blue-light/40 transition-colors duration-300"
                                    style={{ boxShadow: '0 0 12px rgba(96,165,250,0.08)' }}
                                >
                                    <p
                                        className="font-black text-2xl mb-1 leading-none"
                                        style={{
                                            background: 'linear-gradient(135deg, #60A5FA 0%, #F87171 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p className="text-cosmic-text-muted text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-cosmic-text-secondary text-center mt-12 text-base">
                        Full eligibility rules, prizes and team information on the{' '}
                        <Link
                            to="/details"
                            className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300 underline underline-offset-2"
                        >
                            Event Details
                        </Link>{' '}
                        page.
                    </p>
                </section>

                {/* ═════════════════════════════════════ TIMELINE ═════════════════════════════════════ */}
                <Timeline />

                {/* ═════════════════════════════════════ SPONSORS ═════════════════════════════════════ */}
                <Sponsors />

                {/* ═══════════════════════════════════ ORGANISERS ═══════════════════════════════════ */}
                <section id="organisers" className="max-w-5xl mx-auto px-4 md:px-8 py-20">
                    <div className="text-center mb-12">
                        <p className="font-mono text-cosmic-text-muted text-xs tracking-[0.3em] mb-3 uppercase">
                            $ ls ./organisers/
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide">
                            Organised By
                        </h2>
                        <p className="text-cosmic-text-muted text-sm mt-2">
                            Polytechnic Cybersecurity Interest Groups
                        </p>
                    </div>
                    <div
                        className="bg-cosmic-panel/30 border border-cosmic-blue-light/15 rounded-lg p-8"
                        style={{ boxShadow: '0 0 15px rgba(96,165,250,0.08), inset 0 0 18px rgba(96,165,250,0.03)' }}
                    >
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {organiserLinks.map((org) => (
                                <a
                                    key={org.alt}
                                    href={org.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <img
                                        className={`${org.size} object-contain`}
                                        src={org.src}
                                        alt={org.alt}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ FAQ ═══════════════════════════════════════ */}
                <FAQ />

                {/* ═════════════════════════════════════ FOOTER ═════════════════════════════════════ */}
                <footer id="contacts" className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
                    <div
                        className="border-t pt-16"
                        style={{ borderColor: 'rgba(96,165,250,0.15)' }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-[0.3em]"
                            style={{
                                background: 'linear-gradient(135deg, #60A5FA 0%, #8B5CF6 50%, #F87171 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            INTERPOLY
                        </h2>

                        {/* Social icons */}
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.alt}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <img
                                        className="w-20 md:w-24 h-auto"
                                        src={social.src}
                                        alt={social.alt}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Contact + copyright */}
                        <div className="text-center space-y-2">
                            <p className="text-cosmic-text-muted text-sm">
                                Questions?{' '}
                                <a
                                    href="mailto:interpoly@lagncra.sh"
                                    className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300"
                                >
                                    interpoly@lagncra.sh
                                </a>
                            </p>
                            <p className="text-cosmic-text-muted text-xs">
                                Still want more CTF? Check out{' '}
                                <a
                                    href="https://dsta.gov.sg/brainhack"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300 underline underline-offset-2"
                                >
                                    DSTA BrainHack
                                </a>{' '}
                                too!
                            </p>
                            <p className="text-cosmic-text-muted text-xs pt-2">
                                © {new Date().getFullYear()} Lag and Crash · lagncra.sh
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
