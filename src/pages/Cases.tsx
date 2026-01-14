import React, { useState, useMemo } from 'react';
import { Card } from '../components/ui/Card';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { FormattedText } from '../components/ui/FormattedText';
import { AnswerExample } from '../components/cases/AnswerExample';
import { Modal } from '../components/ui/Modal';
import { SearchInput } from '../components/ui/SearchInput';
import { categories, cases, avatars } from '../data/cases';
import type { CategoryId, CaseItem } from '../types';

export const Cases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const filteredCases = useMemo(() => {
    let result = cases;

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(c => c.categoryId === selectedCategory);
    }

    // Search Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(query) ||
        (c.description && c.description.toLowerCase().includes(query)) ||
        (c.prompt && c.prompt.text.toLowerCase().includes(query)) ||
        (c.dialogue && c.dialogue.some(d => d.text.toLowerCase().includes(query)))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const handleCardClick = (item: CaseItem) => {
    setSelectedCase(item);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4 md:px-6">
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary-700">生活での活用例</h1>
          <p className="text-text-main max-w-2xl mx-auto">
            <FormattedText text="「こんな時に役立つ！」という、日常の具体的なシーンを集めました。<br />気になる項目をクリックして、詳しい使い方を見てみましょう。" />
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <SearchInput
            placeholder="活用例を検索（例：レシピ、メール、旅行...）"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery('')}
            className="w-full md:max-w-md mx-auto"
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                  className={`
                                        px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                                        ${selectedCategory === cat.id
                      ? 'bg-text-main text-white shadow-sm'
                      : 'bg-slate-50 text-text-muted hover:bg-slate-100 border border-slate-200'
                    }
                                    `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((item) => (
          <div key={item.id} className="animate-fade-in">
            <Card
              className="h-full hover:-translate-y-1 transition-transform cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`p-3 rounded-xl text-3xl shrink-0 ${item.themeColor === 'primary' ? 'bg-primary-50 text-primary-600' : 'bg-accent-50 text-accent-600'
                  }`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text-main leading-tight pt-1">
                  <FormattedText text={item.title} />
                </h3>
              </div>
              <p className="text-sm text-text-muted line-clamp-2">
                {/* Use prompt text or first dialogue for preview if description is missing */}
                <FormattedText text={
                  item.description ||
                  (item.dialogue ? item.dialogue[0].text : '') ||
                  (item.prompt ? item.prompt.text : '')
                } />
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary-600">
                <span>詳しく見る</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-text-muted text-lg font-medium">条件に一致する活用例が見つかりませんでした。</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 text-primary-600 hover:text-primary-700 underline underline-offset-4"
          >
            すべての活用例を表示する
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {selectedCase && (
        <Modal
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
          title={selectedCase.title.replace(/<br\s*\/?>/gi, '')}
          className="md:mx-auto"
        >
          <div className="space-y-8">
            {/* Description Section */}
            {selectedCase.type === 'description' && selectedCase.description && (
              <section>
                <p className="text-lg leading-relaxed text-text-main">
                  <FormattedText text={selectedCase.description} />
                </p>
              </section>
            )}

            {/* Dialogue Section */}
            {selectedCase.type === 'dialogue' && selectedCase.dialogue && (
              <section className="space-y-4">
                <div className="flex flex-col gap-4 md:max-w-2xl md:mx-auto w-full bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {selectedCase.dialogue.map((line, idx) => (
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
              </section>
            )}

            {/* Prompt Section */}
            {selectedCase.prompt && (
              <section className="space-y-4">
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  <FormattedText text={selectedCase.prompt.title || 'おすすめの頼み方（プロンプト）'} />
                </h4>
                <div className="bg-primary-50/50 rounded-xl p-1 border border-primary-100">
                  <div className="bg-white rounded-lg p-6 space-y-6">
                    <SpeechBubble
                      name="あなた"
                      position="right"
                      avatar={avatars.promptUser}
                    >
                      <div className="font-mono text-sm leading-relaxed">
                        <FormattedText text={selectedCase.prompt.text} />
                      </div>
                    </SpeechBubble>

                    {selectedCase.prompt.aiResponse && (
                      <AnswerExample response={selectedCase.prompt.aiResponse} />
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
