import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          <Terminal size={14} />
          <span>Hello World</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          I'm a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">React Developer</span> <br className="hidden md:block"/>
          & BCA Engineer.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Currently in my final year of BCA, passionate about building beautiful, interactive, and highly performant web applications using modern web technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >
            <span>View My Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-full transition-colors duration-300"
          >
            <Code size={18} />
            <span>More About Me</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
