import React from 'react';
import { QAItem, QAContainer } from '../ui/QA';
import { faqData } from '../../data/faq';

export const FaqSection: React.FC = () => {
    return (
        <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">よくある質問</h2>
            <QAContainer>
                {faqData.map((item, index) => (
                    <QAItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </QAContainer>
        </section>
    );
};
