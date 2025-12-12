import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { SpeechBubble } from '../components/ui/SpeechBubble';

type Category = 'all' | 'housework' | 'travel' | 'writing' | 'health' | 'hobby' | 'learning' | 'security';

export const Cases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'housework', label: '家事・料理' },
    { id: 'travel', label: '旅行・お出かけ' },
    { id: 'writing', label: '事務・手続' },
    { id: 'health', label: '健康・ヘルスケア' },
    { id: 'hobby', label: '趣味・娯楽' },
    { id: 'learning', label: '学び・自分磨き' },
    { id: 'security', label: '防犯・トラブル' },
  ];

  const isVisible = (cat: Category) => selectedCategory === 'all' || selectedCategory === cat;

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
                onClick={() => setSelectedCategory(cat.id as Category)}
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

      {/* Case 1: Cooking */}
      {isVisible('housework') && (
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-text-main flex items-center gap-2 border-l-4 border-l-primary-500 pl-4">
            <span className="text-3xl">🍳</span> 今日の献立に困ったら
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <SpeechBubble name="あなた" position="right" avatar="https://Placehold.co/100x100?text=user">
              <p>冷蔵庫に大根と豚肉しかないわ。<br/>何かいいレシピないかしら？</p>
            </SpeechBubble>
            <SpeechBubble name="案内係" position="left" avatar="/images/guide.png">
              <p>
                「大根と豚肉で作れる、ご飯が進む煮物のレシピを教えて」
                と聞いてみましょう。調理時間や味付けの好み（甘辛、さっぱり等）も伝えると、よりぴったりのレシピを提案してくれますよ。
              </p>
            </SpeechBubble>
          </div>
          <Card className="bg-primary-50 border-primary-100">
            <h3 className="font-bold text-primary-700 mb-2">おすすめの頼み方（プロンプト）</h3>
            <p className="text-text-main font-mono bg-white p-3 rounded border border-primary-200">
              冷蔵庫に「大根」と「豚肉」があります。これらを使った、夕食のメインになるおかずのレシピを3つ提案してください。調理時間は20分以内でお願いします。
            </p>
          </Card>
        </section>
      )}

      {/* Case 2: Travel */}
      {isVisible('travel') && (
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-text-main flex items-center gap-2 border-l-4 border-l-accent-500 pl-4">
            <span className="text-3xl">✈️</span> 旅行の計画作りに
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <SpeechBubble name="あなた" position="right" avatar="https://Placehold.co/100x100?text=user">
              <p>来月、京都に行くんだけど、効率よく回るコースが知りたいな。</p>
            </SpeechBubble>
            <SpeechBubble name="案内係" position="left" avatar="/images/guide.png">
              <p>
                行きたい場所と日程を伝えると、移動時間を考慮したスケジュールを作ってくれます。
                足腰に優しいルートや、混雑を避けた穴場スポットを聞くのも良いですね。
              </p>
            </SpeechBubble>
          </div>
          <Card className="bg-primary-50 border-primary-100">
            <h3 className="font-bold text-primary-700 mb-2">おすすめの頼み方（プロンプト）</h3>
            <p className="text-text-main font-mono bg-white p-3 rounded border border-primary-200">
              60代の夫婦で1泊2日の京都旅行に行きます。「清水寺」と「嵐山」には必ず行きたいです。移動が少なく、ゆったり楽しめる観光プランを作ってください。
            </p>
          </Card>
        </section>
      )}

      {/* Case 3: Writing */}
      {isVisible('writing') && (
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-text-main flex items-center gap-2 border-l-4 border-l-primary-500 pl-4">
            <span className="text-3xl">✉️</span> 挨拶文やメールの作成に
          </h2>
          <Card>
            <p className="mb-4">
              町内会のお知らせ、孫へのメッセージ、お礼状など、
              「なんて書けばいいか分からない」時に、下書きを作ってもらえます。
            </p>
            <p className="text-text-main font-mono bg-primary-50 p-3 rounded border border-primary-100">
              町内会の清掃のお知らせ文を作ってください。日時は〇月〇日午前9時から。雨天中止です。丁寧だけど堅苦しくない文章でお願いします。
            </p>
          </Card>
        </section>
      )}
      {/* Placeholder for empty categories */}
      {selectedCategory !== 'all' && 
       !['housework', 'travel', 'writing'].includes(selectedCategory) && (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-text-muted">このジャンルの活用例は、これから追加される予定です。<br/>お楽しみに！</p>
        </div>
      )}
    </div>
  );
};
