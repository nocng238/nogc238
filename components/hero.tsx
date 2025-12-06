import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#151515] skew-x-[-10deg] translate-x-20 hidden lg:block z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <div className="mb-4 inline-block px-4 py-1 border border-gray-600 rounded-full bg-darker/50 backdrop-blur-sm">
            <span className="text-primary text-sm tracking-widest uppercase font-bold">Frontend & Kindness Engineer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-accent-foreground leading-tight mb-4">
            Hello, I am <span className="text-primary">Noah</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
            Senior "Nice Guy&quot; Developer
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I write clean code, but more importantly, I bring good vibes.
            Building scalable applications and maintaining a 100% smile uptime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portfolio" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-dark transition-all duration-300 tracking-wide uppercase">
              See My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-primary text-dark font-bold border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wide uppercase">
              Say Hello
            </a>
          </div>
        </div>

        {/* Right Image */}
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
              style={{
                // If you use your PNG cutout, remove 'rounded-full' and 'object-cover' and use 'object-contain'
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
              width={450}
              height={450}
            />

            {/* Overlay helpful text for the user */}
            <div className="absolute -bottom-10 left-0 right-0 text-center z-20 opacity-0 hover:opacity-100 transition-opacity bg-black/80 text-xs text-white p-2 rounded">
              (Use your halo image here!)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;