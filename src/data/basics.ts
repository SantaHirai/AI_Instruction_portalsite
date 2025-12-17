import type { BasicTermItem, SafetyRuleItem } from '../types';

export const whatIsAi = {
    title: '生成AIってなに？',
    description: `「生成AI」は、私たちの言葉を理解して、文章や画像を作ってくれる<strong>「頼れるアシスタント」</strong>のような存在です。<br/>検索エンジンが「図書館の検索機」なら、生成AIは「物知りな司書さん」と考えると分かりやすいですよ。`
};

export const terms: BasicTermItem[] = [
    {
        term: 'プロンプト',
        translation: '「お願いメモ」',
        description: 'AIへの命令文のことです。<br/>「〇〇について教えて」「〇〇な文章を作って」という、AIへの具体的にお願いを書いたメモのことです。',
        themeColor: 'primary'
    },
    {
        term: 'チャットボット',
        translation: '「対話ロボット」',
        description: 'LINEのような画面で、文字で会話できるAIのことです。<br/>人間と話すように質問や相談ができます。',
        themeColor: 'accent'
    },
    {
        term: 'ハルシネーション',
        translation: '「うっかり間違い」',
        description: 'AIがもっともらしい嘘をついてしまうことです。<br/>AIも時々間違えることがあるので、大切なことは必ず確認が必要です。',
        themeColor: 'primary'
    }
];

export const safetyRules: SafetyRuleItem[] = [
    {
        id: 1,
        title: '個人情報は入力しない',
        description: '名前、住所、電話番号、パスワードなどはAIに教えないようにしましょう。'
    },
    {
        id: 2,
        title: '情報は確認する',
        description: 'AIの答えが全て正しいとは限りません。重要な情報は自分でも調べましょう。'
    },
    {
        id: 3,
        title: 'ルールを守る',
        description: '誰かを傷つけるような使い方や、悪いことに使ってはいけません。'
    }
];
