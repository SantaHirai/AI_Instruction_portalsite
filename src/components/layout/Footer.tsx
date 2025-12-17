import { FormattedText } from '../ui/FormattedText';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-50 mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-text-muted text-base">
        <p>© {new Date().getFullYear()} <FormattedText text="生成AIの取扱説明書" />. All rights reserved.</p>
        <p className="mt-2 text-sm"><FormattedText text="AIを活用して、より豊かな生活を。" /></p>
      </div>
    </footer>
  );
};
