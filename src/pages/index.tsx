import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hacker from '../images/hacker.png';
import Arrow from '../images/arrow.png';
import NP from '../images/logos/NP.png';
import NYP from '../images/logos/NYP.png';
import SP from '../images/logos/SP.png';
import TP from '../images/logos/TP.png';
import RP from '../images/logos/RP.png';

import CSIT from '../images/sponsors/CSIT/CSIT.png'
import Div0 from '../images/sponsors/Div0/div0.png';
import CSA from '../images/sponsors/CSA/CSA.png';
import DSTA from '../images/sponsors/DSTA/DSTA.png';
import GT from '../images/sponsors/GOVTECH/GovTechSg.png';
import AISP from '../images/sponsors/AISP/AiSP.png';
import CYS from '../images/sponsors/CYS/CYS.png';
import OS from '../images/sponsors/OffSec/OffSec.png';

import Github from '../images/socials/github.png';
import Discord from '../images/socials/discord.png';
import Instagram from '../images/socials/instagram.png';
import Youtube from '../images/socials/youtube.png';
import LinkedIn from '../images/socials/linkedin.png';
import '../styles/fog.css';

const equalLoaderPermutation = [
    '\u00A0\u00A0\u00A0\u00A0', '=\u00A0\u00A0\u00A0', '==\u00A0\u00A0', '===\u00A0', '====', '\u00A0===', '\u00A0\u00A0==', '\u00A0\u00A0\u00A0=', '\u00A0\u00A0\u00A0\u00A0',
    '\u00A0\u00A0\u00A0=', '\u00A0\u00A0==', '\u00A0===', '====', '====', '===\u00A0', '==\u00A0\u00A0', '=\u00A0\u00A0\u00A0', '\u00A0\u00A0\u00A0\u00A0'
];

function Link({ href, children }: { href: string; children: React.ReactNode | React.ReactNode[] }) {

    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;

}

export function Head() {

    return (<>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <title>Lag and Crash 2024</title>
    </>);

}

