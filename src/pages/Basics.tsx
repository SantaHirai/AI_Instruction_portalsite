import React from 'react';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { Card } from '../components/ui/Card';
import { FormattedText } from '../components/ui/FormattedText';
import guideImage from '../assets/images/guide.png';
import {
  whatIsAi,
  safetyRules,
  usageExamples,
  hallucinationInfo,
  promptingTips
} from '../data/basics';
import {
  Bot,
  Brain,
  Smartphone,
  Briefcase,
  AlertTriangle,
  ShieldAlert,
  Check,
  X,
  Lightbulb
} from 'lucide-react';

export const Basics: React.FC = () => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 pb-20">

      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary-800">人工知能（AI）の基本</h1>
        <p className="text-lg text-text-main max-w-2xl mx-auto">
          <FormattedText text="AIの仕組みから、上手な使い方、気をつけるべきリスクまで。<br/>これだけ知っていれば安心な「AIの基礎知識」をまとめました。" />
        </p>
      </section>

      {/* 1. What is AI? */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-primary-200 pb-2">
          <Bot className="w-8 h-8 text-primary-600" />
          <h2 className="text-2xl font-bold text-text-main"><FormattedText text={whatIsAi.title} /></h2>
        </div>

        <SpeechBubble name="案内係" position="left" avatar={guideImage}>
          <div className="leading-relaxed space-y-4">
            <FormattedText text={whatIsAi.description} />
            <div className="font-bold text-primary-700 bg-primary-50 p-4 rounded-lg">
              <FormattedText text={whatIsAi.conclusion} />
            </div>
          </div>
        </SpeechBubble>

        <div className="grid md:grid-cols-2 gap-6">
          {whatIsAi.subSections.map((sub, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary-700 font-bold text-lg">
                <Brain className="w-5 h-5" />
                <FormattedText text={sub.title} />
              </div>
              <p className="text-text-main text-sm leading-relaxed">
                <FormattedText text={sub.description} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Usage Examples */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-primary-200 pb-2">
          <Smartphone className="w-8 h-8 text-primary-600" />
          <h2 className="text-2xl font-bold text-text-main"><FormattedText text="私たちの生活・仕事での利用例" /></h2>
        </div>

        <div className="grid gap-8">
          {usageExamples.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-accent-700 flex items-center gap-2">
                {category.category === '日常生活での利用例' ? <Smartphone size={20} /> : <Briefcase size={20} />}
                <FormattedText text={category.category} />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, i) => (
                  <Card key={i} title={<FormattedText text={item.title} />} className="h-full bg-white/50">
                    <p className="text-sm text-text-main"><FormattedText text={item.description} /></p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Hallucination */}
      <section className="space-y-8 bg-orange-50 p-8 rounded-3xl border border-orange-100">
        <div className="flex items-center gap-3 border-b-2 border-orange-200 pb-2">
          <AlertTriangle className="w-8 h-8 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-800"><FormattedText text={hallucinationInfo.title} /></h2>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <FormattedText text={hallucinationInfo.description} />
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {/* Headers */}
          <h4 className="font-bold text-orange-800 flex items-center gap-2">
            <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded"><FormattedText text="原因" /></span>
            <FormattedText text="なぜ嘘をつくの？" />
          </h4>
          <h4 className="font-bold text-green-800 flex items-center gap-2">
            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded"><FormattedText text="対策" /></span>
            <FormattedText text="どうすればいい？" />
          </h4>

          {/* Items */}
          {hallucinationInfo.causes.map((c, i) => {
            const counter = hallucinationInfo.countermeasures[i];
            return (
              <React.Fragment key={i}>
                <div className="bg-white p-3 rounded-lg shadow-sm h-full">
                  <strong className="block text-gray-800 text-sm mb-1"><FormattedText text={c.title} /></strong>
                  <p className="text-xs text-gray-600"><FormattedText text={c.description} /></p>
                </div>
                {counter && (
                  <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400 h-full">
                    <strong className="block text-gray-800 text-sm mb-1"><FormattedText text={counter.title} /></strong>
                    <p className="text-xs text-gray-600"><FormattedText text={counter.description} /></p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 4. Prompting Tips */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-primary-200 pb-2">
          <Lightbulb className="w-8 h-8 text-primary-600" />
          <h2 className="text-2xl font-bold text-text-main"><FormattedText text="AIへの命令文（プロンプト）のコツ" /></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {promptingTips.map((tip, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-sm border p-6 ${tip.template ? 'md:col-span-2' : ''}`}>
              <h3 className="text-lg font-bold text-primary-700 mb-2 flex items-center gap-2">
                <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                <FormattedText text={tip.title} />
              </h3>
              <p className="text-text-main mb-4"><FormattedText text={tip.description} /></p>

              {tip.examples && (
                <div className="grid grid-cols-2 gap-2 text-sm bg-gray-50 p-3 rounded-lg">
                  <div className="text-red-700 flex flex-col gap-1">
                    <span className="flex items-center gap-1 font-bold text-xs"><X size={14} /> <FormattedText text="悪い例" /></span>
                    <span><FormattedText text={tip.examples.bad} /></span>
                  </div>
                  <div className="text-green-700 flex flex-col gap-1 border-l border-gray-200 pl-2">
                    <span className="flex items-center gap-1 font-bold text-xs"><Check size={14} /> <FormattedText text="良い例" /></span>
                    <span><FormattedText text={tip.examples.good} /></span>
                  </div>
                </div>
              )}

              {tip.template && (
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                  <div className="text-xs text-gray-400 mb-2"><FormattedText text={tip.template.title} /></div>
                  <FormattedText text={tip.template.content} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>



      {/* 6. Safety Risks (8 Items) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-red-200 pb-2">
          <ShieldAlert className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-text-main"><FormattedText text="AI利用に潜む「8つの危険」" /></h2>
        </div>
        <p className="text-text-main"><FormattedText text="AIは<strong>「ガラス張りの会議室」</strong>。誰に見られても困らない情報だけを入力しましょう。" /></p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {safetyRules.map((rule) => (
            <div key={rule.id} className="bg-red-50 p-5 rounded-xl border border-red-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-red-800 mb-1">
                <span className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-xs shrink-0">
                  {rule.id}
                </span>
                <FormattedText text={rule.title} />
              </div>
              <p className="text-sm text-text-main leading-relaxed">
                <FormattedText text={rule.description} />
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
