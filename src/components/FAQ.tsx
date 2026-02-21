import React, { useState } from 'react';

const faqs = [
    {
        q: 'Who can participate?',
        a: 'The Jeopardy CTF qualifiers are open to all teams worldwide. However, only Pre-University teams based in Singapore (Secondary School, JC, ITE, Polytechnic) are eligible for the Finals and prizes.',
    },
    {
        q: 'How large can my team be?',
        a: 'Teams can have 1 to 4 members. Each member must have their own individual CTFd account and be registered under the same team on the platform.',
    },
    {
        q: 'Is it free to enter?',
        a: 'Yes! Participation in Lag and Crash 6.0 is completely free. Just register, form your team, and compete.',
    },
    {
        q: 'What categories are in the CTF?',
        a: 'The Jeopardy qualifiers include Web Exploitation, Cryptography, Reverse Engineering, Forensics, OSINT, Binary Exploitation (PWN), and more. The Finals is a King of the Hill format.',
    },
    {
        q: 'How do we qualify for Finals?',
        a: 'The top 5 Polytechnic teams and top 5 Non-Polytechnic teams from the qualifiers advance to the Finals. Only Singapore-based Pre-University teams are eligible for finals slots and prizes.',
    },
    {
        q: 'When does registration close?',
        a: 'Registration closes on March 12, 2026. Make sure your team is registered before the deadline!',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="max-w-4xl mx-auto px-4 md:px-8 py-24">
            {/* Section heading */}
            <div className="text-center mb-16">
                <p className="font-mono text-cosmic-text-muted text-xs tracking-[0.3em] mb-3 uppercase">
                    $ cat faq.txt
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-cosmic-text-primary tracking-wide">
                    Common{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #60A5FA 0%, #F87171 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Questions
                    </span>
                </h2>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="border border-cosmic-blue-light/15 rounded-lg overflow-hidden bg-cosmic-panel/30 hover:border-cosmic-blue-light/35 transition-colors duration-300"
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 cursor-pointer"
                        >
                            <span className="text-cosmic-text-primary font-semibold text-base leading-snug">
                                {faq.q}
                            </span>
                            <span
                                className="text-cosmic-blue-light text-2xl font-light shrink-0 transition-transform duration-300"
                                style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                            >
                                +
                            </span>
                        </button>
                        <div
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: open === i ? '240px' : '0px' }}
                        >
                            <p className="px-6 pb-5 text-cosmic-text-secondary text-sm leading-relaxed border-t border-cosmic-blue-light/10 pt-3">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
