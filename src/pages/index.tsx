import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hacker from '../images/hacker.png';
import Arrow from '../images/arrow.png';
import NP from '../images/logos/NP.png';
import NYP from '../images/logos/NYP.png';
import SP from '../images/logos/SP.png';
import TP from '../images/logos/TP.png';
import RP from '../images/logos/RP.png';
import OffensiveSecurity from '../images/sponsors/offensive_security.png';
import CYS from '../images/sponsors/cys.png';
import GT from '../images/sponsors/govtech.png';
import Github from '../images/socials/github.png';
import Discord from '../images/socials/discord.png';
import Instagram from '../images/socials/instagram.png';
import '../styles/fog.css';

const equalLoaderPermutation = [
    '\u00A0\u00A0\u00A0\u00A0', '=\u00A0\u00A0\u00A0', '==\u00A0\u00A0', '===\u00A0', '====', '\u00A0===', '\u00A0\u00A0==', '\u00A0\u00A0\u00A0=', '\u00A0\u00A0\u00A0\u00A0',
    '\u00A0\u00A0\u00A0=', '\u00A0\u00A0==', '\u00A0===', '====', '====', '===\u00A0', '==\u00A0\u00A0', '=\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A0'
];

function Link({ href, children }: { href: string; children: React.ReactNode | React.ReactNode[] }) {

    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;

}

