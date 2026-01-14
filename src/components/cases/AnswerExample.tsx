import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SpeechBubble } from '../ui/SpeechBubble';
import { FormattedText } from '../ui/FormattedText';
import { avatars } from '../../data/cases';

interface AnswerExampleProps {
    response: string;
}

export const AnswerExample: React.FC<AnswerExampleProps> = ({ response }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm mt-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <span className="font-bold text-text-main">AIの回答例を見る</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-text-muted shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
                )}
            </button>

            {isOpen && (
                <div className="px-3 py-4 md:px-6 md:py-6 bg-accent-50/50 border-t border-slate-100 animate-fade-in">
                    {/* Mobile View: Plain Text */}
                    <div className="block md:hidden text-sm leading-relaxed text-text-main">
                        <FormattedText text={response} />
                    </div>

                    {/* Desktop View: Speech Bubble */}
                    <div className="hidden md:block">
                        <SpeechBubble
                            name="AI"
                            position="left"
                            avatar={avatars.ai}
                            flipAvatar={true}
                            hideAvatarOnMobile={true}
                        >
                            <div className="text-sm leading-relaxed">
                                <FormattedText text={response} />
                            </div>
                        </SpeechBubble>
                    </div>
                </div>
            )}
        </div>
    );
};
