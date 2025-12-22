import React from 'react';
import { Card } from '../components/ui/Card';
import { tools } from '../data/tools';
import { FormattedText } from '../components/ui/FormattedText';
import { ExternalLinkIcon } from '../components/ui/ExternalLinkIcon';

export const Tools: React.FC = () => {

  const getThemeClasses = (theme: 'emerald' | 'blue' | 'orange' | 'purple' | 'pink' | 'cyan') => {
    switch (theme) {
      case 'emerald':
        return {
          cardBorder: 'border-l-emerald-500',
          iconBg: 'bg-emerald-100',
          nameText: 'text-emerald-700',
          button: 'bg-emerald-600 hover:bg-emerald-700'
        };
      case 'blue':
        return {
          cardBorder: 'border-l-blue-500',
          iconBg: 'bg-blue-100',
          nameText: 'text-blue-700',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'orange':
        return {
          cardBorder: 'border-l-orange-500',
          iconBg: 'bg-orange-100',
          nameText: 'text-orange-700',
          button: 'bg-orange-600 hover:bg-orange-700'
        };
      case 'purple':
        return {
          cardBorder: 'border-l-purple-500',
          iconBg: 'bg-purple-100',
          nameText: 'text-purple-700',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      case 'pink':
        return {
          cardBorder: 'border-l-pink-500',
          iconBg: 'bg-pink-100',
          nameText: 'text-pink-700',
          button: 'bg-pink-600 hover:bg-pink-700'
        };
      case 'cyan':
        return {
          cardBorder: 'border-l-cyan-500',
          iconBg: 'bg-cyan-100',
          nameText: 'text-cyan-700',
          button: 'bg-cyan-600 hover:bg-cyan-700'
        };
      default:
        return { // Fallback to emerald
          cardBorder: 'border-l-emerald-500',
          iconBg: 'bg-emerald-100',
          nameText: 'text-emerald-700',
          button: 'bg-emerald-600 hover:bg-emerald-700'
        };
    }
  };

  // Group tools by category maintaining order
  const categories = Array.from(new Set(tools.map(t => t.category)));

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">おすすめAIサービス</h1>
        <p className="text-text-main">
          <FormattedText text="初心者の方でも使いやすく、安全性の高いサービスを厳選しました。<br />まずは無料で試せるものから始めてみましょう。" />
        </p>
      </section>

      {/* Tools Loop Grouped by Category */}
      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category} className="space-y-6">
            <h2 className="text-2xl font-bold text-text-main border-b-2 border-slate-200 pb-2 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary-500 rounded-sm"></span>
              <FormattedText text={category} />
            </h2>
            <div className="space-y-8">
              {tools.filter(t => t.category === category).map((tool) => {
                const theme = getThemeClasses(tool.colorTheme);
                return (
                  <Card key={tool.id} className={`border-l-8 ${theme.cardBorder}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="shrink-0 flex flex-col items-center md:w-40">
                        <div className={`w-16 h-16 ${theme.iconBg} rounded-full flex items-center justify-center text-3xl mb-2`}>
                          {tool.icon}
                        </div>
                        <span className={`font-bold ${theme.nameText}`}><FormattedText text={tool.name} /></span>
                        <span className="text-xs text-text-muted">{tool.reading}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-text-main mb-2"><FormattedText text={tool.catchphrase} /></h3>
                        <p className="text-text-main mb-4 leading-relaxed">
                          <FormattedText text={tool.description} />
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg text-sm mb-4">
                          <strong className="block text-slate-700 mb-1">こんな人におすすめ：</strong>
                          <ul className="list-disc list-inside text-text-muted">
                            {tool.recommendedFor.map((item, idx) => (
                              <li key={idx}><FormattedText text={item} /></li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block ${theme.button} text-white px-6 py-2 rounded-full transition-colors flex items-center justify-center w-fit`}
                        >
                          公式サイトを見てみる
                          <ExternalLinkIcon className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Note on Usage */}
      <section className="bg-primary-50 p-6 rounded-xl text-center">
        <h3 className="font-bold text-primary-700 mb-2">利用時の注意</h3>
        <p className="text-text-main text-sm">
          <FormattedText text="※ どちらも無料で使い始められますが、より高性能な機能を使うには有料プランへの登録が必要な場合があります。<br />「まずは無料版」で十分に便利さを体験できますので、無理に課金する必要はありません。" />
        </p>
      </section>
    </div>
  );
};
