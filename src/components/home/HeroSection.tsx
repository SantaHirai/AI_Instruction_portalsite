import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
    return (
        <section className="text-center py-12 bg-gradient-to-b from-primary-50 to-white rounded-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 leading-relaxed">
                生成AIの取扱説明書へ<br className="md:hidden" />ようこそ
            </h1>
            <p className="text-lg text-text-main max-w-2xl mx-auto mb-8 leading-loose">
                「AIって何？」そんな疑問を、やさしく言葉で解決します。<br />
                新しい家電の取扱説明書のように、安心してお読みください。
            </p>
            <Link
                to="/basics"
                className="inline-block bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-primary-500 transition-colors transform hover:-translate-y-1"
            >
                まずは基本を知る
            </Link>
        </section>
    );
};
