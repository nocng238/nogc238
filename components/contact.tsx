'use client';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! This is a demo form.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
            CONTACT ME
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-gray-500 mt-4">
            Let&apos;s work together on your next project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-dark p-8 md:p-12 shadow-2xl relative">
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary -mt-4 -ml-4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary -mb-4 -mr-4 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME*"
                required
                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-primary transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENTER YOUR EMAIL*"
                required
                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-primary transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE*"
                rows={4}
                required
                className="w-full bg-transparent border-b-2 border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-primary transition-colors placeholder-gray-600 resize-none"
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-10 py-4 bg-primary text-dark font-bold text-lg tracking-widest hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-primary/50"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;