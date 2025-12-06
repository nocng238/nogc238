'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-2 relative inline-block">
            CONTACT ME
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Let&apos;s work together on your next project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-background p-8 md:p-12 shadow-2xl relative border border-border rounded-lg">
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary -mt-4 -ml-4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary -mb-4 -mr-4 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME*"
                required
                className="h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENTER YOUR EMAIL*"
                required
                className="h-12"
              />
            </div>
            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE*"
                rows={4}
                required
                className="resize-none"
              />
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                size="lg"
                className="px-10 py-4 text-lg tracking-widest"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;