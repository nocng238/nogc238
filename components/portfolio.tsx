import React from 'react';
import { Project } from '@/types';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Development',
      image: 'https://picsum.photos/id/1/600/400',
      description: 'A full-featured online store built with Next.js and Stripe.',
      link: '#'
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      category: 'UI/UX Design',
      image: 'https://picsum.photos/id/20/600/400',
      description: 'Real-time data visualization dashboard for crypto assets.',
      link: '#'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'AI Application',
      image: 'https://picsum.photos/id/3/600/400',
      description: 'SaaS application using Gemini API for blog writing.',
      link: '#'
    },
    {
      id: 4,
      title: 'Travel Agency App',
      category: 'Mobile App',
      image: 'https://picsum.photos/id/48/600/400',
      description: 'Cross-platform mobile app for booking travel experiences.',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio v1',
      category: 'Design',
      image: 'https://picsum.photos/id/5/600/400',
      description: 'My previous portfolio website designed in Figma.',
      link: '#'
    },
    {
      id: 6,
      title: 'Task Manager',
      category: 'Development',
      image: 'https://picsum.photos/id/60/600/400',
      description: 'Productivity tool with team collaboration features.',
      link: '#'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
            PORTFOLIO
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-gray-500 mt-4">
            A selection of my recent work.
          </p>
        </div>

        {/* Filter (Visual only for now) */}
        <div className="flex justify-center mb-12 space-x-8">
          {['ALL', 'DESIGN', 'DEVELOPMENT', 'AI'].map(filter => (
            <button key={filter} className={`text-sm font-bold tracking-widest ${filter === 'ALL' ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'} pb-1 transition-colors`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-darker">
              <Image
                width={600}
                height={256}
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">{project.description}</p>
                <a href={project.link} className="inline-block px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold text-sm transition-colors duration-300 translate-y-4 group-hover:translate-y-0 delay-200">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;