function IndexPage() {

    const [hasPlayed, setPlayed] = useState(false);
    const [equalLoader, setEqualLoader] = useState('\u00A0\u00A0\u00A0\u00A0');
    const [sponsorsLoaderText, setSponsorsLoaderText] = useState('Starting sponsors.d service...');

    useEffect(() => {

        let int: NodeJS.Timer;

        const cb: IntersectionObserverCallback = (entries) => {

            clearInterval(int);
            if (hasPlayed) return;

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
                    setPlayed(true);
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

        return () => observer.disconnect();

    }, [hasPlayed]);

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
                        <h1 className="xl:text-5xl md:text-3xl text-xl font-bold xl:mb-12 pt-4 md:mb-8 mb-4 leading-normal tracking-[0.4rem]">
                            Which will crash first, your computer, or
                            <span className="text-highlight font-extrabold hero glitch layers" data-text="YOUth?"> YOUth?</span>
                        </h1>
                        <span className="xl:text-2xl md:text-lg text-sm tracking-widest">
                            Join us in our upcoming 48 hour Capture-The-Flag as we band together
                            as Earth&apos;s last group of revolutionaries to reclaim Cyberspace and
                            restore peace to our world. You are among the last remaining survivors,
                            Cyberspace is counting on you!
                            <br />
                            <br />
                            What are you waiting for?  You&apos;re our only hope!
                        </span>
                        <a href="https://forms.gle/6BQHv8zWjUVSeHYq8" className="bg-transparent border-highlight border-4 self-start px-6 py-3 font-bold text-2xl mt-10 rounded-lg text-white hover:text-black hover:bg-highlight transition-all">Sign up now!</a>
                    </div>
                    <img src={Hacker} className="lg:h-4/5 h-1/2 lg:self-end self-center" alt="Hacker" style={{ transform: 'scale(-1, 1)' }} />
                </div>
                <a href="#about" className="lg:block hidden">
                    <img src={Arrow} className="absolute z-40 left-0 right-0 bottom-0 mx-auto mb-10 brightness-150 " alt="Arrow" />
                </a>
            </div>
        </div>

        {/* About */}
        <div id="about" className="xl:w-3/5 w-4/5 mx-auto py-28 flex justify-center flex-col text-white">
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
            <br />
            <span className="xl:text-xl tracking-widest appear1">
                Find out more details on prizes, dates and team formation
                <a href="/details" className="mx-2 underline hover:text-highlight">here.</a>
            </span>
            <h1 className="xl:!text-2xl !text-lg font-bold mb-10 font-mono typing2 mt-12">&gt;&gt; grep -rnw &quot;./&quot; -e &quot;Team&quot;</h1>

            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="flex justify-center p-2">
                    <Link href="https://www.instagram.com/tp_cyber/"><img className="w-40 h-40 max-w-full" src={TP} alt="Temasek Polytechnic" /></Link>
                </div>
                <div className="flex justify-center p-2">
                    <Link href="https://www.instagram.com/nyp_infosec/"><img className="w-40 h-32 max-w-full" src={NYP} alt="Nanyang Polytechnic" /></Link>
                </div>
                <div className="flex justify-center p-2">
                    <Link href="https://www.instagram.com/nullsec.sig/"><img className="w-40 h-40 max-w-full" src={NP} alt="Ngee Ann Polytechnic" /></Link>
                </div>
                <div className="flex justify-center p-2">
                    <Link href="https://www.instagram.com/sp.gryphons/"><img className="w-40 h-40 max-w-full" src={SP} alt="Singapore Polytechnic" /></Link>
                </div>
                <div className="flex justify-center p-2">
                    <Link href="https://www.instagram.com/republicpoly.soi/"><img className="w-40 h-40 max-w-full" src={RP} alt="Republic Polytechnic" /></Link>
                </div>
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
        <div id="sponsors" className="xl:w-3/5 w-4/5 mx-auto py-20 flex items-center justify-center flex-col text-white relative">
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
                <h1 className="text-sm font-bold tracking-widest text-zinc-500 mb-10 font-mono w-full hover:text-white/75 cursor-pointer transition z-50">&#123;% for sponsor in sponsors %&#125;</h1>

                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-start mb-10">
                        {/* Visionary Tier */}
                        <div className="flex-1 text-center px-2">
                            <h1 className="text-lg font-bold tracking-widest text-sky-300 pt-24 mb-4 font-mono hover:text-white/75 cursor-pointer transition z-50">&lt;h1&gt;Visionary&lt;/h1&gt;</h1>
                            <div className="flex justify-center">
                                <Link href="https://www.div0.sg/">
                                    <img className="max-w-[330px] h-[230px] object-contain" src={Div0} alt="Div0" />
                                </Link>
                            </div>
                        </div>

                        {/* Platinum Tier */}
                        <div className="flex-1 text-center px-2">
                            <h1 className="text-lg font-bold tracking-widest text-sky-300 pt-24 mb-4 font-mono hover:text-white/75 cursor-pointer transition z-50">&lt;h1&gt;Platinum&lt;/h1&gt;</h1>
                            <div className="flex justify-center">
                                <Link href="https://www.csit.gov.sg/">
                                    <img className="max-w-[330px] h-[230px] object-contain" src={CSIT} alt="CSIT" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Silver Tier */}
                    <h1 className="text-lg font-bold tracking-widest text-zinc-300 mb-10 font-mono w-full text-center hover:text-white/75 cursor-pointer transition z-50">&lt;h3&gt;Silver&lt;/h3&gt;</h1>
                    <div className="flex justify-center items-center flex-wrap gap-8 mb-10">
                        <Link href="https://www.dsta.gov.sg/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={DSTA} alt="DSTA" />
                        </Link>
                        
                        <Link href="https://www.csa.gov.sg/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={CSA} alt="CSA" />
                        </Link>
                        
                        <Link href="https://www.tech.gov.sg/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={GT} alt="GovTech" />
                        </Link>
                    </div>

                    {/* Bronze Tier */}
                    <h1 className="text-lg font-bold tracking-widest text-yellow-700 mb-10 font-mono w-full text-center hover:text-white/75 cursor-pointer transition z-50">&lt;h4&gt;Bronze&lt;/h4&gt;</h1>
                    <div className="flex justify-center items-center flex-wrap gap-8 mb-10">
                        <Link href="https://www.aisp.sg/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={AISP} alt="AISP" />
                        </Link>
                    </div>

                    {/* In-Kind Tier */}
                    <h1 className="text-lg font-bold tracking-widest text-yellow-700 mb-10 font-mono w-full text-center hover:text-white/75 cursor-pointer transition z-50">&lt;h5&gt;In-Kind&lt;/h5&gt;</h1>
                    <div className="flex justify-center items-center flex-wrap gap-8 mb-10">
                        <Link href="https://www.cyberyouth.sg/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={CYS} alt="CYS" />
                        </Link>
                        <Link href="https://www.offsec.com/">
                            <img className="max-w-[330px] h-[230px] object-contain" src={OS} alt="OffSec" />
                        </Link>
                    </div>
                </div>

                <h1 className="text-sm font-bold tracking-widest text-zinc-500 mb-10 font-mono w-full hover:text-white/75 cursor-pointer transition z-50">&#123;% endfor %&#125;</h1>
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
        <div id="contacts" className="w-3/5 mx-auto py-20 flex items-center justify-center flex-col text-white relative">
            <div className="opacity-50 absolute top-0 bottom-0 left-0 right-0 z-0" style={{ backgroundImage: "url('/grid.svg')", WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 40%, transparent 70%)' }} />
            
            <div className="flex flex-wrap justify-center items-center space-x-4 lg:space-x-8 my-10 z-50">

                <Link href="https://discord.gg/H6U6NykFRe">
                    <img className="w-24 lg:w-32 h-auto mx-auto" src={Discord} alt="Discord" />
                </Link>
                <Link href="https://www.instagram.com/lagandcrash/">
                    <img className="w-24 lg:w-32 h-auto mx-auto" src={Instagram} alt="Instagram" />
                </Link>
                <Link href="https://www.youtube.com/@lagandcrash">
                    <img className="w-24 lg:w-32 h-auto mx-auto" src={Youtube} alt="Youtube" />
                </Link>
                <Link href="https://github.com/Lag-and-Crash">
                    <img className="w-24 lg:w-32 h-auto mx-auto" src={Github} alt="Github" />
                </Link>
                <Link href="https://www.linkedin.com/company/lagandcrash/">
                    <img className="w-24 lg:w-32 h-auto mx-auto" src={LinkedIn} alt="LinkedIn" />
                </Link>

            </div>

        </div>
        <h1 className="text-sm font-bold tracking-widest pb-10 font-mono w-full text-white/50 text-center transition z-50">
            Still not enough CTF action for you? Why not check out
            <a href="https://dsta.gov.sg/brainhack" className="underline mx-2 cursor-pointer hover:text-white/75 text-sky-300">DSTA&apos;s BrainHacks</a>
            too!
        </h1>

    </div>);

}

export default IndexPage;
