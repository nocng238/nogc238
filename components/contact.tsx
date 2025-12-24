'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Generate a ridiculously complex integral in LaTeX
  const integral = `
\\int_{-\\infty}^{\\infty}
\\frac{
e^{-x^2} \\cdot \\sin(\\pi y) \\cdot \\ln(1+x^2+y^2)
}{
\\sqrt{x^4 + y^4 + 1}
}
\\cdot
\\sum_{n=0}^{\\infty}
\\frac{(-1)^n \\Gamma(n+\\frac{1}{2})}{n! \\cdot \\zeta(2n+1)}
\\, dx\\, dy
`;
  const correctAnswer = "42"; // Because it's always 42 😄

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify you're human by checking the captcha box first! 🤖");
      return;
    }
    alert("Thanks for your message! This is a demo form. (Also, congrats on solving that integral... or did you just guess 42? 😏)");
    setFormData({ name: '', email: '', message: '' });
    setCaptchaVerified(false);
  };

  const handleCaptchaSubmit = () => {
    setCaptchaAttempts(prev => prev + 1);

    if (captchaAnswer === correctAnswer) {
      setShowCaptcha(false);
      setCaptchaVerified(true);
      setCaptchaAnswer('');
      setCaptchaAttempts(0);
    } else if (captchaAttempts >= 2) {
      setShowCaptcha(false);
      setCaptchaVerified(true);
      alert("Fine, you passed. Even I don't know the answer to that. 🤷‍♂️");
      setCaptchaAnswer('');
      setCaptchaAttempts(0);
    } else {
      alert("Bruh, you could do better than that. Try again! 😤");
    }
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

            {/* Fake CAPTCHA Checkbox */}
            <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg bg-card hover:bg-card/80 transition-colors">
              <div
                className={`w-6 h-6 border-2 rounded cursor-pointer flex items-center justify-center transition-all ${captchaVerified
                  ? 'bg-primary border-primary'
                  : 'border-muted-foreground hover:border-primary'
                  }`}
                onClick={() => {
                  if (!captchaVerified) {
                    setShowCaptcha(true);
                  }
                }}
              >
                {captchaVerified && (
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <label
                className="text-sm text-foreground cursor-pointer select-none"
                onClick={() => {
                  if (!captchaVerified) {
                    setShowCaptcha(true);
                  }
                }}
              >
                I&apos;m not a robot (probably)
              </label>
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                size="lg"
                className="px-10 py-4 text-lg tracking-widest"
                disabled={!captchaVerified}
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>

        {/* Fake CAPTCHA Modal */}
        <Dialog open={showCaptcha} onOpenChange={setShowCaptcha}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                🤖 Human Verification Required
              </DialogTitle>
              <DialogDescription className="text-base mt-2">
                To prove you&apos;re not a robot (or that you&apos;re a VERY smart robot), please solve this simple integral:
              </DialogDescription>
            </DialogHeader>

            <div className="my-8 p-6 bg-card border-2 border-primary rounded-lg overflow-auto">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Please evaluate the following definite integral:
              </p>
              <div className="text-center bg-background p-6 rounded border border-border overflow-x-auto">
                <BlockMath math={integral} />
              </div>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                placeholder="Enter your answer here..."
                className="h-12 text-center text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleCaptchaSubmit()}
              />

              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCaptcha(false);
                    setCaptchaAnswer('');
                    setCaptchaAttempts(0);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleCaptchaSubmit}>
                  Verify
                </Button>
              </div>

              {captchaAttempts > 0 && (
                <p className="text-xs text-center text-muted-foreground">
                  Attempts: {captchaAttempts}/3
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Contact;