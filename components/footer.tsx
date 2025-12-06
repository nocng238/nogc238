'use client';
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ngoc-nguyen-b15508238/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/nocng238' },
    { name: 'Email', icon: Mail, href: 'mailto:nmtngoc.work@gmail.com' },
  ];

  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Noah. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Made with ❤️.
          </p>
        </div>

        <div className="flex space-x-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;