import type { BasicTermItem, SafetyRuleItem, UsageExampleItem, HallucinationInfo, PromptingTipItem } from '../types';

export const whatIsAi = {
    title: 'AI（人工知能）の概要',
    description: `AI（人工知能）とは、人間が普段行っている「見る」「聞く」「考える」「判断する」といった知的な作業を、コンピュータができるようにする技術のことです。<br/>かつてはSF映画の中の話でしたが、コンピュータの性能が飛躍的に向上し、インターネット上に膨大なデータ（ビッグデータ）が溢れるようになったことで、急速に実用化が進みました。`,
    subSections: [
        {
            title: '特化型 AI（弱い AI）',
            description: '音声認識や自動運転など、特定の決まった作業だけを人間以上にこなすAIです。現在のAIはすべてこれに当たります。'
        },
        {
            title: '汎用 AI（強い AI）',
            description: '人間と同じようにあらゆることを理解し、学習できるAIです。まだ実現していない未来の技術です。'
        }
    ],
    conclusion: 'つまり、今のAIは「何でもできる万能なロボット」ではなく、「特定の仕事を高い精度で手伝ってくれる道具」だと理解するのが正しいのです。'
};

export const usageExamples: UsageExampleItem[] = [
    {
        category: '日常生活での利用例',
        items: [
            {
                title: 'スマートフォンの音声アシスタント',
                description: '「Siri」や「Alexa」などが、人の声を認識し理解して操作を行います。'
            },
            {
                title: 'ネットショッピングのおすすめ',
                description: '過去の購入履歴から「この人はこれが欲しいはず」と予測して商品を提案します。'
            },
            {
                title: 'メールの自動仕分け',
                description: '迷惑メールを勝手にフォルダ分けしたり、内容を判断して仕分けを行います。'
            },
            {
                title: '自動運転車',
                description: '車が周囲の状況を見て、ハンドルやブレーキを操作します。'
            }
        ]
    },
    {
        category: 'ビジネスでの利用例',
        items: [
            {
                title: '事務作業の自動化',
                description: '経理やスケジュール調整などの定型業務をAIに任せ、効率化を図ります。'
            },
            {
                title: '24時間対応のお客様窓口',
                description: 'チャットボットが人間の代わりに24時間365日休まず顧客対応を行います。'
            },
            {
                title: '採用活動の効率化',
                description: '膨大な応募書類の中から、自社に合った候補者を見つけ出す手助けをします。'
            },
            {
                title: '不正の検知',
                description: '金融取引などで、普段と違う怪しい動きがないか常に監視します。'
            }
        ]
    }
];

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
    },
    {
        term: 'RAG（ラグ）',
        translation: '「カンニング」',
        description: 'AI自身の知識だけでなく、信頼できる外部データ（社内マニュアルなど）を参照してから回答する技術のことです。',
        themeColor: 'accent'
    }
];

export const hallucinationInfo: HallucinationInfo = {
    title: 'ハルシネーション（AIのつく嘘）について',
    description: '「ハルシネーション」とは、AIが事実とは異なる嘘の情報を、さも自信たっぷりに正しいことのように答えてしまう現象です。架空の数値を提示したり、間違ったアドバイスをしたりすることがあります。',
    causes: [
        {
            title: '学習データの問題',
            description: '学習に使ったデータが古かったり、間違っていたりする場合、AIはその「穴」をありそうな言葉で埋めてしまいます。'
        },
        {
            title: 'AIの仕組み上の限界',
            description: 'AIは事実を「理解」しているわけではなく、「次の言葉の確率」を計算しているだけなので、事実よりも「自然な文章」を優先してしまうことがあります。'
        },
        {
            title: '命令文の曖昧さ',
            description: '指示が曖昧だと、AIが文脈を勝手に想像して補完しようとし、的外れな回答になることがあります。'
        }
    ],
    countermeasures: [
        {
            title: '「AIは間違える」前提で使う',
            description: '必ず人間がファクトチェックを行います。特に数値や専門的な判断は要注意です。'
        },
        {
            title: '指示を具体的にする',
            description: '役割を与えたり、背景を詳しく伝えたりすることで、AIの誤った推測を防ぎます。'
        },
        {
            title: '外部データを参照させる(RAG)',
            description: '信頼できる情報を参照させることで、正確性を高めることができます。'
        }
    ]
};

export const safetyRules: SafetyRuleItem[] = [
    {
        id: 1,
        title: '個人情報・機密情報',
        description: '氏名、住所、電話番号、口座番号などの個人情報や、会社の機密情報は絶対に入力してはいけません。学習データとして使われるリスクがあります。'
    },
    {
        id: 2,
        title: '未公開情報',
        description: '発売前の新製品や研究データなどを入力すると、情報漏洩や特許権の喪失につながる可能性があります。'
    },
    {
        id: 3,
        title: '専門的な判断（医療・法律・税務）',
        description: 'AIは医師や弁護士ではありません。健康被害や法的トラブルを避けるため、専門的な相談は専門家へ。'
    },
    {
        id: 4,
        title: '緊急時の情報（災害・事故）',
        description: 'AIは最新のリアルタイム情報を持っていないことがあります。緊急時は公的機関の情報に従ってください。'
    },
    {
        id: 5,
        title: '著作権に関わる内容',
        description: '「〇〇の小説を使って」などの指示は著作権侵害の恐れがあります。特に商用利用時は注意が必要です。'
    },
    {
        id: 6,
        title: '差別的・攻撃的な内容',
        description: '悪口や暴力的な内容を入力してはいけません。社会的な問題になり、自身の信用を傷つけることになります。'
    },
    {
        id: 7,
        title: '子どもに関する情報',
        description: '子どもの写真や学校名などは入力しないでください。将来のプライバシーリスクになります。'
    },
    {
        id: 8,
        title: '感情的な深い相談',
        description: 'AIの共感は計算されたものです。深い悩みは信頼できる人間に相談しましょう。また、相談内容が学習される可能性もあります。'
    }
];

export const promptingTips: PromptingTipItem[] = [
    {
        title: '目的と役割をはっきりさせる',
        description: '「あなたはプロの編集者です」のように役割（ロール）を与えると、プロの視点で回答してくれるようになります。',
        examples: {
            bad: 'この記事直して',
            good: 'あなたはプロの編集者です。この記事を誤字脱字の修正だけでなく、読みやすくリライトして。'
        }
    },
    {
        title: '「5W1H」で具体的に伝える',
        description: '「誰に」「何を」「どのように」を明確にします。丸投げはNGです。',
        examples: {
            bad: 'DXが進まない理由教えて',
            good: 'DXが進まない理由を、現場社員の視点から、具体的な対策を含めて3つ教えて。'
        }
    },
    {
        title: 'やってほしい形式を指定する',
        description: 'テンプレートを使って、出力形式を指定すると伝わりやすくなります。',
        template: {
            title: '命令文のテンプレート例',
            content: `# 命令書\nあなたはプロのライターです。以下の【条件】に従ってタイトル案を考えて。\n\n# 条件\n・ターゲット：40代男性\n・文字数：30文字以内`
        }
    },
    {
        title: '「～しないで」より「～して」',
        description: '否定形よりも肯定形の方がAIは理解しやすいです。',
        examples: {
            bad: '難しい言葉を使わないで',
            good: '中学生でも分かる言葉で説明して'
        }
    },
    {
        title: '一度で終わらせず、会話を続ける',
        description: '最初から100点を目指さず、「ここを直して」と対話で修正していくのがコツです。'
    }
];
