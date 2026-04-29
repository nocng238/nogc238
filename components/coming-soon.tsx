'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ngoc-nguyen-b15508238/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/nocng238' },
  { name: 'Email', icon: Mail, href: 'mailto:nmtngoc.work@gmail.com' },
];

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Image src="/logo.png" alt="Noah" width={120} height={40} className="h-10 w-auto object-contain opacity-80" />
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-mono tracking-widest uppercase"
      >
        v2.0 — in progress
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-foreground text-center leading-tight"
      >
        Something{' '}
        <span className="text-primary [text-shadow:0_0_40px_#22d3ee80]">
          better
        </span>
        <br />
        is coming.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-6 text-muted-foreground text-center max-w-md leading-relaxed"
      >
        The old one was a little <span className="italic text-foreground/60">nhảm</span> — let&apos;s be honest.
        A fresh version is in the works. Stay tuned.
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-14 w-16 h-px bg-primary/40"
      />

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="mt-8 flex gap-4"
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-16 text-xs text-muted-foreground/50 font-mono"
      >
        &copy; {new Date().getFullYear()} Noah
      </motion.p>
    </div>
  );
};

export default ComingSoon;
