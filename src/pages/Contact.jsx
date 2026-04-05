import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-center py-20 px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-blue-400">Touch</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="text-slate-400 text-sm mb-4">Connect with me for professional inquiries.</p>
            <a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              hello@example.com
            </a>
          </div>
          
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
            <p className="text-slate-400 text-sm mb-4">Find me on the internet.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors text-slate-300 hover:text-white">
                In
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors text-slate-300 hover:text-white">
                Gh
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors text-slate-300 hover:text-white">
                Tw
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input type="text" id="name" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
              <input type="text" id="subject" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="How can I help you?" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" rows="5" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Your message here..."></textarea>
            </div>
            
            <button type="submit" className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
