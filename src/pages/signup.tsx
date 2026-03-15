import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupRedirect() {
    return (
        <div className="w-full min-h-screen bg-cosmic-base flex items-center justify-center px-4">
            <div className="max-w-2xl text-center space-y-6">
                <div className="text-6xl mb-4">🔒</div>
                <h1 className="text-4xl md:text-5xl font-bold text-cosmic-text-primary mb-4">
                    Registration Closed
                </h1>
                <p className="text-cosmic-text-secondary text-lg mb-6">
                    Registration closed on <span className="text-cosmic-red-light font-semibold">March 12, 2026</span>.
                </p>
                <div className="bg-cosmic-panel/40 border border-cosmic-blue-light/25 rounded-lg p-6">
                    <p className="text-cosmic-text-primary font-semibold mb-3">📅 Event Timeline</p>
                    <p className="text-cosmic-text-secondary text-sm mb-2">
                        <span className="text-cosmic-blue-light">March 16-17:</span> Online Qualifiers (30 hours)
                    </p>
                    <p className="text-cosmic-text-secondary text-sm">
                        <span className="text-cosmic-red-light">March 20:</span> Finals (King of the Hill)
                    </p>
                </div>
                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 border border-cosmic-blue-light/50 text-cosmic-blue-light rounded-lg font-semibold hover:bg-cosmic-blue-light/10 transition-all duration-300"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
