import React from 'react';

const Skills: React.FC = () => {
  const kindServices = [
    {
      id: 1,
      title: 'Emergency Moral Support',
      description: 'I function as a human loading spinner that reassures you everything will be okay. 100% success rate in asking "How are you?" and actually listening to the answer.',
      icon: '❤️'
    },
    {
      id: 2,
      title: 'Senior High-Fiver',
      description: 'Certified in providing crisp, audible high-fives to celebrate small wins, like centering a div or finally fixing that one CORS error.',
      icon: '🙌'
    },
    {
      id: 3,
      title: 'Chief Snacker',
      description: 'I ensure the development environment is stocked with metaphorical cookies. I bring the good vibes so the code compiles faster.',
      icon: '🍪'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
            MY "SKILLS"
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto italic">
            "Noah is the kind of dev who comments his code AND compliments your outfit."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kindServices.map((service) => (
            <div key={service.id} className="bg-dark p-8 border-l-4 border-primary/50 hover:border-primary transition-all duration-300 group hover:-translate-y-2">
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Bar (Funny Version) */}
        <div className="mt-20">
          <p className="text-center text-gray-600 mb-6 text-sm tracking-widest uppercase">My Technical Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Empathy.js', 'Patience++ ', 'React (To Feelings)', 'KindnessScript', 'GoodVibesDB', 'HTML (Hugs)'].map(tech => (
              <div key={tech} className="text-xl md:text-2xl font-bold text-gray-500 hover:text-primary cursor-default transition-colors duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;