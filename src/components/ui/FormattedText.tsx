import React from 'react';

interface FormattedTextProps {
    text: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
    return (
        <>
            {text.split('<br/>').map((line, i, arr) => (
                <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    );
};
