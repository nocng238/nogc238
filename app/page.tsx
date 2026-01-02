import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
// import Experiences from '@/components/experiences';
import UIBuster from '@/components/hero/ui-buster';

const Page: React.FC = () => {
  return (
    <div className="bg-background relative min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      {/* <Experiences /> */}
      <Contact />
      <Footer />
      <div className='fixed -bottom-16 -left-18 z-1000'>
        <UIBuster />
      </div>
      {/* <ChatWidget /> */}
    </div>
  );
};

export default Page;