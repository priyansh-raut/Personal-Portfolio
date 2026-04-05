import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="min-h-[60vh] flex flex-col justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-purple-400">Education</span></h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12">
            {/* Timeline dot */}
            <div className="absolute left-[-40px] md:left-1/2 top-8 md:top-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
            
            <div className="w-full md:w-[45%] bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-purple-400" size={24} />
                <h3 className="text-2xl font-bold text-white">BCA (Bachelor of Computer Applications)</h3>
              </div>
              <h4 className="text-lg text-slate-300 font-medium mb-4">[Your University Name]</h4>
              
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2021 - 2024 (Present)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>[Your City, Country]</span>
                </div>
              </div>
              
              <p className="mt-4 text-slate-300 leading-relaxed">
                Currently in my final year, focusing on Web Technologies, Software Engineering, and Database Management Systems. Maintaining a strong academic record with a current CGPA of [X.XX].
              </p>
            </div>
            
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
