import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          View Project <ExternalLinkIcon size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;