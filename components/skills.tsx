import React from 'react';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-2 relative inline-block">
            MY &quot;SKILLS&quot;
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
        </div>

        {/* Skills Image */}
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
            <Image
              src="/skill.png"
              alt="My Skills"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[600px] object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;