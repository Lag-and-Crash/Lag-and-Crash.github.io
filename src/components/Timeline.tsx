import React, { useRef, useEffect, useState } from 'react';

interface TimelineEvent {
    label: string;
    date: string;
    description: string;
    icon: string;
    dotClass: string;
    cardClass: string;
    labelClass: string;
}

const events: TimelineEvent[] = [
    {
        label: 'Registration',
        date: 'Closes Mar 12, 2026',
        description: 'Form your team of 1–4. Each member needs their own CTFd account.',
        icon: '📝',
        dotClass: 'border-cosmic-text-secondary bg-cosmic-depth',
        cardClass: 'border-cosmic-text-muted/30 bg-cosmic-panel/40',
        labelClass: 'text-cosmic-text-secondary',
    },
    {
        label: 'Qualifiers',
        date: 'Mar 16–17, 2026',
        description: '30-hour online Jeopardy CTF. Open to all teams. Top 10 teams advance to Finals.',
        icon: '🎯',
        dotClass: 'border-cosmic-blue-light bg-cosmic-blue-deep/30',
        cardClass: 'border-cosmic-blue-light/30 bg-cosmic-panel/50',
        labelClass: 'text-cosmic-blue-light',
    },
    {
        label: 'Finals',
        date: 'Mar 21, 2026',
        description: 'King of the Hill at SIT. Pre-University teams battle for prizes in-person.',
        icon: '👑',
        dotClass: 'border-cosmic-red-light bg-cosmic-red-deep/30',
        cardClass: 'border-cosmic-red-light/30 bg-cosmic-panel/50',
        labelClass: 'text-cosmic-red-light',
    },
];

export default function Timeline() {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="timeline" ref={ref} className="max-w-6xl mx-auto px-4 md:px-8 py-24">
            {/* Section heading */}
            <div className="text-center mb-16">
                <p className="font-mono text-cosmic-text-muted text-xs tracking-[0.3em] mb-3 uppercase">
                    $ cat timeline.txt
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-cosmic-text-primary tracking-wide">
                    Event{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #60A5FA 0%, #F87171 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Timeline
                    </span>
                </h2>
            </div>

            {/* Desktop: horizontal */}
            <div className="hidden md:flex items-start relative">
                {/* Connecting line */}
                <div className="absolute top-5 left-[calc(16.7%)] right-[calc(16.7%)] h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(96,165,250,0.3), rgba(96,165,250,0.6), rgba(248,113,113,0.6), rgba(248,113,113,0.3))' }}
                />

                {events.map((event, i) => (
                    <div
                        key={i}
                        className={`flex-1 flex flex-col items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: `${i * 180}ms` }}
                    >
                        {/* Dot */}
                        <div className={`relative z-10 w-10 h-10 rounded-full border-2 ${event.dotClass} flex items-center justify-center text-lg mb-6`}
                            style={i === 1
                                ? { boxShadow: '0 0 14px rgba(96,165,250,0.5)' }
                                : i === 2
                                    ? { boxShadow: '0 0 14px rgba(248,113,113,0.5)' }
                                    : {}
                            }
                        >
                            {event.icon}
                        </div>

                        {/* Card */}
                        <div className={`border rounded-lg p-5 mx-3 w-full ${event.cardClass}`}>
                            <p className={`font-mono text-xs tracking-widest mb-2 ${event.labelClass}`}>
                                {event.date}
                            </p>
                            <h3 className="text-cosmic-text-primary font-bold text-lg mb-2 tracking-wide">
                                {event.label}
                            </h3>
                            <p className="text-cosmic-text-secondary text-sm leading-relaxed">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile: vertical */}
            <div className="flex md:hidden flex-col">
                {events.map((event, i) => (
                    <div key={i} className="flex gap-5">
                        {/* Dot + vertical line */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full border-2 ${event.dotClass} flex items-center justify-center text-lg shrink-0`}
                                style={i === 1
                                    ? { boxShadow: '0 0 14px rgba(96,165,250,0.5)' }
                                    : i === 2
                                        ? { boxShadow: '0 0 14px rgba(248,113,113,0.5)' }
                                        : {}
                                }
                            >
                                {event.icon}
                            </div>
                            {i < events.length - 1 && (
                                <div className="w-px flex-1 my-2"
                                    style={{ background: 'linear-gradient(to bottom, rgba(96,165,250,0.4), rgba(248,113,113,0.2))' }}
                                />
                            )}
                        </div>

                        {/* Card */}
                        <div
                            className={`border rounded-lg p-5 mb-6 flex-1 ${event.cardClass} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${i * 180}ms` }}
                        >
                            <p className={`font-mono text-xs tracking-widest mb-2 ${event.labelClass}`}>
                                {event.date}
                            </p>
                            <h3 className="text-cosmic-text-primary font-bold text-lg mb-2 tracking-wide">
                                {event.label}
                            </h3>
                            <p className="text-cosmic-text-secondary text-sm leading-relaxed">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
