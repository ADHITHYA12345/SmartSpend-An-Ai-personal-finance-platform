"use client";
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';

import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const imageRef = useRef();
  useEffect(()=>{
    const imageElement = imageRef.current;
    const HandleScroll = () =>{
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if(scrollPosition > scrollThreshold){
        imageElement.classList.add("scrolled")
      }
      else{
        imageElement.classList.remove("scrolled")
      }
    }
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);
  return (
    <div className="pb-20 px-">
    <div className="container text-center mx-auto">
    <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
  Manage Your Finance <br/> with Intelligence
</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      An AI-powered financial management platform that helps you track,
      analyze, and optimize your spending with real-time insights.
      </p>
      <div className="flex space-x-4 justify-center">
        <Link href="/dashboard">
        <Button size="lg" className="px-8">Get Started</Button>
        </Link>
        <Link href="/">
        <Button size="lg" variant="outline" className="px-8">demo </Button>
        </Link>
      </div>
      <div className="hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
        <Image src="/banner.png"
        alt="Dashboard Preview"
        width={1150}
        height={720}
        className="rounded-lg shadow-2xl border mx-auto "
        priority
        />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
