import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QAItemProps {
  question: string;
  answer: React.ReactNode;
}

export const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg mb-4 overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-lg text-primary-700 pr-4">Q. {question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-text-muted shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-6 bg-primary-50 border-t border-slate-100">
          <div className="text-text-main leading-relaxed">
            <span className="font-bold text-accent-500 mr-2">A.</span>
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export const QAContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="space-y-4">
      {children}
    </div>
  );
};
