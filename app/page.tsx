import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { Metadata } from 'next';
// import ChatWidget from '@/components/chat-widget';

export const metadata: Metadata = {
  title: 'Noah - Portfolio',
  description: 'Welcome to Noah\'s portfolio website! Explore my projects, skills, and get in touch.',
  icons: {
    icon: '/logo-2.png',
  },
  openGraph: {
    title: 'Noah - Portfolio',
    description: 'Welcome to Noah Gc\'s portfolio website! Explore my projects, skills, and get in touch.',
    images: [
      {
        url: 'https://nogc238.cloud/logo-2.png',
        width: 1200,
        height: 630,
        alt: 'Noah Portfolio Logo',
      },
    ],
    siteName: 'Noah Portfolio',
    type: 'website',
  }
}

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