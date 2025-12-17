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
        id: 'cooking',
        categoryId: 'housework',
        icon: '🍳',
        title: '今日の献立に困ったら',
        themeColor: 'primary',
        type: 'dialogue',
        dialogue: [
            {
                speaker: 'user',
                text: '冷蔵庫に大根と豚肉しかないわ。<br/>何かいいレシピないかしら？'
            },
            {
                speaker: 'guide',
                text: '「大根と豚肉で作れる、ご飯が進む煮物のレシピを教えて」<br/>と聞いてみましょう。調理時間や味付けの好み（甘辛、さっぱり等）も伝えると、よりぴったりのレシピを提案してくれますよ。'
            }
        ],
        prompt: {
            title: 'おすすめの頼み方（プロンプト）',
            text: '冷蔵庫に「大根」と「豚肉」があります。これらを使った、夕食のメインになるおかずのレシピを3つ提案してください。調理時間は20分以内でお願いします。',
            aiResponse: `はい、20分以内で作れる大根と豚肉のレシピを3つ提案します。<br/><br/>1. <strong>豚バラ大根の甘辛炒め</strong><br/>薄切りの大根と豚肉を炒め、醤油・砂糖・みりんで味付けます。大根を薄く切ることで火の通りを早くするのがポイントです。<br/><br/>2. <strong>大根と豚こまのオイスターソース煮</strong><br/>レンジで少し柔らかくした大根と豚肉を炒め、オイスターソースでコクを出します。<br/><br/>3. <strong>豚しゃぶと大根のサラダ風</strong><br/>千切りにした大根と茹でた豚肉を、ポン酢とごま油で和えるだけのさっぱりメニューです。`
        }
    },
    {
        id: 'travel',
        categoryId: 'travel',
        icon: '✈️',
        title: '旅行の計画作りに',
        themeColor: 'accent',
        type: 'dialogue',
        dialogue: [
            {
                speaker: 'user',
                text: '来月、京都に行くんだけど、効率よく回るコースが知りたいな。'
            },
            {
                speaker: 'guide',
                text: '行きたい場所と日程を伝えると、移動時間を考慮したスケジュールを作ってくれます。<br/>足腰に優しいルートや、混雑を避けた穴場スポットを聞くのも良いですね。'
            }
        ],
        prompt: {
            title: 'おすすめの頼み方（プロンプト）',
            text: '60代の夫婦で1泊2日の京都旅行に行きます。「清水寺」と「嵐山」には必ず行きたいです。移動が少なく、ゆったり楽しめる観光プランを作ってください。',
            aiResponse: `ゆったり楽しめる1泊2日の京都プランをご提案します。<br/><br/><strong>1日目：東山エリア（清水寺周辺）</strong><br/>・午後：京都駅到着後、タクシーで<strong>清水寺</strong>へ。参拝後、産寧坂・二年坂をゆっくり散策。<br/>・夕方：高台寺周辺で早めの夕食。風情ある街並みを楽しめます。<br/><br/><strong>2日目：嵐山エリア</strong><br/>・午前：<strong>嵐山</strong>へ移動（移動はタクシーが楽でおすすめです）。竹林の小径を散歩。<br/>・昼食：渡月橋を眺めながら京料理。<br/>・午後：天龍寺の庭園を鑑賞し、お土産を買って京都駅へ。<br/><br/>移動の負担を減らすため、エリアを絞って詰め込みすぎない行程にしました。`
        }
    },
    {
        id: 'writing',
        categoryId: 'writing',
        icon: '✉️',
        title: '挨拶文やメールの作成に',
        themeColor: 'primary',
        type: 'description',
        description: '町内会のお知らせ、孫へのメッセージ、お礼状など、<br/>「なんて書けばいいか分からない」時に、下書きを作ってもらえます。',
        prompt: {
            text: '町内会の清掃のお知らせ文を作ってください。日時は〇月〇日午前9時から。雨天中止です。丁寧だけど堅苦しくない文章でお願いします。',
            aiResponse: `ご近所の皆様へ<br/><br/>いつも町内会の活動にご協力いただき、ありがとうございます。<br/>さて、気持ちの良い季節となりましたが、恒例の「町内一斉清掃」を下記の日程で行います。<br/><br/><strong>日時：</strong> 〇月〇日（土） 午前9時～（1時間程度）<br/><strong>集合場所：</strong> 〇〇公園<br/>※雨天の場合は中止となります。<br/><br/>ご近所の皆様と顔を合わせながら、無理のない範囲で街をきれいにできればと思います。<br/>お忙しいところ恐れ入りますが、ご参加をお待ちしております。`
        }
    }
];

// Helper to get avatar URL (since we can't fully put component logic in data easily, but we can store paths)
export const avatars = {
    user: userImage,
    guide: guideImage,
    promptUser: promptUserImage,
    ai: aiAvatarImage
};
