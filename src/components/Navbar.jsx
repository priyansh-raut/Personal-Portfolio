import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Briefcase, Home, GraduationCap, LayoutGrid, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home', icon: <Home size={18} /> },
    { name: 'About', id: 'about', icon: <User size={18} /> },
    { name: 'Skills', id: 'skills', icon: <LayoutGrid size={18} /> },
    { name: 'Education', id: 'education', icon: <GraduationCap size={18} /> },
    { name: 'Projects', id: 'projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="text-blue-500 group-hover:text-purple-400 transition-colors" size={28} />
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Priyansh's Portfolio
            </span>
          </a>

          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === item.id
                    ? 'bg-slate-800 text-blue-400 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium ${activeTab === item.id
                    ? 'bg-slate-800 text-blue-400'
                    : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
