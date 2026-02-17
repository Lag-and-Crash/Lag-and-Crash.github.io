import { useEffect } from 'react';

export default function SignupRedirect() {
    useEffect(() => {
        window.location.href = 'https://forms.gle/6N6hvu5ujPp3TvLc9';
    }, []);

    return (
        <div className="w-full min-h-screen bg-cosmic-base flex items-center justify-center">
            <div className="text-cosmic-text-secondary text-lg">
                Redirecting to registration form...
            </div>
        </div>
    );
}
