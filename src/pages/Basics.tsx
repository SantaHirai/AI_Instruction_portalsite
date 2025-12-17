import React from 'react';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { Card } from '../components/ui/Card';
import { FormattedText } from '../components/ui/FormattedText';
import guideImage from '../assets/images/guide.png';
import { whatIsAi, terms, safetyRules } from '../data/basics';

export const Basics: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">基本を知る</h1>
        <p className="text-text-main">
          <FormattedText text="AI（人工知能）の基本を、日常生活の言葉で解説します。" />
        </p>
      </section>

      {/* What is AI? */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-main border-b-2 border-primary-100 pb-2">
          <FormattedText text={whatIsAi.title} />
        </h2>
        <SpeechBubble name="案内係" position="left" avatar={guideImage}>
          <p className="leading-relaxed">
            <FormattedText text={whatIsAi.description} />
          </p>
        </SpeechBubble>
      </section>

      {/* Terminology Translation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-main border-b-2 border-primary-100 pb-2">言葉の「翻訳」リスト</h2>
        <p className="text-text-main mb-4"><FormattedText text="専門用語は、普段の言葉に置き換えて覚えましょう。" /></p>
        <div className="grid md:grid-cols-2 gap-4">
          {terms.map((item, index) => (
            <Card
              key={index}
              title={`${item.term} → ${item.translation}`}
              className={`border-l-4 ${item.themeColor === 'primary' ? 'border-l-primary-500' : 'border-l-accent-500'}`}
            >
              <p className="text-text-main leading-relaxed">
                <FormattedText text={item.description} />
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety First */}
      <h2 className="text-2xl font-bold text-text-main border-b-2 border-primary-100 pb-2"><FormattedText text={"安心して生成AIを使うために"} /></h2>
      <section className="bg-primary-50 p-8 rounded-2xl">
        <h2 className="text-xl font-bold text-primary-700 mb-4">3つの約束</h2>
        <ul className="space-y-4">
          {safetyRules.map((rule) => (
            <li key={rule.id} className="flex items-start gap-3">
              <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                {rule.id}
              </span>
              <span className="text-text-main">
                <strong className="text-primary-800"><FormattedText text={rule.title} />：</strong> <FormattedText text={rule.description} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
