import React, { useState, useMemo } from 'react';
import { Card } from '../components/ui/Card';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { FormattedText } from '../components/ui/FormattedText';
import { categories, cases, avatars } from '../data/cases';
import type { CategoryId } from '../types';

export const Cases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const filteredCases = useMemo(() => {
    if (selectedCategory === 'all') return cases;
    return cases.filter(c => c.categoryId === selectedCategory);
  }, [selectedCategory]);



  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">生活での活用例</h1>
        <p className="text-text-main mb-8">「こんな時に役立つ！」という、日常の具体的なシーンを集めました。</p>

        {/* Filter Tags */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <span className="text-sm font-bold text-text-muted">表示を絞り込む:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                className={`
                  px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === cat.id
                    ? 'bg-text-main text-white'
                    : 'bg-slate-100 text-text-muted hover:bg-slate-200'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Loop */}
      {filteredCases.map((item) => (
        <section key={item.id} className="space-y-6 animate-fade-in">
          <h2 className={`text-2xl font-bold text-text-main flex items-center gap-2 border-l-4 pl-4 ${item.themeColor === 'primary' ? 'border-l-primary-500' : 'border-l-accent-500'
            }`}>
            <span className="text-3xl">{item.icon}</span> {item.title}
          </h2>

          {item.type === 'dialogue' && item.dialogue && (
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {item.dialogue.map((line, idx) => (
                <SpeechBubble
                  key={idx}
                  name={line.speaker === 'user' ? 'あなた' : '案内係'}
                  position={line.speaker === 'user' ? 'right' : 'left'}
                  avatar={avatars[line.speaker]}
                >
                  <p><FormattedText text={line.text} /></p>
                </SpeechBubble>
              ))}
            </div>
          )}

          {item.type === 'description' && item.description && (
            <Card>
              <p className="mb-4"><FormattedText text={item.description} /></p>
              {item.prompt && (
                <p className="text-text-main font-mono bg-primary-50 p-3 rounded border border-primary-100">
                  <FormattedText text={item.prompt.text} />
                </p>
              )}
            </Card>
          )}

          {/* Prompt Card for Dialogue items */}
          {item.type === 'dialogue' && (
            <Card className="bg-primary-50 border-primary-100">
              <h3 className="font-bold text-primary-700 mb-2">
                {item.prompt.title || 'おすすめの頼み方（プロンプト）'}
              </h3>
              <p className="text-text-main font-mono bg-white p-3 rounded border border-primary-200">
                <FormattedText text={item.prompt.text} />
              </p>
            </Card>
          )}
        </section>
      ))}

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-text-muted">このジャンルの活用例は、これから追加される予定です。<br />お楽しみに！</p>
        </div>
      )}
    </div>
  );
};
