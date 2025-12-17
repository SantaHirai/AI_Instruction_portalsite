import React from 'react';
import { Tooltip } from './Tooltip';
import { KEYWORDS } from '../../data/keywords';

interface FormattedTextProps {
    text: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
    const processText = (input: string) => {
        // 1. Split by <br/>
        return input.split(/<br\s*\/?>/gi).map((line, i, arr) => (
            <React.Fragment key={i}>
                {processLine(line)}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const processLine = (line: string) => {
        // 2. Split by <strong> tag
        return line.split(/(<strong>.*?<\/strong>)/gi).map((part, j) => {
            if (part.toLowerCase().startsWith('<strong>') && part.toLowerCase().endsWith('</strong>')) {
                const innerText = part.replace(/<\/?strong>/gi, '');
                return (
                    <strong key={j} className="font-bold text-accent-600">
                        {/* Recursive processing for keywords inside strong */}
                        {processKeywords(innerText, j)}
                    </strong>
                );
            }
            // 3. Process matched keywords in plain text
            return processKeywords(part, j);
        });
    };

    const processKeywords = (text: string, keyPrefix: number) => {
        let parts: (string | React.ReactNode)[] = [text];

        KEYWORDS.forEach((keyword) => {
            parts = parts.flatMap((part) => {
                if (typeof part !== 'string') return part;

                // Split by keyword (Global match)
                const regex = new RegExp(`(${keyword.term})`, 'g');
                return part.split(regex).map((subPart, k) => {
                    if (subPart === keyword.term) {
                        return (
                            <Tooltip
                                key={`${keyPrefix}-${keyword.term}-${k}`}
                                text={keyword.term}
                                content={keyword.description}
                            />
                        );
                    }
                    return subPart;
                });
            });
        });

        return <React.Fragment key={keyPrefix}>{parts}</React.Fragment>;
    };

    return <>{processText(text)}</>;
};
