import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundLines } from '@/components/ui/background-lines';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Button as MovingBorderButton } from './ui/moving-border';

const Hero: React.FC = () => {
  const words = [
    {
      text: "Hello,",
      className: "text-foreground",
    },
    {
      text: "I",
      className: "text-foreground",
    },
    {
      text: "am",
      className: "text-foreground",
    },
    {
      text: "Noah",
      className: "text-primary",
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#151515] skew-x-[-10deg] translate-x-20 hidden lg:block z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-0">

        <BackgroundLines className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 relative bg-transparent flex flex-col items-center md:items-start justify-center">
          <div className="z-20">
            <MovingBorderButton borderRadius='1.75rem' className='whitespace-nowrap text-primary text-sm font-bold'>
              Software Engineer
            </MovingBorderButton>
            <div className="my-6">
              <TypewriterEffect words={words} className="text-4xl md:text-6xl font-bold text-center md:text-left" />
            </div>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              A Fullstack Developer
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Hopefully my &quot;hilarious&quot; portfolio brings a smile to your face!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio" className="tracking-wide uppercase">
                  See My Work
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="#contact" className="tracking-wide uppercase">
                  Say Hello
                </a>
              </Button>
            </div>
          </div>
        </BackgroundLines>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          {/* The Halo Effect matching your image style */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">

            {/* Radial Sunburst / Halo Background */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/40 to-transparent blur-2xl scale-125 animate-pulse"></div>

            {/* Spiky Halo Effect (CSS simulation of the sun rays in your image) */}
            <div className="absolute w-full h-full rounded-full border-20 border-dotted border-primary/20 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[110%] h-[110%] rounded-full border-2 border-primary/30 opacity-50"></div>

            {/* Image Container */}
            <Image
              src="/cool-avatar.png"
              alt="Noah Avatar"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
              width={450}
              height={450}
            />

            {/* Overlay helpful text for the user */}
            <div className="absolute -bottom-10 left-0 right-0 text-center z-20 opacity-0 hover:opacity-100 transition-opacity bg-black/80 text-xs text-white p-2 rounded">
              (Use your halo image here!)
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Hero;