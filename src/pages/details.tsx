import React from 'react';
import Header from '../components/Header';
import TerminalBlock, { createTerminalLines } from '../components/TerminalBlock';
import '../styles/nebula.css';

export function Head() {
    return (
        <>
            <link rel="icon" type="image/x-icon" href="/logo.png" />
            <title>Details - Lag and Crash 6.0</title>
        </>
    );
}

export default function Details() {

    const qualifiersLines = createTerminalLines([
        { type: 'command', content: 'cat qualifiers.txt' },
        { type: 'empty' },
        { type: 'output', content: '📅 Date: 16 March (12:00 PM) – 17 March (6:00 PM)' },
        { type: 'output', content: '⏱️  Duration: 30 Hours' },
        { type: 'output', content: '🌐 Venue: Online' },
        { type: 'output', content: '🎯 Format: Jeopardy-style CTF' },
        { type: 'empty' },
        { type: 'output', content: 'Open to ALL students!' },
        { type: 'output', content: 'Solve challenges, capture flags, earn points.' },
        { type: 'output', content: '⚠️  Only top 10 teams advance to finals!' },
    ]);

    const finalsLines = createTerminalLines([
        { type: 'command', content: 'cat finals.txt' },
        { type: 'empty' },
        { type: 'output', content: '📅 Date: 21 March 2026' },
        { type: 'output', content: '⏱️  Time: 9:00 AM – 5:00 PM' },
        { type: 'output', content: '📍 Venue: SIT (Singapore Institute of Technology)' },
        { type: 'output', content: '🎯 Format: King of the Hill (Attack/Defense)' },
        { type: 'empty' },
        { type: 'output', content: '⚠️  Attendance is compulsory for all finalists!' },
    ]);

    const eligibilityLines = createTerminalLines([
        { type: 'command', content: 'cat eligibility.txt' },
        { type: 'empty' },
        { type: 'output', content: '• Jeopardy CTF: Open to all teams' },
        { type: 'output', content: '• Finals & Prizes: Pre-University teams only' },
        { type: 'output', content: '  (Secondary School, JC, Polytechnic)' },
        { type: 'output', content: '• Location: Teams must be Singapore-based' },
    ]);

    const teamFormationLines = createTerminalLines([
        { type: 'command', content: 'cat team_formation.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Team size: Up to 4 members' },
        { type: 'empty' },
        { type: 'output', content: 'Note: If you have less than 4 members, join the' },
        { type: 'output', content: '#👷team-formation channel on our Discord server.' },
        { type: 'empty' },
        { type: 'output', content: '⚠️  Only full teams of 4 members eligible for prizes' },
    ]);

    const prizesLines = createTerminalLines([
        { type: 'command', content: 'cat prizes.txt' },
        { type: 'empty' },
        { type: 'output', content: 'Prizes: TBC' },
        { type: 'output', content: 'Details will be announced soon!' },
    ]);

    return (
        <div className="w-full min-h-screen bg-cosmic-base">
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

                <div className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20">
                    {/* Page Title */}
                    <h1 
                        className="text-4xl md:text-5xl font-bold mb-16 tracking-wide text-center"
                        style={{
                            background: 'linear-gradient(135deg, #60A5FA 0%, #E5E7EB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Event Details
                    </h1>

                    <div className="space-y-16">
                        {/* Qualifiers Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-blue-light">🔍</span>
                                Qualifiers — Online Jeopardy CTF
                            </h2>
                            <TerminalBlock lines={qualifiersLines} variant="blue" />
                        </div>

                        {/* Finals Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-red-light">🛡️</span>
                                Finals — King of the Hill
                            </h2>
                            <TerminalBlock lines={finalsLines} variant="red" />
                        </div>

                        {/* Eligibility Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-blue-light">🎓</span>
                                Eligibility
                            </h2>
                            <TerminalBlock lines={eligibilityLines} variant="blue" />
                        </div>

                        {/* Team Formation Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-text-secondary">👥</span>
                                Team Formation
                            </h2>
                            <TerminalBlock lines={teamFormationLines} variant="neutral" />
                        </div>

                        {/* Prizes Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-yellow-500/80">🏆</span>
                                Prizes
                            </h2>
                            <TerminalBlock lines={prizesLines} variant="neutral" />
                        </div>

                        {/* Registration Section */}
                        <div className="space-y-6 pt-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-blue-light">📝</span>
                                Registration
                            </h2>
                            
                            <div className="bg-cosmic-panel/40 border border-cosmic-blue-light/25 rounded-lg p-8 text-center" style={{ boxShadow: '0 0 15px rgba(96, 165, 250, 0.12), inset 0 0 18px rgba(96, 165, 250, 0.04)' }}>
                                <p className="text-cosmic-text-primary text-xl md:text-2xl font-semibold mb-4">
                                    Registration closes:{' '}
                                    <span className="text-cosmic-red-light">12th March 2026</span>
                                </p>
                                
                                <div className="pt-6">
                                    <a 
                                        href="https://forms.gle/AP2DmE2f6mqNPJJMA"
                                        className="inline-block group relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue-mid to-cosmic-red-mid opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />
                                        <div className="relative bg-cosmic-panel border-l-2 border-cosmic-blue-light border-r-2 border-cosmic-red-light px-10 py-5 rounded-lg transition-all duration-300 group-hover:shadow-glow-blue">
                                            <span className="text-cosmic-text-primary font-bold text-xl tracking-wide">
                                                Register Now!
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Questions Section */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-cosmic-text-primary tracking-wide flex items-center gap-3">
                                <span className="text-cosmic-text-secondary">📩</span>
                                Questions?
                            </h2>
                            
                            <div className="bg-cosmic-panel/30 border border-cosmic-text-muted/20 rounded-lg p-8 shadow-depth">
                                <p className="text-cosmic-text-secondary text-lg mb-6">
                                    Drop us a message on Instagram or Discord!
                                </p>
                                
                                <div className="space-y-3 text-cosmic-text-primary">
                                    <p className="font-mono">
                                        <span className="text-cosmic-text-muted">Discord:</span>{' '}
                                        <a 
                                            href="https://discord.gg/H6U6NykFRe" 
                                            className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300 underline"
                                        >
                                            Join our Discord
                                        </a>
                                    </p>
                                    <p className="font-mono">
                                        <span className="text-cosmic-text-muted">Email:</span>{' '}
                                        <a 
                                            href="mailto:interpoly@lagncra.sh" 
                                            className="text-cosmic-blue-light hover:text-cosmic-red-light transition-colors duration-300 underline"
                                        >
                                            interpoly@lagncra.sh
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Spacing */}
                <div className="h-20" />
            </div>
        </div>
    );
}
