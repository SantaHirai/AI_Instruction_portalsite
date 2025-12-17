import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { FormattedText } from '../ui/FormattedText';

export const FeatureCardsSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="grid md:grid-cols-2 gap-6">
            <Card title="活用例を見る" onClick={() => navigate('/cases')} className="hover:border-primary-200">
                <p className="text-text-main mb-4 leading-relaxed">
                    <FormattedText text="「献立を考える」「旅行の計画を立てる」など、日常の困りごとをAIがどう助けてくれるかを見てみましょう。" />
                </p>
                <span className="text-primary-600 font-bold text-sm">詳しく見る &rarr;</span>
            </Card>
            <Card title="おすすめツール" onClick={() => navigate('/tools')} className="hover:border-primary-200">
                <p className="text-text-main mb-4 leading-relaxed">
                    <FormattedText text="初心者でも使いやすい、安全なAIツールを厳選して紹介します。まずはここから試してみましょう。" />
                </p>
                <span className="text-primary-600 font-bold text-sm">詳しく見る &rarr;</span>
            </Card>
        </section>
    );
};
