import React from 'react';
import Header from '../components/Header';

export function Head() {
    return (
        <>
            <link rel="icon" type="image/x-icon" href="/logo.png" />
            <title>Details</title>
        </>
    );
}

export default function Details() {
    return (
        <div className="w-full h-screen bg-black">
            <Header />
            <div className="w-full relative flex pt-24">
                <div className="flex items-center w-4/5 mx-auto flex-col justify-center text-white py-8">
                    
                    <h1 className="xl:text-5xl w-full md:text-3xl text-xl font-bold xl:mb-12 md:mb-8 mb-4 leading-normal tracking-[0.4rem]">
                        Details
                    </h1>

                    <h2 className="xl:text-3xl w-full md:text-xl text-lg font-bold md:my-8 my-4 leading-normal tracking-[0.1rem]">
                        🏆 Prizes
                    </h2>
                    <span className="w-full font-mono">
                        Prizes: TBC
                    </span>

                    <h2 className="xl:text-3xl w-full md:text-xl text-lg font-bold md:my-8 my-4 leading-normal tracking-[0.1rem]">
                        📅 Dates
                    </h2>
                    <span className="w-full">
                        Lag and Crash 2026 will be happening on the following dates:
                    </span>

                    <table className="w-full border my-8 border-collapse">
                        <tr>
                            <th className="p-4 border">Date</th>
                            <th className="p-4 border">Day</th>
                            <th className="p-4 border">Venue</th>
                        </tr>
                        <tr>
                            <td className="p-4 border">16th March 2026</td>
                            <td className="p-4 border">Monday</td>
                            <td className="p-4 border">Online</td>
                        </tr>
                        <tr>
                            <td className="p-4 border">17th March 2026</td>
                            <td className="p-4 border">Tuesday</td>
                            <td className="p-4 border">Online</td>
                        </tr>
                        <tr>
                            <td className="p-4 border">21st March 2026</td>
                            <td className="p-4 border">Saturday</td>
                            <td className="p-4 border">Finals</td>
                        </tr>
                    </table>

                    <h2 className="xl:text-3xl w-full md:text-xl text-lg font-bold md:my-8 my-4 leading-normal tracking-[0.1rem]">
                        👥 Team Formation
                    </h2>

                    <span className="w-full">
                        You can form a team of up to
                        <span className="underline mx-1.5">4 members.</span>
                        <br />
                        Note: If you have less than 4 members, you may look for a team in the #👷team-formation channel on our Discord server.
                        <br />
                        ❗️ Only full teams of 4 members will be eligible for prizes.
                    </span>

                </div>
            </div>
        </div>
    );
}
