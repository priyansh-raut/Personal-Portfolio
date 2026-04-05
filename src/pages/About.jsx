import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-purple-400">Me</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <User className="text-blue-400" size={28} />
              <h3 className="text-3xl font-semibold">My Journey</h3>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed space-y-6 relative z-10">
              <span className="block">
                Hello! I am an enthusiastic developer currently in my final year of pursuing a Bachelor of Computer Applications (BCA).
              </span>
              <span className="block">
                My interest in web development sparked when I created my first HTML/CSS webpage. Since then, I've dive deep into the React ecosystem, learning how to build scalable, component-driven user interfaces.
              </span>
              <span className="block">
                As an engineer-in-training, I focus on writing clean, maintainable code and building applications that provide an excellent user experience. I am actively seeking opportunities to apply my skills in a professional environment and build amazing products.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
