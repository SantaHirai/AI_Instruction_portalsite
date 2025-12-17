import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyNav } from './StickyNav';
import { ScrollToTop } from '../ui/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StickyNav />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