function IndexPage() {

    const [equalLoader, setEqualLoader] = useState('\u00A0\u00A0\u00A0\u00A0');
    const [sponsorsLoaderText, setSponsorsLoaderText] = useState('Starting sponsors.d service...');

    useEffect(() => {

        let int: NodeJS.Timer;

        const cb: IntersectionObserverCallback = (entries) => {

            clearInterval(int);

            setSponsorsLoaderText('Starting sponsors.d service...');

            entries.forEach(() => {

                let i = 0;
                int = setInterval(() => {

                    if (i < equalLoaderPermutation.length - 1) i += 1;
                    else i = 0;
                    setEqualLoader(equalLoaderPermutation[i]);

                }, 50);

                setTimeout(() => {

                    setEqualLoader('\u00A0OK\u00A0');
                    setSponsorsLoaderText('Started sponsors.d service');
                    clearInterval(int);

                }, 2000);

            });

        };

        const observer = new IntersectionObserver(cb, {
            root: document.querySelector('#root'),
            rootMargin: '0px',
            threshold: 1.0
        });

        const toObserve = document.getElementById('loader');
        if (toObserve) observer.observe(toObserve);

    }, []);

    return (<div className="w-full h-screen bg-black">

        {/* Top Landing */}
        <div className="w-full h-full relative flex">
            <div id="foglayer_01" className="fog xl:block hidden">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div id="foglayer_02" className="fog xl:block hidden">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div id="foglayer_03" className="fog xl:block hidden">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div className="w-full h-full flex flex-col absolute z-50">
                <Header />
                <div className="flex w-4/5 mx-auto h-5/6 md:h-full flex-col lg:flex-row mt-auto md:mt-0">
                    <div className="w-full xl:h-full flex items-center flex-col justify-center text-white mt-auto lg:mt-0">
                        <h1 className="xl:text-5xl md:text-3xl text-xl font-bold xl:mb-12 md:mb-8 mb-4 leading-normal tracking-[0.4rem]">
                            Which will crash first, your computer, or
                            <span className="text-highlight font-extrabold hero glitch layers" data-text="YOUth?"> YOUth?</span>
                        </h1>
                        <span className="xl:text-2xl md:text-lg text-sm tracking-widest">
                            Join us in our upcoming 48 hour Capture-The-Flag as we band together
                            as Earth&apos;s last group of revolutionaries to reclaim Cyberspace and
                            restore peace to our world. You are among the last remaining survivors,
                            cyberspace is counting on you!
                            <br />
                            <br />
                            What are you waiting for?  You&apos;re our only hope!
                        </span>
                    </div>
                    <img src={Hacker} className="lg:h-4/5 h-1/2 lg:self-end self-center" alt="Hacker" style={{ transform: 'scale(-1, 1)' }} />
                </div>
                <a href="#about" className="lg:block hidden">
                    <img src={Arrow} className="absolute z-50 left-0 right-0 bottom-0 mx-auto mb-10 brightness-150 " alt="Arrow" />
                </a>
            </div>
        </div>

        {/* About */}
        <div className="xl:w-3/5 w-4/5 mx-auto py-28 flex justify-center flex-col text-white" id="about">
            <h1 className="xl:!text-2xl !text-lg font-bold mb-10 font-mono typing">&gt;&gt; cat about.txt</h1>
            <span className="xl:text-xl tracking-widest appear1">
                Lag and Crash is an inter-polytechnic CTF targeted at Polytechnic,
                Institute of Technical Education and Junior College students. The event is organised
                between the Polytechnic Cybersecurity Interest Groups.
            </span>
            <br />
            <span className="xl:text-xl tracking-widest appear1">
                The goal of this CTF competition is to provide a means of exposure for students
                from the various Institutions of Higher Learning (IHL) to the field of
                Cybersecurity, and give them a taste of the many different concepts
                involved in this complex field.
            </span>
            <h1 className="xl:!text-2xl !text-lg font-bold mb-10 font-mono typing2 mt-12">&gt;&gt; grep -rnw &quot;./&quot; -e &quot;Team&quot;</h1>
            <div className="flex xl:space-x-12 space-y-8 items-center justify-center flex-wrap appear2">
                <Link href="/"><img className="w-48 h-48" src={TP} alt="Temasek Polytechnic" /></Link>
                <Link href="/"><img className="w-40 h-40" src={NYP} alt="Nanyang Polytechnic" /></Link>
                <Link href="/"><img className="w-48 h-48" src={NP} alt="Ngee Ann Polytechnic" /></Link>
                <Link href="/"><img className="w-40 h-40" src={SP} alt="Singapore Polytechnic" /></Link>
                <Link href="/"><img className="w-48 h-48" src={RP} alt="Republic Polytechnic" /></Link>
            </div>
            <h1 className="xl:!text-2xl !text-lg font-bold mb-10 font-mono typing3">&gt;&gt;</h1>
        </div>

        <div className="w-4/5 mx-auto flex items-center relative mb-8" style={{ height: 16, filter: 'drop-shadow(rgba(0, 224, 199, 0.6) -1px -1px 2px) drop-shadow(rgba(0, 224, 199, 0.6) 1px 1px 2px)' }}>
            <div className="w-1/2 bg-white self-end h-px" />
            <div className="flex items-center h-full justify-center overflow-hidden" style={{ width: 16 }}>
                <div className="h-px bg-white absolute -rotate-45" style={{ width: 22 }} />
            </div>
            <div className="w-1/2 bg-white self-start h-px" />
            <div className="absolute flex justify-end space-x-3 right-0 bottom-0 w-1/5">
                <div className="h-2 bg-highlight w-1/5 rounded-sm" />
                <div className="h-2 bg-highlight w-1/5 rounded-sm" />
                <div className="h-2 bg-highlight w-3/5 rounded-sm" />
            </div>
        </div>

        {/* Sponsors */}
        <div className="xl:w-3/5 w-4/5 mx-auto py-20 flex items-center justify-center flex-col text-white relative">
            <h1 className="font-mono xl:text-lg tracking-widest w-full" id="loader">
                [
                {equalLoader}
                ]&nbsp;
                {sponsorsLoaderText}
            </h1>
            <h1 className="font-mono xl:text-lg tracking-widest w-full mb-4 break-words" id="loader">
                [
                {equalLoader}
                ]
                sh: python -c &quot;print render_template(&apos;sponsors.jinja&apos;)&quot;
            </h1>
            <div className={`${equalLoader.includes('OK') ? 'opacity-100' : 'opacity-0'} w-full`}>
                <h1 className="text-sm font-bold tracking-widest text-zinc-500 font-mono w-full hover:text-white/75 cursor-pointer transition z-50">&lt;h1&gt;Made possible by the wonderful folks at:&lt;/h1&gt;</h1>
                <h1 className="text-sm font-bold tracking-widest text-zinc-500 mb-10 font-mono w-full hover:text-white/75 cursor-pointer transition z-50">&lt;% for sponsor in sponsors %&gt;</h1>
                <div className="flex lg:space-x-20 space-y-8 justify-center items-center flex-wrap w-full my-10">
                    <Link href="/"><img className="h-28" src={OffensiveSecurity} alt="Offensive Security" /></Link>
                    <Link href="/"><img className="h-28" src={CYS} alt="Cyber Youth Singapore" /></Link>
                    <Link href="/"><img className="h-28" src={GT} alt="GovTech" /></Link>
                </div>
                <h1 className="text-sm font-bold tracking-widest text-zinc-500 mb-10 font-mono w-full hover:text-white/75 cursor-pointer transition z-50">&lt;% endfor %&gt;</h1>
            </div>
        </div>

        <div className="w-4/5 mx-auto flex items-center relative mb-8" style={{ height: 16, filter: 'drop-shadow(rgba(0, 224, 199, 0.6) -1px -1px 2px) drop-shadow(rgba(0, 224, 199, 0.6) 1px 1px 2px)' }}>
            <div className="absolute flex justify-start space-x-3 left-0 top-0 w-1/5">
                <div className="h-2 bg-highlight w-1/5 rounded-sm" />
                <div className="h-2 bg-highlight w-1/5 rounded-sm" />
                <div className="h-2 bg-highlight w-3/5 rounded-sm" />
            </div>
            <div className="w-1/2 bg-white self-end h-px" />
            <div className="flex items-center h-full justify-center overflow-hidden" style={{ width: 16 }}>
                <div className="h-px bg-white absolute -rotate-45" style={{ width: 22 }} />
            </div>
            <div className="w-1/2 bg-white self-start h-px" />
        </div>

        {/* Contacts */}
        <div className="w-3/5 mx-auto py-20 flex items-center justify-center flex-col text-white relative">
            <div className="opacity-50 absolute top-0 bottom-0 left-0 right-0 z-0" style={{ backgroundImage: "url('/grid.svg')", WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 40%, transparent 70%)' }} />
            <h1 className="text-3xl font-bold mb-12 leading-normal tracking-[0.4rem]">Contact Us</h1>
            <div className="flex flex-col lg:flex-row lg:space-x-24 space-y-8 items-center justify-center flex-wrap w-full my-10 z-50">
                <Link href="/"><img className="h-28" src={Discord} alt="Discord" /></Link>
                <Link href="https://www.instagram.com/lagandcrash/"><img className="h-28" src={Instagram} alt="Instagram" /></Link>
                <Link href="/"><img className="h-28" src={Github} alt="Github" /></Link>
            </div>
        </div>
    </div>);

}

export default IndexPage;
