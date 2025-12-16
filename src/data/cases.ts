import guideImage from '../assets/images/guide.png';
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
            text: '冷蔵庫に「大根」と「豚肉」があります。これらを使った、夕食のメインになるおかずのレシピを3つ提案してください。調理時間は20分以内でお願いします。'
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
            text: '60代の夫婦で1泊2日の京都旅行に行きます。「清水寺」と「嵐山」には必ず行きたいです。移動が少なく、ゆったり楽しめる観光プランを作ってください。'
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
            text: '町内会の清掃のお知らせ文を作ってください。日時は〇月〇日午前9時から。雨天中止です。丁寧だけど堅苦しくない文章でお願いします。'
        }
    }
];

// Helper to get avatar URL (since we can't fully put component logic in data easily, but we can store paths)
export const avatars = {
    user: "https://Placehold.co/100x100?text=user",
    guide: guideImage
};
