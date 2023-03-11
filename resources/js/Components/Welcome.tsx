import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome() {
  return (
    <div>
      <div className="p-6 lg:p-8 bg-white border-b border-gray-200">
        <ApplicationLogo className="block h-12 w-auto" />

        <h1 className="mt-8 text-2xl font-medium text-gray-900">
          Soon you will be able to:
        </h1>

        <p className="mt-6 text-gray-500 leading-relaxed">
          <ul className="list-disc list-inside">
            <li>Create your own chatbots</li>
            <li>Manage your chatbots</li>
            <li>and more...</li>
          </ul>
        </p>
      </div>

    </div>
  );
}
