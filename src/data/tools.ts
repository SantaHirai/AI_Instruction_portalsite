export interface ToolItem {
    id: string;
    name: string;
    reading: string;
    icon: string;
    catchphrase: string;
    description: string;
    recommendedFor: string[];
    url: string;
    colorTheme: 'emerald' | 'blue';
}

export const tools: ToolItem[] = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        reading: 'チャットジーピーティー',
        icon: '🤖',
        catchphrase: '文章作成・相談のプロフェッショナル',
        description: '世界で最も有名な生成AIです。会話をするように自然なやり取りができます。<br/>献立の相談、文章の要約、アイデア出しなど、あらゆる言葉の作業が得意です。',
        recommendedFor: [
            '会話形式で相談したい',
            '文章を書くのが苦手',
            'まずは有名なものから試したい'
        ],
        url: 'https://chatgpt.com/',
        colorTheme: 'emerald'
    },
    {
        id: 'gemini',
        name: 'Gemini',
        reading: 'ジェミニ',
        icon: '✨',
        catchphrase: 'Googleが作ったかしこいAI',
        description: 'Google検索と連携しているため、最新の情報に強いのが特徴です。<br/>GmailやGoogleドキュメントを使っている方には特に使いやすいでしょう。',
        recommendedFor: [
            'Googleのサービスをよく使う',
            '最新のニュースについて知りたい',
            '画像についても質問したい'
        ],
        url: 'https://gemini.google.com/',
        colorTheme: 'blue'
    }
];
