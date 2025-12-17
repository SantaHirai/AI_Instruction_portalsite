export type CategoryId = 'all' | 'housework' | 'travel' | 'writing' | 'health' | 'hobby' | 'learning' | 'security' | 'shopping';

export interface Category {
    id: CategoryId;
    label: string;
}

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

export interface DialogueLine {
    speaker: 'user' | 'guide';
    text: string; // Contains HTML/JSX
}

export interface CaseItem {
    id: string;
    categoryId: CategoryId;
    icon: string;
    title: string;
    themeColor: 'primary' | 'accent';
    type: 'dialogue' | 'description';

    // For dialogue type
    dialogue?: DialogueLine[];

    // For description type
    description?: string;

    prompt: {
        title?: string;
        text: string;
        aiResponse?: string;
    };
}

export interface BasicTermItem {
    term: string;
    translation: string;
    description: string;
    themeColor: 'primary' | 'accent';
}

export interface SafetyRuleItem {
    id: number;
    title: string;
    description: string;
}

export interface KeywordItem {
    term: string;
    description: string;
}
