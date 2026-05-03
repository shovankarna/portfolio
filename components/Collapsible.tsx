import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Collapsible({ title, children }: Props) {
  return (
    <details className='group my-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/50 transition-colors dark:border-[#333333] dark:bg-[#222222]/50'>
      <summary className='[&::-webkit-details-marker]:hidden flex w-full cursor-pointer list-none items-center justify-between px-6 py-5 text-left focus:outline-none'>
        <h2 className='m-0 flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white md:text-2xl'>
          {title}
        </h2>
        <span className='flex-shrink-0 text-gray-400 transition-transform duration-300 group-open:-rotate-180'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </span>
      </summary>
      <div className='prose max-w-none border-t border-gray-200 px-6 pb-6 pt-2 dark:prose-dark dark:border-[#333333]'>
        {children}
      </div>
    </details>
  );
}
