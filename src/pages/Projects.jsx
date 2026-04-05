import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive React dashboard for managing e-commerce data with interactive charts, state management via Redux, and a responsive Tailwind layout.',
      tech: ['React', 'Redux', 'Tailwind CSS', 'Recharts'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, authenticaton, and full CRUD operations.',
      tech: ['React', 'Firebase', 'Framer Motion', 'Vite'],
      github: '#',
      live: '#'
    },
    {
      title: 'BCA Final Year Project',
      description: 'A full-stack college portal for students and professors to manage assignments, resources, and attendance seamlessly.',
      tech: ['MERN Stack', 'Express', 'MongoDB', 'React'],
      github: '#',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've built during my journey as a React developer and BCA student.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              key={idx}
              className="group relative bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-6 flex-grow flex flex-col z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Monitor size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors" aria-label="View Source">
                      <Code2 size={20} />
                    </a>
                    <a href={project.live} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-900/80 text-blue-300 rounded-md border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
