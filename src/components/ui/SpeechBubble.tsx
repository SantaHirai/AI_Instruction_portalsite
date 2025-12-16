import React from 'react';

interface SpeechBubbleProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  avatar?: string; // URL or name
  name?: string;
  className?: string;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  position = 'left',
  avatar,
  name,
  className = ''
}) => {
  const isLeft = position === 'left';

  return (
    <div className={`flex items-start gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} ${className}`}>
      <div className="shrink-0 flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold border-2 border-white shadow-sm font-sans overflow-hidden p-1">
          {avatar ? (
            <img src={avatar} alt={name ? `${name}のアイコン` : 'アバター'} className="w-full h-full object-contain" />
          ) : (
            <span>{name ? name[0] : 'AI'}</span>
          )}
        </div>
        {name && <span className="text-xs text-text-muted font-medium">{name}</span>}
      </div>

      <div className={`
        relative p-4 rounded-2xl max-w-[80%]
        ${isLeft ? 'bg-white rounded-tl-none text-text-main' : 'bg-primary-50 rounded-tr-none text-text-main'}
        shadow-sm border border-slate-100
      `}>
        {children}
      </div>
    </div>
  );
};
