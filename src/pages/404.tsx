import React from 'react';

export default function NotFound() {

    return (<div className="font-mono w-screen h-screen flex items-center justify-center flex-col">
        <span className="text-white tracking-widest text-2xl select-none">404 Not Found</span>
        <a href="/" className="mt-8 underline mx-2 cursor-pointer hover:text-white/75 text-sky-300">To Home</a>
    </div>);

}

export const Head = function Head() {

    return (<title>404 Not Found</title>);

};
