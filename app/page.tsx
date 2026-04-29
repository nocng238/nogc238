import React from 'react';
import ComingSoon from '@/components/coming-soon';

const Page: React.FC = () => {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <ComingSoon />
    </div>
  );
};

export default Page;