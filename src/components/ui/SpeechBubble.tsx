import React from 'react';

interface SpeechBubbleProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  avatar?: string; // URL or name
  name?: string;
  className?: string;
  flipAvatar?: boolean;
  hideAvatarOnMobile?: boolean;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  position = 'left',
  avatar,
  name,
  className = '',
  flipAvatar = false,
  hideAvatarOnMobile = false
}) => {
  const isLeft = position === 'left';

  return (
    <div className={`flex items-start gap-2 md:gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} ${className}`}>
      <div className={`shrink-0 flex-col items-center gap-1 portrait:hidden ${hideAvatarOnMobile ? 'hidden md:flex' : 'flex'}`}>
        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold border-2 border-white shadow-sm font-sans overflow-hidden p-1">
          {avatar ? (
            <img
              src={avatar}
              alt={name ? `${name}のアイコン` : 'アバター'}
              className={`w-full h-full object-contain ${flipAvatar ? 'scale-x-[-1]' : ''}`}
            />
          ) : (
            <span>{name ? name[0] : 'AI'}</span>
          )}
        </div>
        {name && <span className="text-xs text-text-muted font-medium">{name}</span>}
      </div>

      <div className={`
        relative p-3 md:p-4 rounded-2xl group
        ${hideAvatarOnMobile ? 'max-w-full md:max-w-[80%]' : 'max-w-[80%]'}
        ${isLeft
          ? 'bg-white text-text-main ml-2'
          : 'bg-primary-50 text-text-main mr-2'
        }
        shadow-sm border border-slate-300
        portrait:flex-1 portrait:max-w-full
      `}>
        {/* Tail for Left Bubble */}
        {isLeft && (
          <div className="absolute top-4 -left-[10px] w-4 h-4 bg-white border-l border-b border-slate-300 transform rotate-45" />
        )}

        {/* Tail for Right Bubble */}
        {!isLeft && (
          <div className="absolute top-4 -right-[10px] w-4 h-4 bg-primary-50 border-t border-r border-slate-300 transform rotate-45" />
        )}

        <div className="relative z-10">
          {name && (
            <div className="hidden portrait:block font-bold mb-1 text-sm">
              {name}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
