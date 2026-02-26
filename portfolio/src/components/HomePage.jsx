"use client"
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { UserContext } from '@/context/UserContext';

gsap.registerPlugin(useGSAP);

const HomePage = ({ onComplete }) => {
  const container = useRef();

  const { setStart } = useContext(UserContext);


  useGSAP(() => {
   
    const titleSplit = new SplitType(".title", { types: "chars" });
    gsap.set(titleSplit.chars, { y: 100, opacity: 0 });
    gsap.to(titleSplit.chars, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0.5,
    });


    const sloganSplit = new SplitType(".slogan", { types: "words" });
    gsap.set(sloganSplit.words, { y: 20, opacity: 0 });
    gsap.to(sloganSplit.words, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      delay: 1.5, 
    });


    gsap.fromTo(".button-container", 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 2.2, ease: "expo.out" }
    );
  }, { scope: container });

  const startExperience = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); 
      }
    });

   
    tl.to(".title, .slogan, .button", {
      y: -150,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power4.in"
    })
    .to(container.current, {
      opacity: 0,
      backgroundColor: "#ffffff",
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4");

   setStart(true);
  };

 
  return (
    <div ref={container} className="home-screen flex h-screen items-center justify-center relative bg-whitesmoke overflow-hidden">
 <div className="absolute inset-0 pointer-events-none severance-lines"></div>

    <div className="flex flex-col items-center text-center gap-4 relative z-10">
      <h1 className="title">
        Luka Chikashvili
      </h1>

      <h2 className='text-5xl slogan'>
        Developer as an <span className='underline underline-offset-6'>Innie</span>, Polyglot as an <span>Outie</span>
      </h2>

      <div className='mt-12 button-container'>
        <button className="button" onClick={startExperience}>
          <div className="button-outer">
            <div className="button-inner">
              <span>Start Experience</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
  );
};

export default HomePage;