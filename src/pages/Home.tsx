import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroductionSection } from '../components/home/IntroductionSection';
import { TooltipDemoSection } from '../components/home/TooltipDemoSection';
import { FeatureCardsSection } from '../components/home/FeatureCardsSection';
import { FaqSection } from '../components/home/FaqSection';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Bubble */}
      <IntroductionSection />

      {/* Tooltip Demonstration */}
      <TooltipDemoSection />

      {/* Featured Sections (Cards) */}
      <FeatureCardsSection />

      {/* Q&A Example */}
      <FaqSection />
    </div>
  );
};
