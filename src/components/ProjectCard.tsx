import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  technologies?: string[];
  image?: string;
  isDimmed: boolean;
  onHover: () => void;
  onHoverLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  github,
  technologies = [],
  image,
  isDimmed,
  onHover,
  onHoverLeave
}) => {
  return (
    <div 
      className={`p-6 rounded-lg transition-all duration-200 ${
        isDimmed ? 'opacity-50' : 'opacity-100'
      } ${!isDimmed ? 'hover:ring-1 hover:ring-teal-400/50 hover:bg-gray-800/50' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left side - Image */}
        {image && (
          <div className="w-full sm:w-32 sm:flex-shrink-0 mb-4 sm:mb-0">
            <img 
              src={image} 
              alt={`${title} thumbnail`} 
              className="w-full h-auto sm:h-20 object-cover rounded-md" 
              style={{ aspectRatio: '1.6 / 1' }} // Maintain aspect ratio of 1.6:1
            />
          </div>
        )}

        {/* Right side - Content */}
        <div className="flex-1">
          {/* Title and Arrow */}
          <div className="flex justify-between items-start mb-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-200 hover:text-teal-400"
            >
              <span className="text-lg font-semibold">{title}</span>
              <ArrowUpRight 
                size={16} 
                className="text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400"
              />
            </a>
          </div>

          {/* Description */}
          <div className="text-gray-300 mb-4 text-sm leading-relaxed">
            {description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-xs bg-teal-900/30 text-teal-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
