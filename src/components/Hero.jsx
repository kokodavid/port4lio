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
        {/* <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
        /> */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-indigo-600">David </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A passionate mobile app developer crafting intuitive and visually captivating experiences.
        </p>
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
        <button
          onClick={handleDownloadResume}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;