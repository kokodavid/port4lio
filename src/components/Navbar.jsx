import React from "react";
import { Menu, X } from "lucide-react";
import DayGraphic from "../assets/day.svg"; // Update with the correct path to your SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Get current day of the week
  const days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const currentDay = days[new Date().getDay()];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Dynamic Day Display with SVG */}
          <div className="flex items-center">
            <span className="text-[1.40rem] font-bold text-indigo-600 relative top-2">
              {currentDay}
            </span>
            <img src={DayGraphic} alt="Day Logo" className="h-14 w-14 -ml-2" />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#articles"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Articles
            </a>
            <a
              href="#resume"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Skills
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#articles"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </a>
            <a
              href="#resume"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
