import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TerminalBlock, { createTerminalLines } from '../components/TerminalBlock';
import '../styles/nebula.css';

function DetailsPage() {

    const qualifiersTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat qualifiers.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Format: 30-hour Online Jeopardy CTF' },
        { type: 'output', content: 'Date: March 16-17, 2026' },
        { type: 'output', content: 'Time: 12:00 March 16 - 18:00 March 17' },
        { type: 'empty' },
        { type: 'output', content: 'Categories: Web, Crypto, Reverse Engineering,' },
        { type: 'output', content: 'Forensics, OSINT, PWN, and more!' },
        { type: 'empty' },
        { type: 'output', content: 'Top 5 Polytechnic and top 5 Non-Polytechnic teams advance to finals.' },
    ]);

    const finalsTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat finals.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Format: King of the Hill (Physical)' },
        { type: 'output', content: 'Date: March 21, 2026' },
        { type: 'output', content: 'Location: Singapore Institute of Technology (SIT)' },
        { type: 'empty' },
        { type: 'output', content: 'Bring your A-game for the ultimate showdown!' },
    ]);

    const eligibilityTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat eligibility.txt' },
        { type: 'empty' },
        { type: 'output', content: '• Jeopardy CTF: Open to all teams' },
        { type: 'output', content: '• Finals & Prizes: Pre-University teams only' },
        { type: 'output', content: '  (Secondary School, JC, ITE, Polytechnic)' },
        { type: 'output', content: '• Location: Teams must be Singapore-based' },
        { type: 'empty' },
        { type: 'output', content: 'Note: Anyone can participate in the online phase,' },
        { type: 'output', content: 'but only eligible teams qualify for finals & prizes.' },
    ]);

    const teamTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat team_rules.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Team Size: 1-4 members' },
        { type: 'output', content: 'Registration: Per team (not individual)' },
        { type: 'empty' },
        { type: 'output', content: 'Each team member must:' },
        { type: 'output', content: '• Have their own CTFd account' },
        { type: 'output', content: '• Be part of the same team on the platform' },
        { type: 'output', content: '• Comply with competition rules' },
    ]);

    const prizesTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat prizes.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Prizes for Pre-University teams (Finals):' },
        { type: 'empty' },
        { type: 'output', content: '🥇 1st Place: TBA' },
        { type: 'output', content: '🥈 2nd Place: TBA' },
        { type: 'output', content: '🥉 3rd Place: TBA' },
        { type: 'empty' },
        { type: 'output', content: 'Additional prizes and swag for participants!' },
        { type: 'output', content: 'Details will be announced soon.' },
    ]);

    const questionsTerminalLines = createTerminalLines([
        { type: 'command', content: 'cat contact.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Got questions? Reach out to us!' },
        { type: 'empty' },
        { type: 'output', content: 'Discord: https://discord.gg/H6U6NykFRe' },
        { type: 'output', content: 'Instagram: @lagandcrash' },
        { type: 'output', content: 'Email: interpoly@lagncra.sh' },
    ]);

    return (
        <div className="w-full min-h-screen bg-cosmic-base">
            <Helmet>
                <title>Event Details - Lag and Crash 6.0</title>
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

            {/* Main content */}
            <div className="content-layer">
                <Header />

                {/* Page Header */}
                <div className="max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-cosmic-text-muted hover:text-cosmic-blue-light transition-colors duration-300 text-sm font-mono mb-8 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span>
                        Back to Home
                    </Link>
                    <h1 
                        className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-wide"
                        style={{
                            background: 'linear-gradient(135deg, #60A5FA 0%, #E5E7EB 50%, #F87171 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Event Details
                    </h1>
                    <p className="text-center text-cosmic-text-secondary text-lg">
                        Everything you need to know about Lag & Crash 6.0
                    </p>
                </div>

                {/* Details Sections */}
                <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12 pb-20">
                    
                    {/* Qualifiers Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary mb-6 tracking-wide flex items-center gap-3">
                            <span className="text-cosmic-blue-light">🎯</span>
                            Qualifiers (Online)
                        </h2>
                        <TerminalBlock lines={qualifiersTerminalLines} variant="blue" />
                    </section>

                    {/* Finals Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary mb-6 tracking-wide flex items-center gap-3">
                            <span className="text-cosmic-red-light">👑</span>
                            Finals (Physical)
                        </h2>
                        <TerminalBlock lines={finalsTerminalLines} variant="red" />
                    </section>

                    {/* Eligibility Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary mb-6 tracking-wide flex items-center gap-3">
                            <span className="text-cosmic-blue-light">✅</span>
                            Eligibility
                        </h2>
                        <TerminalBlock lines={eligibilityTerminalLines} variant="blue" />
                    </section>

                    {/* Team Rules Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary mb-6 tracking-wide flex items-center gap-3">
                            <span className="text-cosmic-text-secondary">👥</span>
                            Team Information
                        </h2>
                        <TerminalBlock lines={teamTerminalLines} variant="neutral" />
                    </section>

                    {/* Prizes Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary mb-6 tracking-wide flex items-center gap-3">
                            <span className="text-cosmic-red-light">🏆</span>
                            Prizes
                        </h2>
                        <TerminalBlock lines={prizesTerminalLines} variant="red" />
                    </section>

                    {/* Registration Section */}
                    <section>
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-blue-light">📝</span>
                                Registration
                            </h2>
                            
                            <div className="bg-cosmic-panel/40 border border-cosmic-blue-light/25 rounded-lg p-8 text-center" style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.12), inset 0 0 18px rgba(96, 165, 250, 0.04)' }}>
                                <p className="text-cosmic-text-primary text-xl md:text-2xl font-semibold mb-4">
                                    Registration closes:{' '}
                                    <span className="text-cosmic-red-light">March 12, 2026</span>
                                </p>
                                
                                <div className="pt-6">
                                    <a
                                        href="https://forms.gle/6N6hvu5ujPp3TvLc9"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative inline-block"
                                    >
                                        <div className="absolute inset-0 bg-cosmic-blue-mid opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-lg" />
                                        <div
                                            className="relative px-10 py-5 border-2 border-cosmic-blue-light rounded-lg font-bold text-cosmic-blue-light text-xl tracking-wide transition-all duration-300 group-hover:text-white"
                                            style={{ background: 'rgba(96,165,250,0.1)' }}
                                        >
                                            Register Now
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Questions Section */}
                    <section>
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-text-secondary">📩</span>
                                Questions?
                            </h2>
                            
                            <TerminalBlock lines={questionsTerminalLines} variant="neutral" />
                        </div>
                    </section>
                </div>

                {/* Footer Spacing */}
                <div className="h-20" />
            </div>
        </div>
    );
}

export default DetailsPage;
