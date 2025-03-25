import React from 'react';
import { Menu, X, Code, Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ activeSection, setActiveSection, theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Development', href: '#development' },
    { name: 'Design', href: '#design' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672')",
          opacity: '0.15'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-gray-900 to-transparent" />

      <nav className="container relative mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <Code className="h-6 w-6 text-indigo-600" />
              <Palette className="h-6 w-6 text-pink-600" />
            </div>
            <span className="text-xl font-bold dark:text-white">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveSection(item.name.toLowerCase())}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 text-sm font-medium ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => {
                  setActiveSection(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}