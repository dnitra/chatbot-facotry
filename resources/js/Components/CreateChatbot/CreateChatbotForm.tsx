import React from 'react';
import Step from '@/Components/CreateChatbot/Step';

// dummy steps
const steps = [
  {
    title: 'Step 1',
    description: 'This is step 1',
  },
  {
    title: 'Step 2',
    description: 'This is step 2',
  },
  {
    title: 'Step 3',
    description: 'This is step 3',
  },
];
export default function CreateChatbotForm() {
  return (
    <>
      {/* mapping steps */}
      {steps.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          description={step.description}
        />
      ))}
    </>
      
  );
}
