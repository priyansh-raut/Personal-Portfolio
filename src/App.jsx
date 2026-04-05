import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-900 overflow-x-hidden">
      {/* Background glowing effects */}
      <div className="fixed top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="z-10 py-6 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Priya. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
