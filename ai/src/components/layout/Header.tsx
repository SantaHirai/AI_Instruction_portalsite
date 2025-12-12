import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm z-50 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600 hover:opacity-80 transition-opacity">
          生成AIの取扱説明書
        </Link>
        {/* Navigation moved to StickyNav */}
      </div>
    </header>
  );
};
