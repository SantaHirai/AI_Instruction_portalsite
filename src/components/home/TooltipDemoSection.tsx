import React from 'react';
import { Lightbulb } from 'lucide-react';
import { FormattedText } from '../ui/FormattedText';
    
export const TooltipDemoSection: React.FC = () => {
    return (
        <section className="mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-100 rounded-full text-amber-600 shrink-0">
                        <Lightbulb size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            言葉の意味を知りたいときは？
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            <FormattedText text="文章の中に点線の下線がある言葉は、マウスを乗せる（スマホならタップする）と意味が表示されます。" />
                        </p>
                        <div className="mt-4 p-4 bg-white rounded-lg border border-amber-100">
                            <p className="text-sm text-gray-600 mb-2 font-bold">試してみましょう：</p>
                            <p className="text-gray-800">
                                <FormattedText text="AIは人工知能の略です。" />                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
