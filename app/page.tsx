import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ChatWidget from '@/components/chat-widget';

const Page: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-dark">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Page;