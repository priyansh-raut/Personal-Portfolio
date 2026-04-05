import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Laptop } from 'lucide-react';

const Skills = () => {
  const skills = [
    { category: 'Frontend', icon: <Layout className="text-blue-400" size={24} />, items: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion', 'Redux'] },
    { category: 'Backend & DB', icon: <Database className="text-emerald-400" size={24} />, items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'] },
    { category: 'Tools & Workflow', icon: <Laptop className="text-purple-400" size={24} />, items: ['Git & GitHub', 'Vite', 'Postman', 'VS Code', 'Figma'] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-[80vh] flex flex-col justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-blue-400">Skills</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full"
      >
        {skills.map((skillGroup, idx) => (
          <motion.div 
            variants={itemVariants} 
            key={idx} 
            className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-900 flex items-center justify-center rounded-2xl mb-6 shadow-inner border border-slate-800">
              {skillGroup.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-slate-900/60 text-slate-300 rounded-lg text-sm border border-slate-700 hover:border-blue-500/50 hover:text-white transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
