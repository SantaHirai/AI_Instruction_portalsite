import React from 'react';

interface FormattedTextProps {
    text: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
    const processText = (input: string) => {
        // Split by <br/> (allowing optional space)
        return input.split(/<br\s*\/?>/gi).map((line, i, arr) => (
            <React.Fragment key={i}>
                {/* Split by <strong>...</strong> capturing the group */}
                {line.split(/(<strong>.*?<\/strong>)/gi).map((part, j) => {
                    if (part.toLowerCase().startsWith('<strong>') && part.toLowerCase().endsWith('</strong>')) {
                        return (
                            <strong key={j} className="font-bold text-accent-600">
                                {part.replace(/<\/?strong>/gi, '')}
                            </strong>
                        );
                    }
                    return <span key={j}>{part}</span>;
                })}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return <>{processText(text)}</>;
};
