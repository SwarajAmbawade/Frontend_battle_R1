
import React, { useState } from 'react';
import Loader from '@/components/Loader';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WorkShowcase from '@/components/WorkShowcase';
import CustomerSection from '@/components/CustomerSection';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <HeroSection />
      <StatsSection />
      <WorkShowcase />
      <CustomerSection />
    </div>
  );
};

export default Index;
