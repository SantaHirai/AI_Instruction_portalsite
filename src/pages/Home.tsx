import React from 'react';
import { Card } from '../components/ui/Card';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { QAItem, QAContainer } from '../components/ui/QA';
import { Link, useNavigate } from 'react-router-dom';
import guideImage from '../assets/images/guide.png';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-primary-50 to-white rounded-2xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 leading-relaxed">
          生成AIの取扱説明書へ<br className="md:hidden" />ようこそ
        </h1>
        <p className="text-lg text-text-main max-w-2xl mx-auto mb-8 leading-loose">
          「AIって何？」そんな疑問を、やさしく言葉で解決します。<br/>
          新しい家電の取扱説明書のように、安心してお読みください。
        </p>
        <Link 
          to="/basics" 
          className="inline-block bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-primary-500 transition-colors transform hover:-translate-y-1"
        >
          まずは基本を知る
        </Link>
      </section>

      {/* Introduction Bubble */}
      <section className="max-w-3xl mx-auto">
        <SpeechBubble name="案内係" position="left" avatar={guideImage}>
          <p className="leading-relaxed">
            こんにちは！このサイトでは、難しい専門用語を使わずに、
            AI（人工知能）が私たちの生活をどう便利にしてくれるのかを紹介します。
            ゆっくり見ていってくださいね。
          </p>
        </SpeechBubble>
      </section>

      {/* Featured Sections (Cards) */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card title="活用例を見る" onClick={() => navigate('/cases')} className="hover:border-primary-200">
          <p className="text-text-main mb-4 leading-relaxed">
            「献立を考える」「旅行の計画を立てる」など、
            日常の困りごとをAIがどう助けてくれるかを見てみましょう。
          </p>
          <span className="text-primary-600 font-bold text-sm">詳しく見る &rarr;</span>
        </Card>
        <Card title="おすすめツール" onClick={() => navigate('/tools')} className="hover:border-primary-200">
          <p className="text-text-main mb-4 leading-relaxed">
            初心者でも使いやすい、安全なAIツールを厳選して紹介します。
            まずはここから試してみましょう。
          </p>
          <span className="text-primary-600 font-bold text-sm">詳しく見る &rarr;</span>
        </Card>
      </section>

      {/* Q&A Example */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">よくある質問</h2>
        <QAContainer>
          <QAItem 
            question="AIを使うのにお金はかかりますか？" 
            answer="無料で使えるものもたくさんあります。例えば、このサイトで紹介している「チャットボット」の多くは、基本的な機能を無料で利用できます。より高度な機能を使いたい場合に有料プランが用意されていることが多いですが、最初は無料版で十分便利に使えますので、安心してお試しください。" 
          />
          <QAItem 
            question="個人情報は大丈夫ですか？" 
            answer="AIに名前や住所、電話番号、クレジットカード番号などの大切な個人情報は入力しないようにしましょう。多くのAIサービスは安全対策をしていますが、念のため「誰かに見られても大丈夫な内容」で相談するのが安心です。また、設定で会話の内容を学習に使わせないようにすることもできます。" 
          />
        </QAContainer>
      </section>
    </div>
  );
};
