import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ArticleCard from './components/ArticleCard';
import ResumeSection from './components/ResumeSection';

function App() {
  const projects = [
    {
      title: "Fuzzy Trivia",
      description: "A Trivia application with Streaks, Multiplayer and TV Shows Trivia",
      image: "https://rldskppyocblrygykkqg.supabase.co/storage/v1/object/sign/images/portfolio/fuzzy%20trivia%20mx.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcG9ydGZvbGlvL2Z1enp5IHRyaXZpYSBteC5wbmciLCJpYXQiOjE3MzAyMTgxNzcsImV4cCI6MTc2MTc1NDE3N30.fgu6U09t8pORzdm7hC8nRLMosrOutpv43NpPNWuzdos&t=2024-10-29T16%3A09%3A37.879Z",
      tags: ["Flutter", "Firebase", "SqFlite"],
      link: "https://play.google.com/store/apps/details?id=com.giglab.fuzzytrivia&hl=en"
    },
    {
      title: "Acter",
      description: "Contributing to innovative solutions while enhancing our community platform",
      image: "https://rldskppyocblrygykkqg.supabase.co/storage/v1/object/sign/images/portfolio/acter%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcG9ydGZvbGlvL2FjdGVyIGxvZ28ucG5nIiwiaWF0IjoxNzMwMjIwNDI0LCJleHAiOjE3NjE3NTY0MjR9.nUzkNOBxIusoJ4ajG051679nbjutbn7MGCjh-09DVNA&t=2024-10-29T16%3A47%3A04.424Z",
      tags: ["Flutter", "Figma", "UI/UX", "Rust"],
      link: "https://apps.apple.com/us/app/acter/id6445989155"
    },
    {
      title: "Day",
      description: "A personal sidekick app featuring TikTok-like video scrolling, habit tracking with streaks, and open-source contributions.",
      image: "https://rldskppyocblrygykkqg.supabase.co/storage/v1/object/sign/images/portfolio/day%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcG9ydGZvbGlvL2RheSBsb2dvLnBuZyIsImlhdCI6MTczMjY0OTg2MiwiZXhwIjoxNzY0MTg1ODYyfQ.8K9inMeAgQEHLjC02t5Y75nY-cEN4gLZo2p9TLB2F4E&t=2024-11-26T19%3A37%3A44.184Z",
      tags: ["Flutter", "Node.js", "Supabase", "SqFlite"],
      link: "https://github.com/kokodavid/day"
    },
  ];

  const uiProjects = [
    {
      title: "Fintech App Design",
      description: "Modern financial management app with focus on user experience",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=400",
      tags: ["Figma", "UI/UX", "Prototyping"],
      link: "https://www.figma.com"
    },
    {
      title: "Health & Wellness Platform",
      description: "Wellness tracking platform with intuitive interface design",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=400",
      tags: ["Adobe XD", "UI/UX", "Design System"],
      link: "https://www.figma.com"
    },
    {
      title: "E-learning Dashboard",
      description: "Educational platform dashboard with focus on accessibility",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400",
      tags: ["Figma", "UI/UX", "Education"],
      link: "https://www.figma.com"
    }
  ];

  const articles = [
    {
      title: "Effects of Alloying Elements on Steel",
      description: "Learn how alloying elements influence the properties of steel.",
      date: "November 28, 2024",
      readTime: "2 min read",
      tags: ["Materials Science", "Engineering"],
      link: "https://medium.com/@MochogeDavid/effects-of-alloying-elements-on-steel-dd90b0bdfc62"
    },
    {
      title: "Integrating Google Sign-In with Supabase in Flutter",
      description: "Learn how to integrate Google Sign-In with Supabase in Flutter to streamline user authentication in your apps.",
      date: "October 23, 2024",
      readTime: "5 min read",
      tags: ["Flutter", "Supabase", "Authentication"],
      link: "https://medium.com/@MochogeDavid/integrating-google-sign-in-with-supabase-in-a-flutter-app-efea8329f4e2"
    },
    {
      title: "SOLID Principles in Dart",
      description: "A guide to applying SOLID principles in Dart, helping developers write clean, modular, and highly maintainable code.",
      date: "July 18, 2024",
      readTime: "2 min read",
      tags: ["Dart", "SOLID", "Clean Code"],
      link: "https://medium.com/@MochogeDavid/solid-principles-in-dart-d78de9d14299"
    },
    {
      title: "Object-Oriented Programming in Dart",
      description: "Discover the fundamentals of Object-Oriented Programming in Dart to build organized, efficient, and reusable code.",
      date: "May 29, 2024",
      readTime: "6 min read",
      tags: ["Dart", "OOP"],
      link: "https://medium.com/@MochogeDavid/object-oriented-programming-in-dart-ee080999b2c8"
    },
    {
      title: "Data Types in Dart: A Beginner's Guide",
      description: "Explore the essential data types in Dart, providing a solid foundation for writing clear and efficient code.",
      date: "December 20, 2023",
      readTime: "5 min read",
      tags: ["Dart", "Beginner"],
      link: "https://medium.com/@MochogeDavid/data-types-in-dart-a-beginners-guide-caefde163e80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>

      {/* Development Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Projects Section */}
      {/* <section id="ui-projects" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">UI/UX Designs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Articles Section */}
      <section id="articles" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8"></h2>
          <ResumeSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 David Mochoge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;