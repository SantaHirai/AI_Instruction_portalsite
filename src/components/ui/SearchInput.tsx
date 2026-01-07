import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className = '', onClear, ...props }) => {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
                type="text"
                className="
                    block w-full pl-10 pr-10 py-2.5 
                    bg-white border border-slate-200 rounded-xl
                    text-text-main placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                    transition-all shadow-sm
                "
                {...props}
            />
            {props.value && onClear && (
                <button
                    onClick={onClear}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="h-5 w-5" />
                </button>
            )}
        </div>
    );
};
