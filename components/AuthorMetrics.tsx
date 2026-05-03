import { authorMetricsData } from '@/data/authorMetricsData';
import React from 'react';

export default function AuthorMetrics() {
  return (
    <div className='my-8 flex flex-col gap-8 font-sans'>
      <div className='text-3xl leading-tight sm:text-4xl md:text-5xl'>
        {authorMetricsData.heading.map((line, idx) => (
          <div key={idx} className={line.style}>
            {line.text}
          </div>
        ))}
      </div>

      <p className='max-w-2xl text-base font-medium text-gray-700 dark:text-gray-300 sm:text-lg'>
        {authorMetricsData.subheading}
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        {authorMetricsData.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl bg-gray-50 dark:bg-[#222222] border border-gray-200 dark:border-[#333333] transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {metric.value}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {metric.description}
            </div>
          </div>
        ))}
      </div> */}

      <div className='my-2 flex flex-col gap-6 border-l-[3px] border-gray-200 pl-5 dark:border-gray-800'>
        {authorMetricsData.features.map((feature, idx) => (
          <div key={idx} className='flex flex-col'>
            <h4 className='mb-1 text-base font-bold text-gray-900 dark:text-white'>
              {feature.title}
            </h4>
            <p className='text-sm font-medium text-gray-700 dark:text-gray-400 md:text-base'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className='my-4 h-px w-full bg-gray-200 dark:bg-gray-800' />

      <p className='max-w-3xl text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg'>
        {authorMetricsData.footer}
      </p>
    </div>
  );
}
