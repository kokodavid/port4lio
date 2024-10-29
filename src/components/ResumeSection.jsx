import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from 'lucide-react';

const ResumeSection = () => {
  return (
    <div className="space-y-12">
      {/* Experience
      <div>
        <div className="flex items-center mb-6">
          <BriefcaseIcon size={24} className="text-indigo-600 mr-2" />
          <h3 className="text-2xl font-semibold">Experience</h3>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Flutter & Design Engineer</h4>
            <p className="text-indigo-600">Acter • May 2023 - Present</p>
            <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
              <li>Led development of company's flagship web application</li>
              <li>Implemented responsive design principles and modern UI patterns</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Flutter Developer</h4>
            <p className="text-indigo-600">Sapphire Leadership Group, Inc • Dec 2021 - Feb 2023</p>
            <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
              <li>Developed and maintained client websites</li>
              <li>Collaborated with designers to implement pixel-perfect UIs</li>
              <li>Optimized website performance and SEO</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Education
      <div>
        <div className="flex items-center mb-6">
          <GraduationCapIcon size={24} className="text-indigo-600 mr-2" />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h4>
          <p className="text-indigo-600">University Name • 2014 - 2018</p>
          <p className="mt-4 text-gray-600">
            Focused on web development and software engineering principles.
            Graduated with honors.
          </p>
        </div>
      </div> */}

      {/* Skills */}
      <div>
        <div className="flex items-center mb-6">
          <AwardIcon size={24} className="text-indigo-600 mr-2" />
          <h3 className="text-2xl font-semibold">Skills</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Flutter', 'Dart', 'Javascript', 'Java', 'Typescript', 'UI/UX'].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;