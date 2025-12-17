import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Sparkles, Wrench } from 'lucide-react';

export const StickyNav: React.FC = () => {
  const navItems = [
    { path: '/', label: 'ホーム', icon: Home },
    { path: '/basics', label: '基本', icon: BookOpen },
    { path: '/cases', label: '活用', icon: Sparkles },
    { path: '/tools', label: 'ツール', icon: Wrench },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-surface shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 w-full gap-1 pb-3 md:flex md:gap-3 md:justify-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center justify-center py-1.5 text-center font-bold text-sm md:text-lg relative transition-colors whitespace-nowrap px-1 md:px-4 rounded-full border-2 md:flex-1 md:min-w-[80px] md:max-w-[280px]
                ${isActive
                  ? 'bg-accent-500 text-white border-accent-500'
                  : 'bg-white text-accent-500 border-accent-500 hover:bg-accent-50'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon size={18} className={`md:mr-2 ${isActive ? 'text-white' : 'text-accent-500'}`} />
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">{item.label}</span>
                  {isActive && (
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 text-accent-500"
                      style={{ bottom: '-13px' }}
                    >
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L10 12L20 0H0Z" />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
