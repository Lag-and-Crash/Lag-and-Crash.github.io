import React, { useRef, useEffect, useState } from 'react';

interface Sponsor {
    name: string;
    src: string;
    href: string;
    imgClass: string;
}

interface Tier {
    label: string;
    colorClass: string;
    borderClass: string;
    glowStyle?: React.CSSProperties;
    sponsors: Sponsor[];
}

const tiers: Tier[] = [
    {
        label: 'GOLD',
        colorClass: 'text-yellow-400/80',
        borderClass: 'border-yellow-500/20',
        glowStyle: { boxShadow: '0 0 12px rgba(234,179,8,0.08)' },
        sponsors: [
            { name: 'DSTA', src: '/images/sponsors/DSTA/DSTA.png', href: 'https://www.dsta.gov.sg/', imgClass: 'w-[240px] h-[160px] object-contain' },
        ],
    },
    {
        label: 'SILVER',
        colorClass: 'text-zinc-400',
        borderClass: 'border-zinc-500/20',
        sponsors: [
            { name: 'CSIT', src: '/images/sponsors/CSIT/CSIT.png', href: 'https://www.csit.gov.sg/', imgClass: 'w-[220px] h-[140px] object-contain' },
            { name: 'CSA', src: '/images/sponsors/CSA/CSA.png', href: 'https://www.csa.gov.sg/', imgClass: 'w-[220px] h-[140px] object-contain' },
        ],
    },
    {
        label: 'VISIONARY',
        colorClass: 'text-cosmic-blue-light/70',
        borderClass: 'border-cosmic-blue-light/15',
        glowStyle: { boxShadow: '0 0 10px rgba(96,165,250,0.08)' },
        sponsors: [
            { name: 'Div0', src: '/images/sponsors/Div0/div0.png', href: 'https://www.div0.sg/', imgClass: 'w-[200px] h-[130px] object-contain' },
        ],
    },
    {
        label: 'IN-KIND',
        colorClass: 'text-cosmic-text-muted',
        borderClass: 'border-cosmic-text-muted/15',
        sponsors: [
            { name: 'AISP', src: '/images/sponsors/AISP/AiSP.png', href: 'https://www.aisp.sg/', imgClass: 'w-[180px] h-[120px] object-contain' },
            { name: 'YBN', src: '/images/sponsors/YBN/YBN.png', href: 'https://www.yes-but-no.org/', imgClass: 'w-[180px] h-[120px] object-contain' }
        ],
    },
];

export default function Sponsors() {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sponsors" ref={ref} className="max-w-6xl mx-auto px-4 md:px-8 py-24">
            {/* Section heading */}
            <div className="text-center mb-16">
                <p className="font-mono text-cosmic-text-muted text-xs tracking-[0.3em] mb-3 uppercase">
                    $ ls ./sponsors/
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-cosmic-text-primary tracking-wide">
                    Made{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #60A5FA 0%, #F87171 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Possible By
                    </span>
                </h2>
            </div>

            <div className={`space-y-14 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                {tiers.map((tier, ti) => (
                    <div key={tier.label} className="space-y-5"
                        style={{ transitionDelay: `${ti * 100}ms` }}
                    >
                        <p className={`font-mono text-center text-xs tracking-[0.3em] ${tier.colorClass}`}>
                            — {tier.label} —
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {tier.sponsors.map((sponsor) => (
                                <a
                                    key={sponsor.name}
                                    href={sponsor.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`bg-cosmic-panel/40 border ${tier.borderClass} rounded-lg p-6 hover:scale-[1.03] transition-transform duration-300 block`}
                                    style={tier.glowStyle}
                                >
                                    <img
                                        className={sponsor.imgClass}
                                        src={sponsor.src}
                                        alt={sponsor.name}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
