'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Noah. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Made with ❤️ and TypeScript.
          </p>
        </div>

        <div className="flex space-x-6">
          {['fb', 'tw', 'in', 'li'].map(social => (
            <a key={social} href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-dark transition-all duration-300">
              <span className="uppercase text-xs font-bold">{social}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;