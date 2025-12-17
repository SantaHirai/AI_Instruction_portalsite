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
    const [arrowOffset, setArrowOffset] = useState(0); // Offset for the arrow if tooltip is shifted
    const triggerRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLSpanElement>(null);

    const updatePosition = () => {
        if (triggerRef.current && isVisible) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const tooltipContent = tooltipRef.current;

            let top = triggerRect.top + window.scrollY;
            let left = triggerRect.left + window.scrollX + (triggerRect.width / 2);

            // Defaults
            let newLeft = left;
            let newArrowOffset = 0;

            if (tooltipContent) {
                const tooltipRect = tooltipContent.getBoundingClientRect();
                const halfWidth = tooltipRect.width / 2;
                const viewWidth = window.innerWidth;
                const margin = 10; // Margin from screen edge

                // Check left edge
                if (left - halfWidth < margin) {
                    const diff = margin - (left - halfWidth);
                    newLeft = left + diff;
                    newArrowOffset = -diff; // Move arrow left to stay on target
                }
                // Check right edge
                else if (left + halfWidth > viewWidth - margin) {
                    const diff = (left + halfWidth) - (viewWidth - margin);
                    newLeft = left - diff;
                    newArrowOffset = diff; // Move arrow right to stay on target
                }
            }

            setCoords({ top, left: newLeft });
            setArrowOffset(newArrowOffset);
        }
    };

    // Recalculate position when visible and rendered
    React.useLayoutEffect(() => {
        if (isVisible) {
            updatePosition();
            window.addEventListener('resize', updatePosition);
            return () => window.removeEventListener('resize', updatePosition);
        }
    }, [isVisible]);

    const handleMouseEnter = () => {
        // Initial coarse position set to avoid jump, fine-tuned in useLayoutEffect
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX + (rect.width / 2)
            });
            setArrowOffset(0);
        }
        setIsVisible(true);
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
                    ref={tooltipRef}
                    className="absolute px-4 py-3 bg-slate-800 text-white text-xs md:text-sm rounded-lg z-[9999] animate-fade-in shadow-xl pointer-events-none max-w-[90vw] md:max-w-xs break-words leading-relaxed"
                    style={{
                        top: `${coords.top}px`,
                        left: `${coords.left}px`,
                        transform: 'translate(-50%, -100%)',
                        marginTop: '-12px'
                    }}
                >
                    {content}
                    {/* Arrow */}
                    <span
                        className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"
                        style={{ marginLeft: `${arrowOffset}px` }}
                    />
                </span>,
                document.body
            )}
        </>
    );
};
