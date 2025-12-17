import React from 'react';
import { HelpCircle } from 'lucide-react';
import { QAItem, QAContainer } from '../ui/QA';
import { faqData } from '../../data/faq';

import { FormattedText } from '../ui/FormattedText';

export const FaqSection: React.FC = () => {
    return (
        <section className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6 text-primary-700">
                <HelpCircle size={28} />
                <h2 className="text-2xl font-bold">よくある質問</h2>
            </div>
            <QAContainer>
                {faqData.map((item, index) => (
                    <QAItem
                        key={index}
                        question={item.question}
                        answer={<FormattedText text={item.answer} />}
                    />
                ))}
            </QAContainer>
        </section>
    );
};
