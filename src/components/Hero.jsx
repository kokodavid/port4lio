import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/CV_David_Mochoge.pdf';
  link.download = 'David_Mochoge_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Hi, I'm <span className="text-indigo-600">David </span>
        </h1>
        
        <div className="flex flex-col items-center mb-8">
          <p className="text-xl text-gray-600 mb-2">
            Mobile App Developer
          </p>
          <p className="text-lg text-gray-600">
            Specializing in <span className="text-indigo-600">Flutter</span> & <span className="text-indigo-600">Native Android</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {['UI/UX', 'Clean Architecture', 'REST APIs', 'Firebase', 'State Management'].map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/kokodavid"
            className="p-3 text-gray-600 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/davidmochoge/"
            className="p-3 text-gray-600 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="mailto:david.mo.okoko@gmail.com"
            className="p-3 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <MailIcon size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadResume}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors">
            Download Resume
          </button>
          <a
            href="#projects"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;