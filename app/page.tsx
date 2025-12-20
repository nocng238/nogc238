import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const Page: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default Page;