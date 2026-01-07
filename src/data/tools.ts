import type { ToolItem } from '../types';
import fireflyImg from '../assets/images/firefly_screenshot.png';
import claudeImg from '../assets/images/claude_screenshot.png';
import perplexityImg from '../assets/images/perplexity_screenshot.png';
import sunoImg from '../assets/images/suno_screenshot.png';
import geminiImg from '../assets/images/gemini_screenshot.png';
import chatgptImg from '../assets/images/chatgpt_screenshot.png';

export const tools: ToolItem[] = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        reading: 'チャットジーピーティー',
        icon: '🤖',
        category: '万能型',
        catchphrase: '話せる、書ける、相談できる。世界一有名な「万能コンシェルジュ」',
        description: '「生成AI」を世界に広めた立役者です。こちらの言いたいことを汲み取る力が非常に高く、まるで物知りな友人とチャット（会話）をしているような感覚で使えます。「冷蔵庫の余り物でレシピを考えて」「孫へのメールを優しく直して」といった日常の相談から、難しい文章の作成まで幅広く対応。迷ったらまずはこれから始めてみたい、オールマイティな「万能コンシェルジュ」です。',
        recommendedFor: [
            '会話形式で相談したい',
            '文章を書くのが苦手',
            'まずは有名なものから試したい'
        ],
        url: 'https://chatgpt.com/',
        image: chatgptImg,
        colorTheme: 'emerald'
    },
    {
        id: 'gemini',
        name: 'Gemini',
        reading: 'ジェミニ',
        icon: '✨',
        category: '最新情報型',
        catchphrase: 'Google検索と連携した、最新情報に強い「敏腕秘書」',
        description: '検索の巨人・Googleが自信を持って送り出したAIです。他のAIは少し前の情報しか知らないことがありますが、Geminiはインターネット上の「リアルタイムな情報」に強いのが最大の特徴です。「今週末のイベントを教えて」「ここから一番近いカフェは？」といった質問にも、最新の情報を元に答えてくれます。写真を見せて「これは何？」と尋ねることもできる、多才なサポーターです。',
        recommendedFor: [
            'Googleのサービスをよく使う',
            '最新のニュースについて知りたい',
            '画像についても質問したい'
        ],
        url: 'https://gemini.google.com/',
        image: geminiImg,
        colorTheme: 'blue'
    },
    {
        id: 'claude',
        name: 'Claude',
        reading: 'クロード',
        icon: '✒️',
        category: '文章・会話生成AI',
        catchphrase: 'とても丁寧で、読み書き上手な「文学青年」',
        description: 'アメリカのAnthropic社が開発したAIです。「人間のような自然な会話」を目指して作られており、機械的な冷たさを感じさせない、角の取れた優しい日本語を使います。一度に読み込める文字数が非常に多いため、分厚い資料や本の内容を読み込ませて、「要点はどこ？」「感想を教えて」と相談するのにも最適です。安全性にも配慮されており、安心して話し合える良きパートナーです。',
        recommendedFor: [
            '自然な日本語で会話したい',
            '長文の要約をしたい',
            '丁寧な文章を作りたい'
        ],
        url: 'https://claude.ai/',
        image: claudeImg,
        colorTheme: 'orange'
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        reading: 'パープレキシティ',
        icon: '🔍',
        category: '検索・調査AI',
        catchphrase: '答えと情報元をすぐに教えてくれる「博識な司書」',
        description: 'これまでの検索（ググる）は、たくさんのリンクから自分で答えを探す必要がありましたが、このAIはその手間を省いてくれます。質問を投げかけると、複数のウェブサイトを瞬時に調べ、要約して「答え」を文章で返してくれます。さらに、「この情報はどこから来たか」という参照元リンクも必ず表示されるため、情報の信頼性を確かめたい時や、旅行の計画、ニュースの調査などに大変役立ちます。',
        recommendedFor: [
            '検索の手間を減らしたい',
            '情報の出典を知りたい',
            '調べ物を効率化したい'
        ],
        url: 'https://www.perplexity.ai/',
        image: perplexityImg,
        colorTheme: 'cyan'
    },
    {
        id: 'firefly',
        name: 'Adobe Firefly',
        reading: 'アドビ ファイアフライ',
        icon: '🔥',
        category: '画像生成AI',
        catchphrase: '写真編集の老舗が作った「安心・安全なデザイナー」',
        description: '画像生成AIは「著作権の問題が心配」という声がありますが、このAIは権利関係がクリアな画像のみで勉強しているため、安心して仕事や趣味に使えます。「サングラスをかけた猫」などの画像を作るだけでなく、手持ちの写真から不要な人を消したり、背景を変えたりすることも言葉一つで可能です。クリエイティブな作業を、安全かつ魔法のようにサポートしてくれます。',
        recommendedFor: [
            '権利的にクリーンな画像を使いたい',
            '画像の加工・編集をしたい',
            'Adobe製品を使っている'
        ],
        url: 'https://firefly.adobe.com/',
        image: fireflyImg,
        colorTheme: 'orange'
    },
    {
        id: 'suno',
        name: 'Suno',
        reading: 'スノ',
        icon: '🎵',
        category: '音楽生成AI',
        catchphrase: '歌詞と曲調を入れるだけ。「あなただけの作曲家」',
        description: '驚くべきことに、ボーカル（歌声）入りの音楽を全自動で作ってくれます。「孫への誕生日ソング」や「退職祝いのバラード」など、テーマと曲調を入力するだけで、プロ顔負けのクオリティで曲が完成します。自分で考えた歌詞を歌わせることも可能です。ラジオで流れているような自然な歌声で、あなたの思い出や気持ちを音楽という形に残すことができます。',
        recommendedFor: [
            'オリジナルソングを作りたい',
            '歌詞にメロディをつけたい',
            '音楽制作を気軽に楽しみたい'
        ],
        url: 'https://suno.com/',
        image: sunoImg,
        colorTheme: 'pink'
    }
];
