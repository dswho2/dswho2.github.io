// src/components/ExperienceCard.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  positions?: string[];
  description: string;
  skills?: string[];
  isDimmed: boolean;
  onHover: () => void;
  onHoverLeave: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  dateRange,
  title,
  company,
  positions = [],
  description,
  skills = [],
  isDimmed,
  onHover,
  onHoverLeave
}) => {
  return (
    <div 
      className={`p-6 rounded-lg transition-all duration-200 hover:bg-gray-800/50 ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-gray-400 text-sm">{dateRange}</span>
        <div className="flex items-center gap-1 text-teal-400 cursor-pointer">
          <span className="text-sm hover:underline">{company}</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
      
      <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
      {positions.map((position, index) => (
        <div key={index} className="text-gray-400 mb-1">{position}</div>
      ))}
      
      <div className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-xs bg-teal-900/30 text-teal-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
