import { FormattedText } from '../ui/FormattedText';
import { SpeechBubble } from '../ui/SpeechBubble';
import guideImage from '../../assets/images/guide.png';

export const IntroductionSection: React.FC = () => {
    return (
        <section className="max-w-3xl mx-auto">
            <SpeechBubble name="案内係" position="left" avatar={guideImage}>
                <p className="leading-relaxed">
                    <FormattedText text="こんにちは！このサイトでは、難しい専門用語を使わずに、AI（人工知能）が私たちの生活をどう便利にしてくれるのかを紹介します。ゆっくり見ていってくださいね。" />
                </p>
            </SpeechBubble>
        </section>
    );
};
