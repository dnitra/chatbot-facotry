import React from "react";

export default function Step(props: any) {
    const { title, description } = props;
    
    return (
        <div>
            <div className="p-6 lg:p-8 bg-white border-b border-gray-200">
                <h1 className="mt-8 text-2xl font-medium text-gray-900">
                    {title}
                </h1>
                <p className="mt-6 text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}