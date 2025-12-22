import guideImage from '../assets/images/guide.png';
import userImage from '../assets/images/user.png';
import promptUserImage from '../assets/images/prompt_user.png';
import aiAvatarImage from '../assets/images/ai_avatar.png';
import type { Category, CaseItem } from '../types';

export const categories: Category[] = [
    { id: 'all', label: 'すべて' },
    { id: 'housework', label: '家事・料理' },
    { id: 'travel', label: '旅行・お出かけ' },
    { id: 'writing', label: '事務・手続' },
    { id: 'health', label: '健康・ヘルスケア' },
    { id: 'hobby', label: '趣味・娯楽' },
    { id: 'learning', label: '学び・自分磨き' },
    { id: 'security', label: '防犯・トラブル' },
    { id: 'shopping', label: '買い物' },
];

export const cases: CaseItem[] = [
    {
        id: 'cooking_menu',
        categoryId: 'housework',
        icon: '🍳',
        title: '献立の提案',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '冷蔵庫に大根と豚肉しかないわ。<br/>何かいいレシピないかしら？' },
            { speaker: 'guide', text: '「大根と豚肉で作れる、ご飯が進む煮物のレシピを教えて」と聞いてみましょう。調理時間や味付けの好み（甘辛、さっぱり等）も伝えると、よりぴったりのレシピを提案してくれますよ。' }
        ],
        prompt: {
            title: 'おすすめの頼み方（プロンプト）',
            text: 'あなたはプロの料理研究家です。冷蔵庫に「大根」と「豚肉」があります。これらを使った、夕食のメインになるおかずのレシピを3つ提案してください。\n\n【条件】\n・調理時間：20分以内\n・味付け：ご飯が進む甘辛い味'
        }
    },
    {
        id: 'writing_draft',
        categoryId: 'writing',
        icon: '✉️',
        title: '文章の下書きや添削',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '上司や取引先に送るメール文の内容や言葉遣いはこれでいいのかな？' },
            { speaker: 'guide', text: '敬語や言い回しに迷ったら、文章をそのまま見せてみましょう。「丁寧な言い回しに直してください」と聞くと自然で丁寧な表現に整えてくれます。誰に送るメールか（上司・取引先など）を伝えると、より適切な言葉遣いになりますよ。' }
        ],
        prompt: {
            text: 'あなたはビジネスマナーに精通した秘書です。上司に送るメール文を、失礼のない丁寧な言い回しに添削してください。\n\n【送信相手】直属の部長\n【要件】体調不良による明日の休暇申請\n【トーン】誠実で簡潔な表現'
        }
    },
    {
        id: 'travel_plan',
        categoryId: 'travel',
        icon: '✈️',
        title: '旅行やお出かけのプラン作り',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '旅行先は決まっているけどどこを回ればいいかわからないよ！' },
            { speaker: 'guide', text: '行き先が決まっているなら、時間や好みに合わせてプランを提案してもらいましょう。「○○での旅行プランを考えてください」と聞くとよいでしょう。地元の人しか知らないような場所も見つかるかも！移動手段（車・徒歩など）や同行者（家族・友人など）を伝えると、もっとぴったりなプランになりますよ。' }
        ],
        prompt: {
            text: 'あなたは地元の観光に詳しい旅行プランナーです。岐阜県郡上市で自然を楽しめる半日旅行プランを提案してください。\n\n【条件】\n・移動手段：車\n・同行者：友人（20代）\n・希望：混雑していない穴場スポットを含めること'
        }
    },
    {
        id: 'learning_support',
        categoryId: 'learning',
        icon: '🎓',
        title: '学習のサポート（説明、例題）',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '専門的な内容を理解したいけど、教科書や先生の説明だけでは難しいな' },
            { speaker: 'guide', text: '「○○についてわかりやすく説明してください」と聞いてみましょう。難しい専門用語も、かみくだいて説明してくれます。例題を一緒に見れば、理解がぐっと深まるはず！どのレベルで学んでいるか（高校1年・大学・社会人など）を伝えると、説明の難易度を調整してくれますよ。' }
        ],
        prompt: {
            text: 'あなたは大学の物理学の教授です。材料力学の「応力集中係数」について、高校生にもわかるように説明してください。\n\n【要望】\n・専門用語をなるべく使わずに解説する\n・理解を助けるための具体的な「例題」を1つ示す'
        }
    },
    {
        id: 'learning_answer',
        categoryId: 'learning',
        icon: '📝',
        title: '学習のサポート（解答）',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '問題を解いてみたけど、答えや導出方法に自信がないよ' },
            { speaker: 'guide', text: '「この問題の解答を示してください」と聞いてみましょう。答えだけじゃなくて、どうやって導いたかも教えてくれるから、次に似た問題が出ても安心です。問題文を正確に伝えることが大事。画像や数式がある場合は、できるだけ詳しく書いてみましょう。' }
        ],
        prompt: {
            text: 'あなたは数学の家庭教師です。以下の問題の解答を示し、その導出方法（計算過程）をステップバイステップで説明してください。\n\n【問題】\n（ここに解きたい問題の文章や数式を入力）'
        }
    },
    {
        id: 'packing_list',
        categoryId: 'travel',
        icon: '📋',
        title: 'リスト作りのサポート',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '旅行するとき何が必要かな？持ち物リストが欲しいな' },
            { speaker: 'guide', text: '旅行やアウトドアの準備に迷ったら、持ち物リストを作ってもらいましょう。忘れ物防止にも役立ちます。「○○する場合の持ち物リストを作ってください」と聞くとよいでしょう。季節や滞在日数、アクティビティ内容を伝えると、より実用的なリストになりますよ。' }
        ],
        prompt: {
            text: 'あなたは旅のプロです。10月に岐阜県郡上市で、1泊2日の自然散策をする場合の「持ち物リスト」を作成してください。\n\n【考慮すべき点】\n・気温の変化に対応できる服装\n・雨天時の備え\n・忘れがちな便利グッズ'
        }
    },
    {
        id: 'life_consult',
        categoryId: 'housework',
        icon: '💭',
        title: '生活のちょっとした悩みの相談',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '冬だと手が乾燥するよ！何かいい解決方法ないかな？' },
            { speaker: 'guide', text: '日常のちょっとした悩みも相談してみましょう。手軽にできる工夫やおすすめアイテムを教えてくれます。予算や条件（市販品・自宅でできる方法など）を伝えると、より現実的なアドバイスが返ってきますよ。' }
        ],
        prompt: {
            text: 'あなたは美容と健康のアドバイザーです。冬場の手の乾燥対策について、簡単にできる保湿ケアの方法を3つ教えてください。\n\n【条件】\n・市販品を利用する場合の予算：1000円以内\n・自宅にあるものでできる工夫も含める'
        }
    },
    {
        id: 'price_compare',
        categoryId: 'shopping',
        icon: '💰',
        title: '価格比較や最適な購入先の提案',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '同じ商品でもどこで買うのが一番お得か知りたいな' },
            { speaker: 'guide', text: '「○○について価格比較をしてください」とお願いしましょう。複数のショップや通販サイトを比べて、最適な購入先を提案してくれます。予算や購入希望の店舗（ネット通販・家電量販店など）、必要な条件（付属物、補償、スペックなど）を伝えると、より具体的な提案になりますよ。' }
        ],
        prompt: {
            text: 'あなたは家電選びのプロです。最新のノートパソコン（一般家庭用）について、価格比較とおすすめの購入先を教えてください。\n\n【希望条件】\n・予算：10万円前後\n・重視する点：サポートの手厚さ'
        }
    },
    {
        id: 'product_search',
        categoryId: 'shopping',
        icon: '🔍',
        title: '条件に合う商品探し',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '欲しいものはあるけど、条件に合う商品が見つからないよ' },
            { speaker: 'guide', text: '「○○を探してください」とお願いしましょう。「軽量」・「予算は○○円」など、条件を伝えるだけで、候補を絞って商品を提案してくれます。用途や予算、サイズなどを具体的に伝えると、希望に近い商品が見つかりやすいですよ。' }
        ],
        prompt: {
            text: 'あなたはアウトドア用品のコンシェルジュです。以下の条件に合うリュックサックを3つ提案してください。\n\n【条件】\n・用途：低山のハイキング\n・特徴：軽量で防水性があること\n・予算：1万円以内'
        }
    },
    {
        id: 'review_summary',
        categoryId: 'shopping',
        icon: '⭐',
        title: 'レビューの要約',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '商品レビューが多すぎて、結局どんな評価なのか分からないよ' },
            { speaker: 'guide', text: '「このレビューを要約して」とお願いしてみましょう。大量のレビューも短くまとめてくれるから、判断がしやすくなりますよ。レビューの対象商品を正確に指定すると、的確な要約が返ってきますよ。' }
        ],
        prompt: {
            text: 'あなたは商品の評判を分析するアナリストです。指定するスマートフォンのWeb上のレビューを分析し、以下の形式で要約してください。\n\n【出力形式】\n・良い点（3つ）\n・悪い点（3つ）\n・総合評価（どんな人におすすめか）'
        }
    },
    {
        id: 'scam_check',
        categoryId: 'security',
        icon: '⚠️',
        title: '詐欺メールの判断サポート',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '怪しいメールが届いたけど、本物かどうか分からないよ' },
            { speaker: 'guide', text: '「メールが詐欺かどうか判断してください。」とお願いしてみましょう。不審なメールの特徴を教えてくれるから、安心して対応できますよ。メール本文をそのまま見せると、より正確に判断してもらえます。このとき、個人情報は抜いておきましょう。' }
        ],
        prompt: {
            text: 'あなたはセキュリティの専門家です。以下のメール文面が、詐欺（フィッシング等）である可能性とその理由を判断してください。\n\n【メール本文】\n（ここに届いた怪しいメールの本文を貼り付け、個人名は伏せてください）'
        }
    },
    {
        id: 'camera_advice',
        categoryId: 'security',
        icon: '📹',
        title: '防犯カメラの設置位置のアドバイス',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '防犯カメラを買ったけど、どこに設置すれば効果的か分からないよ' },
            { speaker: 'guide', text: '「防犯カメラを設置する場合の効果的な位置を教えてください。」と聞いてみましょう。死角を減らすための設置場所やポイントを教えてくれます。建物の構造や目的（侵入防止・監視など）を伝えると、より実用的なアドバイスになりますよ。' }
        ],
        prompt: {
            text: 'あなたは防犯アドバイザーです。一戸建て住宅に防犯カメラを設置する場合、最も防犯効果が高い場所を3つ挙げ、それぞれの理由を説明してください。\n\n【目的】\n・空き巣の侵入防止\n・不審者の監視'
        }
    },
    {
        id: 'trouble_action',
        categoryId: 'security',
        icon: '🆘',
        title: 'トラブル時の行動手順整理',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '急なトラブルでどう動けばいいか分からないよ' },
            { speaker: 'guide', text: '「トラブルの対応手順をまとめて」と聞いてみましょう。慌てやすい場面でも、落ち着いて行動できるように手順を整理してくれます。状況（初心者・経験者、都市部・山間部など）を伝えると、より適切な手順になりますよ。' }
        ],
        prompt: {
            text: 'あなたは緊急時の対応マニュアル作成者です。車が雪で動かなくなってしまった（スタックした）ときの対応手順を、運転初心者向けにわかりやすくステップ形式で教えてください。\n\n【状況】\n・人気のない山道\n・携帯の電波はある'
        }
    },
    {
        id: 'complaint_mail',
        categoryId: 'writing',
        icon: '😡',
        title: '苦情文の作成',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '商品やサービスに不満があるけど、どう伝えればいいか分からないよ' },
            { speaker: 'guide', text: '「○○のときの丁寧な苦情メールの文を作って」とお願いしてみましょう。感情的にならず、冷静で丁寧な文面を作ってくれるから、相手に伝わりやすい文になります。状況（購入日・商品名・不具合内容など）を具体的に伝えると、より説得力のある文面になりますよ。' }
        ],
        prompt: {
            text: 'あなたはクレーム対応のプロフェッショナルです。購入した商品が壊れて届いたことを店側に伝えるための、冷静かつ丁寧な苦情メールを作成してください。\n\n【状況】\n・商品名：電気ケトル\n・状態：箱が潰れており、本体にヒビが入っていた\n・要望：新品への交換'
        }
    },
    {
        id: 'app_suggestion',
        categoryId: 'learning',
        icon: '📱',
        title: 'おすすめアプリの提案',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '便利なアプリを探したいけど、どれがいいのか分からないよ' },
            { speaker: 'guide', text: '「おすすめアプリを提案してください」と聞いてみましょう。複数提案してもらうと比較もできて便利です。目的に合わせてアプリを紹介してくれるから、自分に合ったツールがすぐ見つかります。用途（勉強・仕事・趣味など）や予算（無料・有料）を伝えると、より的確な提案になりますよ。' }
        ],
        prompt: {
            text: 'あなたはITツールに詳しいガイドです。勉強やタスク管理に役立つおすすめのスマートフォンアプリを3つ紹介してください。\n\n【条件】\n・無料で使える機能が充実しているもの\n・操作がシンプルで初心者向け'
        }
    },
    {
        id: 'diet_support',
        categoryId: 'health',
        icon: '💪',
        title: 'ダイエットのサポート',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '健康的に体重を減らしたいけど、何から始めればいいか分からないよ' },
            { speaker: 'guide', text: '「ダイエット方法を提案してください」と聞いてみましょう。食事の工夫や簡単な運動習慣を教えてくれるから、無理なく続けられます。体調や目標（減量・筋力アップなど）を伝えると、より安全で効果的なアドバイスになりますよ。' }
        ],
        prompt: {
            text: 'あなたはパーソナルトレーナーです。運動が苦手な人でも無理なく続けられる、健康的なダイエットプランを提案してください。\n\n【内容】\n・食事のアドバイス\n・自宅でできる簡単な運動（1日10分程度）'
        }
    },
    {
        id: 'error_code',
        categoryId: 'housework',
        icon: '📟',
        title: '家電のエラーコードの確認',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '家で使っている石油ストーブにエラーコードが表示されたけど取扱説明書が手元にないよ' },
            { speaker: 'guide', text: '「エラーコード〇〇の意味を教えてください」と聞いてみましょう。取扱説明書がなくても、エラーコードの意味や基本的な対処法を教えてもらえます。家電のメーカー名や型番を伝えると、より正確な情報が得られます。' }
        ],
        prompt: {
            text: 'あなたは家電製品の修理担当者です。以下の石油ストーブに表示されたエラーコード「E-01」の意味と、ユーザーができる対処法を教えてください。\n\n【製品情報】\n・メーカー：〇〇製作所\n・型番：ST-2023'
        }
    },
    {
        id: 'troubleshoot',
        categoryId: 'housework',
        icon: '🔧',
        title: 'トラブルシューティングの手順説明',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '洗濯機の排水ができなくなっちゃった！' },
            { speaker: 'guide', text: '「○○の解決方法を教えて」と聞いてみましょう。「初心者向けに」と付け加えると初心者でも分かりやすいように、手順を整理して教えてもらえるので安心です。機種や症状の詳細を伝えると、より適切な手順を提案してもらえます。' }
        ],
        prompt: {
            text: 'あなたは家電アドバイザーです。洗濯機の排水ができなくなった場合の対応手順を、機械に詳しくない人向けにわかりやすく教えてください。\n\n【確認してほしいポイント】\n・排水溝のつまり\n・排水ホースの状態'
        }
    },
    {
        id: 'manual_summary',
        categoryId: 'housework',
        icon: '📖',
        title: '取扱説明書の要約',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'PDFの取扱説明書を全部読むのは大変だから、必要な部分だけ簡単に知りたいな' },
            { speaker: 'guide', text: '「取扱説明書の○○部分を簡単にまとめてください」と聞いてみましょう。長い説明書も必要な部分だけ要約してもらえるので、すぐに確認できます。対象の商品名や型番を伝えると、要約がより正確になります。' }
        ],
        prompt: {
            text: 'あなたはテクニカルライターです。この取扱説明書のテキストから、「エラーが発生したときの解決方法」が書かれている部分だけを抜き出し、箇条書きで要約してください。'
        }
    },
    {
        id: 'cooking_arrange',
        categoryId: 'housework',
        icon: '🥕',
        title: '料理の子供向けアレンジ',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '子供が苦手な野菜を食べてくれないよ' },
            { speaker: 'guide', text: '「子供が食べやすいように○○を使った料理をアレンジして」と頼んでみましょう。子供が苦手な野菜でも、食べやすい工夫や楽しい見た目のアレンジを提案してもらえます。対象の野菜や子供の好み（甘め・食感など）を伝えると、より効果的です。' }
        ],
        prompt: {
            text: 'あなたは子供向けの食事コーディネーターです。「にんじん」を使った料理を、野菜嫌いの子供でも美味しく食べられるようにアレンジして、レシピを2つ提案してください。\n\n【工夫してほしい点】\n・野菜の形を目立たなくする\n・子供が好きな味付けにする'
        }
    },
    {
        id: 'sports_rule',
        categoryId: 'hobby',
        icon: '⚾',
        title: 'スポーツ観戦時のルールの確認',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '野球を見ていた時に出てきた「タッチアップ」ってなに？' },
            { speaker: 'guide', text: '「○○というルールについて説明して」と聞いてみましょう。スポーツ観戦中に出てきた専門用語やルールも、初心者向けに分かりやすく解説してもらえます。競技名や具体的な場面を伝えると、より正確で理解しやすい説明になります。' }
        ],
        prompt: {
            text: 'あなたは野球のルール解説者です。「タッチアップ」というルールについて、野球のルールを全く知らない人にもわかるように、例え話を使って説明してください。'
        }
    },
    {
        id: 'article_summary',
        categoryId: 'learning',
        icon: '📰',
        title: 'ネット記事の要約',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'ネットで調べものをしたいけど、記事が長くてよく分からない' },
            { speaker: 'guide', text: '要約したいネット記事のURLを添付して、「この記事の内容を要約して」と頼んでみましょう。文字数を指定することもできます。' }
        ],
        prompt: {
            text: 'あなたはニュース編集者です。（URLを貼り付けて）この記事の要点を3行でまとめてください。それぞれ30文字以内でお願いします。'
        }
    },
    {
        id: 'pet_name',
        categoryId: 'hobby',
        icon: '🐶',
        title: '名前の提案',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'ペットに名前を付けたいけど、良い名前が思いつかない。' },
            { speaker: 'guide', text: '「ペットにつける名前を考えてください」と頼んでみましょう。「かっこいい名前」や「かわいい名前」などと付け加えると、より希望に沿った名前を提案してくれます。' }
        ],
        prompt: {
            text: 'あなたはネーミングの専門家です。新しく飼うペット（柴犬・オス）の名前を5つ提案してください。\n\n【イメージ】\n・和風で響きが良い\n・呼びやすい（2〜3文字）'
        }
    },
    {
        id: 'coding',
        categoryId: 'learning',
        icon: '💻',
        title: 'プログラミングのコード生成',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '実現したい機能があるけど、どうコードを書けばいいかわからない。' },
            { speaker: 'guide', text: 'プログラミング言語とやりたい処理を指定して、「（プログラミング言語）で（やりたい処理）をするコードを書いて」と頼んでみましょう。' }
        ],
        prompt: {
            text: 'あなたは経験豊富なプログラマーです。Pythonを使って、1から10までの数字の中からランダムに1つを選んで表示するプログラムコードを書いてください。コードには初心者向けの解説コメントも入れてください。'
        }
    },
    {
        id: 'excel_macro',
        categoryId: 'writing',
        icon: '📊',
        title: 'Excelでマクロの作成',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'Excelでマクロ（操作を自動化できる機能）を作りたいけど、作り方が分からない' },
            { speaker: 'guide', text: '「Excelのマクロを作って」と頼んでみましょう。どのセルのデータを使い、どこに結果を表示したいかを具体的に伝えると、正確なマクロを作ってくれます。' }
        ],
        prompt: {
            text: 'あなたはExcelのエキスパートです。A列（A1～A10）に入っている数値の平均を計算して、B1セルに結果を表示するVBAマクロのコードを作成してください。'
        }
    },
    {
        id: 'word_howto',
        categoryId: 'writing',
        icon: '📃',
        title: 'Wordの使い方',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'Wordで目次を作ったり、段組みを変えたりしたいけど、操作方法が分からない。' },
            { speaker: 'guide', text: '「Wordで○○する方法を教えて。」と頼んでみましょう。「箇条書きを揃えたい」「ページ番号を入れたい」など困っている状況を伝えると、手順をステップごとに教えてくれます。' }
        ],
        prompt: {
            text: 'あなたはPCインストラクターです。Microsoft Wordで、見出しスタイルを設定した箇所から自動的に「目次」を作成する手順を教えてください。初心者でもわかるように、ボタンの名前や場所も具体的に説明してください。'
        }
    },
    {
        id: 'image_gen',
        categoryId: 'hobby',
        icon: '🎨',
        title: '画像生成',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'プレゼン資料やアイコンに使いたい画像があるけど、自分で描くのは難しい。' },
            { speaker: 'guide', text: '「○○を描いて」と頼んでみましょう。「アニメ調で」や「写真のように」など細かく指示をすると、より自分のイメージに近い画像を生成してくれます。' }
        ],
        prompt: {
            text: 'あなたは世界的アーティストです。「宇宙服を着て月面で遊んでいる猫」のイラストを描いてください。\n\n【画風】\n・温かみのある水彩画風\n・パステルカラーを使用'
        }
    },
    {
        id: 'shiritori',
        categoryId: 'hobby',
        icon: '🎮',
        title: 'しりとり',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '待ち時間でやることが無いとき' },
            { speaker: 'guide', text: '「しりとりをしませんか」と持ち掛けてみましょう。ルールや縛りを決めることも可能です。' }
        ],
        prompt: {
            text: '暇つぶしに私としりとりをしませんか？\nあなたが先行です。\n\n【特別ルール】\n・食べ物の名前限定\n・3文字以上の言葉のみ使用可能'
        }
    },
    {
        id: 'error_cause',
        categoryId: 'learning',
        icon: '❓',
        title: 'エラーの原因の特定',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'ウェブページを見ていたら「404 not found」と表示された' },
            { speaker: 'guide', text: '原因や対策も示してくれます。追加で「社内システム」、「特定のサイトだけ」など追加の状況が分かればさらに原因を絞れます。' }
        ],
        prompt: {
            text: 'あなたはネットワークエンジニアです。Google Chromeで特定のウェブページを開こうとしたところ、「404 Not Found」というエラーが表示されました。このエラーの一般的な原因を3つ挙げ、それぞれの対処法を教えてください。'
        }
    },
    {
        id: 'hobby_search',
        categoryId: 'hobby',
        icon: '✨',
        title: '趣味',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '新しい趣味の開拓' },
            { speaker: 'guide', text: '検索エンジンよりも対話的に情報を深掘りできます。' }
        ],
        prompt: {
            text: 'あなたはライフスタイルコーディネーターです。40代の会社員が週末にベランダで気軽に始められる「家庭菜園」のおすすめ野菜を3つ提案してください。\n\n【条件】\n・初心者でも失敗しにくい\n・プランターで育てられる'
        }
    },
    {
        id: 'health_advice',
        categoryId: 'health',
        icon: '🧘',
        title: '健康・運動のアドバイス',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: 'ダイエット、運動不足を解消したいときに。' },
            { speaker: 'guide', text: '詳しい条件を追加することができ、パーソナルトレーナーのように使えます。' }
        ],
        prompt: {
            text: 'あなたはヨガのインストラクターです。寝る前の10分間で行える、リラックスと安眠効果のあるストレッチメニューを組んでください。'
        }
    },
    {
        id: 'translation',
        categoryId: 'learning',
        icon: '🌐',
        title: '外国語の翻訳',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            { speaker: 'user', text: '取扱説明書が外国語で書かれていて、何が書いてあるかわからない。' },
            { speaker: 'guide', text: '必要に応じて要約ができます。ただし、命令文によっては翻訳の精度が悪い場合があるので、しっかり確認しましょう。' }
        ],
        prompt: {
            text: 'あなたはプロの翻訳家です。以下の英文（商品の取扱説明書の一部）を、自然で分かりやすい日本語に翻訳してください。\n\n【原文】\n"Ensure the device is powered off before cleaning. Use a damp cloth only. Do not use chemical solvents."'
        }
    }
];

export const avatars = {
    user: userImage,
    guide: guideImage,
    promptUser: promptUserImage,
    ai: aiAvatarImage
};
