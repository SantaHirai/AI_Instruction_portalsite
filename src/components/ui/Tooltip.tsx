import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
    text: string;
    content: string;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, content, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top + window.scrollY, // Absolute position including scroll
                left: rect.left + window.scrollX + (rect.width / 2)
            });
            setIsVisible(true);
        }
    };

    return (
        <>
            <span
                ref={triggerRef}
                className={`relative inline-block border-b border-dotted border-primary-500 cursor-help ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsVisible(false)}
            >
                {text}
            </span>
            {isVisible && createPortal(
                <span
                    className="absolute px-3 py-2 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap z-[9999] animate-fade-in shadow-lg pointer-events-none"
                    style={{
                        top: `${coords.top}px`,
                        left: `${coords.left}px`,
                        transform: 'translate(-50%, -100%)',
                        marginTop: '-8px' // Gap for arrow
                    }}
                >
                    {content}
                    {/* Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                </span>,
                document.body
            )}
        </>
    );
};
