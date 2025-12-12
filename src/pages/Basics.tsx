import React from 'react';
import { SpeechBubble } from '../components/ui/SpeechBubble';
import { Card } from '../components/ui/Card';

export const Basics: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">基本を知る</h1>
        <p className="text-text-main">AI（人工知能）の基本を、日常生活の言葉で解説します。</p>
      </section>

      {/* What is AI? */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-main border-b-2 border-primary-100 pb-2">生成AIってなに？</h2>
        <SpeechBubble name="案内係" position="left" avatar="/images/guide.png">
          <p>
            「生成AI」は、私たちの言葉を理解して、文章や画像を作ってくれる
            <strong>「頼れるアシスタント」</strong>のような存在です。<br />
            検索エンジンが「図書館の検索機」なら、生成AIは「物知りな司書さん」と考えると分かりやすいですよ。
          </p>
        </SpeechBubble>
      </section>

      {/* Terminology Translation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-main border-b-2 border-primary-100 pb-2">言葉の「翻訳」リスト</h2>
        <p className="text-text-main mb-4">専門用語は、普段の言葉に置き換えて覚えましょう。</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="プロンプト → 「お願いメモ」" className="border-l-4 border-l-primary-500">
            <p className="text-text-main">
              AIへの命令文のことです。<br />
              「〇〇について教えて」「〇〇な文章を作って」という、AIへの具体的にお願いを書いたメモのことです。
            </p>
          </Card>
          <Card title="チャットボット → 「対話ロボット」" className="border-l-4 border-l-accent-500">
            <p className="text-text-main">
              LINEのような画面で、文字で会話できるAIのことです。<br />
              人間と話すように質問や相談ができます。
            </p>
          </Card>
          <Card title="ハルシネーション → 「うっかり間違い」" className="border-l-4 border-l-primary-500">
            <p className="text-text-main">
              AIがもっともらしい嘘をついてしまうことです。<br />
              AIも時々間違えることがあるので、大切なことは必ず確認が必要です。
            </p>
          </Card>
        </div>
      </section>

      {/* Safety First */}
      <section className="bg-primary-50 p-8 rounded-2xl">
        <h2 className="text-xl font-bold text-primary-700 mb-4">安心して使うための3つの約束</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span className="text-text-main"><strong>個人情報は入力しない：</strong> 名前、住所、電話番号、パスワードなどはAIに教えないようにしましょう。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span className="text-text-main"><strong>情報は確認する：</strong> AIの答えが全て正しいとは限りません。重要な情報は自分でも調べましょう。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span className="text-text-main"><strong>ルールを守る：</strong> 誰かを傷つけるような使い方や、悪いことに使ってはいけません。</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
