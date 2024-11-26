import React from 'react';
import { Github, Linkedin, ExternalLink, Users, Star, GitFork, Briefcase, Award, Clock } from 'lucide-react';

const SocialPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Profiles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GitHub Preview */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <Github className="w-8 h-8 text-gray-900" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                <span>Visit Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 mb-6">Open source contributions and personal projects</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600">1.2k Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5 text-indigo-500" />
                <span className="text-gray-600">450 Forks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">280 Followers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="text-gray-600">5+ Years</span>
              </div>
            </div>
          </div>

          {/* LinkedIn Preview */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <Linkedin className="w-8 h-8 text-[#0077b5]" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                <span>Visit Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-6">Professional experience and connections</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0077b5]" />
                <span className="text-gray-600">500+ Connections</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0077b5]" />
                <span className="text-gray-600">8 Years Exp.</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0077b5]" />
                <span className="text-gray-600">15 Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0077b5]" />
                <span className="text-gray-600">Active Daily</span>
              </div>
            </div>
          </div>

          {/* Upwork Preview */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" fill="#6FDA44"/>
              </svg>
              <a href="https://upwork.com" target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                <span>Visit Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Upwork</h3>
            <p className="text-gray-600 mb-6">Freelance work and client projects</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#6FDA44]" />
                <span className="text-gray-600">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#6FDA44]" />
                <span className="text-gray-600">50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#6FDA44]" />
                <span className="text-gray-600">2000+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#6FDA44]" />
                <span className="text-gray-600">Top Rated Plus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPreview;