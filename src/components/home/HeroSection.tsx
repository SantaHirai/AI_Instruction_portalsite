import { FormattedText } from '../ui/FormattedText';

export const HeroSection: React.FC = () => {
    return (
        <section className="text-center py-12 bg-gradient-to-b from-primary-50 to-white rounded-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 leading-relaxed">
                <FormattedText text="生成AIの取扱説明書へ<br/>ようこそ" />
            </h1>
            <p className="text-lg text-text-main max-w-2xl mx-auto mb-8 leading-loose">
                <FormattedText text="「AIって何？」そんな疑問を、やさしい言葉で解決します。<br />新しい家電の取扱説明書のように、安心してお読みください。" />
            </p>

        </section>
    );
};
