import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Code, Palette, Monitor, PenTool, Brain, Briefcase } from 'lucide-react';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import { projects, socialLinks } from './data';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import DesignCard from './components/DesignCard';


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section id="about" className="relative min-h-screen pt-24 pb-32 px-4 overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2964')",
            opacity: theme === 'dark' ? '0.5' : '0.1'
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950/90' 
              : 'bg-gradient-to-b from-zinc-150 via-zinc-250/95 to-zinc-350/90'
          }`}
        />

        <div className="container relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                  Crafting Digital
                </span>
                <br />
                <span className="text-zinc-950 dark:text-white">
                  Experiences & Art
                </span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                Where code meets creativity. I transform ideas into captivating digital experiences, 
                blending modern web development with stunning visual design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SocialLinks links={socialLinks} />
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <Code className="h-8 w-8 text-indigo-600 mb-3" />
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Frontend Dev</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">React, TypeScript, Tailwind</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <Monitor className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">UI/UX</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">Figma, User Experience</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <Palette className="h-8 w-8 text-pink-600 mb-3" />
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Graphics</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">Photo Manipulation, Flyers</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <PenTool className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Video Edit</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">Motion Graphics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a
              href="#experience"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce"
              onClick={() => setActiveSection('experience')}
            >
              <ArrowDown className="h-8 w-8 text-zinc-400 dark:text-zinc-500" />
            </a>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-6">About Me</h2>
              <div className="prose dark:prose-invert">
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                  With over 5 years of experience in both frontend development and graphic design,
                  I've developed a unique perspective that bridges the gap between technical implementation
                  and creative design. My dual expertise allows me to create solutions that are not only
                  technically sound but also visually compelling.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-12 w-12 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Problem Solver</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Combining technical skills with creative thinking to solve complex challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-12 w-12 text-pink-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Professional</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Delivering high-quality solutions for clients across various industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-6">Experience Timeline</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-indigo-600">
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-1 text-sm text-indigo-600 font-semibold">2023 - Present</div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Senior Frontend Developer</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">Leading frontend development for enterprise applications</p>
                </div>
                <div className="relative pl-8 border-l-2 border-pink-600">
                  <div className="absolute w-4 h-4 bg-pink-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-1 text-sm text-pink-600 font-semibold">2021 - Present</div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Freelance Graphic Designer</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">Creating brand identities and marketing materials</p>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-600">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-1 text-sm text-purple-600 font-semibold">2019 - 2021</div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">Frontend Developer</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">Building responsive web applications</p>
                </div>
                <div className="relative pl-8 border-l-2 border-green-600">
                  <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-1 text-sm text-green-600 font-semibold">2018 - 2019</div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">UI/UX Designer</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">Designing user interfaces and experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section id="development" className="py-20 px-4 bg-stone-100 dark:bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-12">Development Projects</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
            {projects
              .filter((project) => project.category === 'development')
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          {/* </div> */}
        </div>
      </section>

      {/* Design Projects */}
      <section id="design" className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white mb-12">Design Projects</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
            {projects
              .filter((project) => project.category === 'design')
              .map((project) => (
                <DesignCard key={project.id} project={project} />
              ))}
          {/* </div> */}
        </div>
      </section>

      {/* Contact Section */}
     <Contact />
    </div>
  );
}

export default App;