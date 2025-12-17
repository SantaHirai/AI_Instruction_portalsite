import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Wrench, ArrowRight, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';
import { FormattedText } from '../ui/FormattedText';

export const FeatureCardsSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="grid md:grid-cols-2 gap-6">
            <Card 
                title="まずは基本を知る" 
                icon={<BookOpen size={20} />}
                onClick={() => navigate('/basics')} 
                className="hover:border-primary-200 md:col-span-2 hover:bg-gradient-to-r hover:from-primary-50 hover:to-white"
            >
                <p className="text-text-main mb-4 leading-relaxed">
                    <FormattedText text="人工知能（AI）に興味はあるけれど、「そもそもAIって何？」「具体的にどんなことができるの？」といった疑問をお持ちではありませんか？ ここでは、専門知識がない方でも安心して理解できるよう、AIの基本を優しく、そして分かりやすく解説いたします。" />
                </p>
                <div className="flex items-center text-primary-600 font-bold text-sm group">
                    <span className="mr-2">詳しく見る</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </Card>
            <Card 
                title="活用例を見る" 
                icon={<Sparkles size={20} />}
                onClick={() => navigate('/cases')} 
                className="hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-white"
            >
                <p className="text-text-main mb-4 leading-relaxed">
                    <FormattedText text="「献立を考える」「旅行の計画を立てる」など、日常の困りごとをAIがどう助けてくれるかを見てみましょう。" />
                </p>
                <div className="flex items-center text-primary-600 font-bold text-sm group">
                    <span className="mr-2">詳しく見る</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </Card>
            <Card 
                title="おすすめサービス" 
                icon={<Wrench size={20} />}
                onClick={() => navigate('/tools')} 
                className="hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-white"
            >
                <p className="text-text-main mb-4 leading-relaxed">
                    <FormattedText text="初心者でも使いやすい、安全なAIサービスを厳選して紹介します。まずはここから試してみましょう。" />
                </p>
                <div className="flex items-center text-primary-600 font-bold text-sm group">
                    <span className="mr-2">詳しく見る</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </Card>
        </section>
    );
};
