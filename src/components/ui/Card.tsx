import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-md hover:border-primary-400 transition-all duration-200' : ''} ${className}`}
    >
      {title && (
        <div className="bg-surface px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-primary-700">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
