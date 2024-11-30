import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const ArticleCard = ({ title, description, date, readTime, link, tags = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={link}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
      >
        Read More <ArrowRightIcon size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default ArticleCard;
