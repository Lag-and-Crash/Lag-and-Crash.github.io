import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hacker from "../images/hacker.png";
import Arrow from "../images/arrow.png";
import NP from "../images/logos/NP.png";
import NYP from "../images/logos/NYP.png";
import SP from "../images/logos/SP.png";
import TP from "../images/logos/TP.png";
import RP from "../images/logos/RP.png";
import '../styles/fog.css';

function IndexPage() {

    return (<div className="w-full h-screen bg-black">

        {/* Top Landing */}
        <div className="w-full h-full relative flex">
            <div id="foglayer_01" className="fog">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div id="foglayer_02" className="fog">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div id="foglayer_03" className="fog">
                <div className="image01" />
                <div className="image02" />
            </div>
            <div className="w-full h-full flex flex-col absolute z-50">
                <Header />
                <div className="flex w-4/5 mx-auto h-full">
                    <div className="w-full h-full flex items-center flex-col justify-center text-white">
                        <h1 className="text-5xl font-bold mb-12 leading-normal tracking-[0.4rem]">
                            Which will crash first, your computer, or
                            <span className="text-highlight font-extrabold hero glitch layers" data-text="YOUth?"> YOUth?</span>
                        </h1>
                        <span className="text-2xl tracking-widest">
                            Join us in our upcoming 48 hour Capture-The-Flag as we band together
                            as Earth&apos;s last group of revolutionaries to reclaim Cyberspace and
                            restore peace to our world. You are among the last remaining survivors,
                            cyberspace is counting on you!
                            <br />
                            <br />
                            What are you waiting for?  You&apos;re our only hope!
                        </span>
                    </div>
                    <img src={Hacker} className="h-4/5 self-end" alt="Hacker" style={{ transform: 'scale(-1, 1)' }} />
                </div>
                <a href="#about">
                    <img src={Arrow} className="absolute z-50 left-0 right-0 bottom-0 mx-auto mb-10 brightness-150 " alt="Arrow" />
                </a>
            </div>
        </div>

        {/* About */}
        <div className="w-3/5 mx-auto h-full flex items-center justify-center flex-col text-white" id="about">
            <h1 className="text-6xl font-bold tracking-widest mb-10">About</h1>
            <span className="text-2xl tracking-widest text-center">
                Lag and Crash is an inter-polytechnic CTF targeted at Polytechnic,
                Institute of Technical Education and Junior College students. The event is organised
                between the Polytechnic Cybersecurity Interest Groups.
            </span>
            <h1 className="text-6xl font-bold tracking-widest mb-10 mt-20">Team</h1>
            <div className="flex space-x-12 items-center justify-center flex-wrap">
                <a href="#"><img className="w-48 h-48" src={TP} alt="Temasek Polytechnic" /></a>
                <a href="#"><img className="w-40 h-40" src={NYP} alt="Nanyang Polytechnic" /></a>
                <a href="#"><img className="w-48 h-48" src={NP} alt="Ngee Ann Polytechnic" /></a>
                <a href="#"><img className="w-40 h-40" src={SP} alt="Singapore Polytechnic" /></a>
                <a href="#"><img className="w-48 h-48" src={RP} alt="Republic Polytechnic" /></a>
            </div>
        </div>

        {/* Sponsors */}
        <div className="w-full mx-auto h-full flex items-center justify-center flex-col text-white" style={{ backgroundColor: '#281C02' }}>
            <h1 className="text-6xl font-bold tracking-widest mb-10">Sponsors</h1>
        </div>

        <div class="wheel">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>

            <div class="cabin"></div>
            <div class="cabin"></div>
            <div class="cabin"></div>
            <div class="cabin"></div>
            <div class="cabin"></div>
            <div class="cabin"></div>
        </div>

    </div>);

}

export default IndexPage;
