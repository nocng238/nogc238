import React from 'react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-2 relative inline-block">
            PORTFOLIO
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4">
            One of selection of my masterpiece.
          </p>
        </div>

        {/* Portfolio Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
            <Image
              src="/my-work.png"
              alt="My Portfolio Work"
              width={1400}
              height={900}
              className="w-full h-auto max-h-[700px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Optional: Add a subtitle or description */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {"Just a meme i picked up from the internet, please don't take it too seriously 😊"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;