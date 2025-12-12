import React from 'react';
import { Card } from '../components/ui/Card';

export const Tools: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">おすすめAIツール</h1>
        <p className="text-text-main">
          初心者の方でも使いやすく、安全性の高いツールを厳選しました。<br/>
          まずは無料で試せるものから始めてみましょう。
        </p>
      </section>

      {/* ChatGPT */}
      <Card className="border-l-8 border-l-emerald-500">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mb-2">
              🤖
            </div>
            <span className="font-bold text-emerald-700">ChatGPT</span>
            <span className="text-xs text-text-muted">チャットジーピーティー</span>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-text-main mb-2">文章作成・相談のプロフェッショナル</h3>
            <p className="text-text-main mb-4 leading-relaxed">
              世界で最も有名な生成AIです。会話をするように自然なやり取りができます。<br/>
              献立の相談、文章の要約、アイデア出しなど、あらゆる言葉の作業が得意です。
            </p>
            <div className="bg-slate-50 p-4 rounded-lg text-sm mb-4">
              <strong className="block text-slate-700 mb-1">こんな人におすすめ：</strong>
              <ul className="list-disc list-inside text-text-muted">
                <li>会話形式で相談したい</li>
                <li>文章を書くのが苦手</li>
                <li>まずは有名なものから試したい</li>
              </ul>
            </div>
            <a 
              href="https://chatgpt.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
            >
              公式サイトを見てみる
            </a>
          </div>
        </div>
      </Card>

      {/* Gemini */}
      <Card className="border-l-8 border-l-blue-500">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-2">
              ✨
            </div>
            <span className="font-bold text-blue-700">Gemini</span>
            <span className="text-xs text-text-muted">ジェミニ</span>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-text-main mb-2">Googleが作ったかしこいAI</h3>
            <p className="text-text-main mb-4 leading-relaxed">
              Google検索と連携しているため、最新の情報に強いのが特徴です。<br/>
              GmailやGoogleドキュメントを使っている方には特に使いやすいでしょう。
            </p>
            <div className="bg-slate-50 p-4 rounded-lg text-sm mb-4">
              <strong className="block text-slate-700 mb-1">こんな人におすすめ：</strong>
              <ul className="list-disc list-inside text-text-muted">
                <li>Googleのサービスをよく使う</li>
                <li>最新のニュースについて知りたい</li>
                <li>画像についても質問したい</li>
              </ul>
            </div>
            <a 
              href="https://gemini.google.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              公式サイトを見てみる
            </a>
          </div>
        </div>
      </Card>

      {/* Note on Usage */}
      <section className="bg-primary-50 p-6 rounded-xl text-center">
        <h3 className="font-bold text-primary-700 mb-2">利用時の注意</h3>
        <p className="text-text-main text-sm">
          ※ どちらも無料で使い始められますが、より高性能な機能を使うには有料プランへの登録が必要な場合があります。<br/>
          「まずは無料版」で十分に便利さを体験できますので、無理に課金する必要はありません。
        </p>
      </section>
    </div>
  );
};
