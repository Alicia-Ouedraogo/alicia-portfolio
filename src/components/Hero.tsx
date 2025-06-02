import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-teal-50 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Alicia Lise Marion <span className="text-purple-600">Ouedraogo</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-teal-600 mt-2 font-medium">
              Développeuse Web & Mobile
            </h2>
            <p className="text-gray-600 my-6 text-lg max-w-xl">
              Passionnée par l'innovation et l'impact social, je crée des solutions digitales 
              élégantes et fonctionnelles tout en dirigeant une association humanitaire.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#projects" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="bg-white border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-6 py-3 rounded-lg transition-colors"
              >
                Me contacter
              </a>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a 
                href="mailto:ouedraogoalicia22@gmail.com" 
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                   src="/image.jpg"
                  alt="Alicia Lise Marion Ouedraogo" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white px-6 py-2 rounded-lg shadow-lg">
                  <span className="text-purple-600 font-semibold">3+ ans d'expérience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;