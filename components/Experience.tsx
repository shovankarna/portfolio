import { useState } from 'react';
import { experienceData } from '@/data/experienceData';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong
          key={i}
          className='font-semibold text-gray-900 dark:text-gray-100'
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const getBadgeStyles = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'current':
      return 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20';
    case 'senior':
      return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20';
    case 'junior':
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20';
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-300 dark:border-gray-500/20';
  }
};

const Experience = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div className='mt-8 mb-12'>
      <div className='relative ml-2 border-l-2 border-gray-200 pb-4 dark:border-[#2A2A2A] md:ml-4'>
        {experienceData.map((exp, index) => {
          const isExpanded = expandedIndices.includes(index);
          const rolesCount = exp.positions.length;

          const rangePartsLast =
            exp.positions[exp.positions.length - 1].range.split(/[-–]/);
          const firstDate = rangePartsLast[0].trim();
          const rangePartsFirst = exp.positions[0].range.split(/[-–]/);
          const lastDate = rangePartsFirst[1]
            ? rangePartsFirst[1].trim()
            : 'Present';

          return (
            <div key={index} className='relative mb-8 last:mb-0 md:mb-12'>
              {/* Main Timeline Dot */}
              <div className='absolute -left-[7px] mt-7 h-3 w-3 rounded-full border-[3px] border-gray-300 bg-white dark:border-gray-600 dark:bg-[#1A1A1A] md:-left-[8px] md:mt-8 md:h-3.5 md:w-3.5'></div>

              <div className='ml-6 md:ml-10'>
                <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 dark:border-[#2A2A2A] dark:bg-[#1A1A1A]'>
                  {/* Clickable Header */}
                  <div
                    className='group flex cursor-pointer flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center md:p-6'
                    onClick={() => toggleExpand(index)}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(index);
                      }
                    }}
                  >
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 md:text-2xl'>
                        {exp.company}
                      </h3>
                      <p className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-gray-600 dark:text-gray-400'>
                        <span>{exp.location}</span>
                        <span className='text-gray-300 dark:text-gray-600'>
                          •
                        </span>
                        <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
                          {firstDate} - {lastDate}
                        </span>
                      </p>
                    </div>

                    <div className='flex shrink-0 items-center gap-3 self-start sm:self-auto'>
                      {exp.role ? (
                        <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                          {exp.role}
                        </span>
                      ) : (
                        <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                          {rolesCount} {rolesCount === 1 ? 'role' : 'roles'}
                        </span>
                      )}
                      <div className='rounded-full bg-gray-100 p-1.5 text-gray-500 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:bg-[#202020] dark:text-gray-400 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400'>
                        {isExpanded ? (
                          <FiChevronUp size={18} />
                        ) : (
                          <FiChevronDown size={18} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div>
                      <div className='h-px w-full bg-gray-200 dark:bg-[#2A2A2A]'></div>
                      <div className='space-y-10 p-5 md:p-8'>
                        {exp.positions.map((pos, idx) => (
                          <div key={idx}>
                            {/* Position Header */}
                            <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
                              <div className='flex flex-wrap items-center gap-3'>
                                <h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                                  {pos.title}
                                </h4>
                                {pos.badge && (
                                  <span
                                    className={`rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold ${getBadgeStyles(
                                      pos.badge,
                                    )}`}
                                  >
                                    {pos.badge}
                                  </span>
                                )}
                              </div>
                              <span className='shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400'>
                                {pos.range}
                              </span>
                            </div>

                            {/* Description */}
                            <ul className='space-y-3'>
                              {pos.description.map((desc, dIdx) => (
                                <li
                                  key={dIdx}
                                  className='flex text-[0.95rem] leading-relaxed text-gray-700 dark:text-gray-400'
                                >
                                  <span className='mr-3 select-none font-medium text-gray-400 dark:text-gray-500'>
                                    -
                                  </span>
                                  <span>{parseBoldText(desc)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Stack Footer */}
                      {exp.stack && exp.stack.length > 0 && (
                        <div className='flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-gray-200 bg-gray-50 px-5 py-4 dark:border-[#2A2A2A] dark:bg-[#141414] md:px-8'>
                          <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                            Stack:
                          </span>
                          <div className='flex flex-wrap gap-2'>
                            {exp.stack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className='rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[0.75rem] font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-[#202020] dark:text-gray-300'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
