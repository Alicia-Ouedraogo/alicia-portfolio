import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ChevronRight, Car, Calculator, Gamepad2, Share2, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Gestion du parc automobile",
      description: "Application web pour gérer efficacement les véhicules, entretiens et affectations pour l'Agence Urbaine de Settat.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      role: "Développeuse principale",
      impact: "Facilitation de la logistique interne",
      icon: <Car className="text-purple-600" size={32} />,
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Calculatrice Java",
      description: "Développement d'une calculatrice pour les opérations arithmétiques de base avec une interface conviviale.",
      technologies: ["Java", "JavaFX"],
      role: "Développeuse",
      impact: "Projet éducatif démontrant ma compréhension des logiques applicatives",
      icon: <Calculator className="text-purple-600\" size={32} />,
      image: "https://images.pexels.com/photos/6238308/pexels-photo-6238308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Snick Game",
      description: "Reproduction du jeu classique du serpent avec score, niveaux, et contrôle fluide du serpent.",
      technologies: ["Python", "Pygame"],
      role: "Développeuse principale",
      impact: "Démonstration de mes compétences en développement ludique et en conception d'algorithmes dynamiques",
      icon: <Gamepad2 className="text-purple-600" size={32} />,
      image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Gestion des réseaux sociaux",
      description: "Gestion des réseaux sociaux pour Lise Group et autres projets, création de contenu et stratégie digitale.",
      technologies: ["Canva", "Meta Business Suite", "CapCut", "Figma"],
      role: "Community manager et graphiste",
      impact: "Croissance de la communauté et campagnes performantes",
      icon: <Share2 className="text-purple-600\" size={32} />,
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Site web Lise Group",
      description: "Création du site web de l'association Lise Group pour valoriser les actions humanitaires, faciliter les dons et adhésions.",
      technologies: ["HTML", "CSS", "PHP", "Bootstrap"],
      role: "Développeuse web et gestionnaire de contenu",
      impact: "Renforcement de la visibilité et de la légitimité de l'association",
      icon: <Globe className="text-purple-600" size={32} />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mes <span className="text-purple-600">réalisations</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-teal-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Découvrez une sélection de mes projets qui illustrent mes compétences et mon expérience.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center mb-2">
                      {project.icon}
                      <h3 className="text-xl font-bold ml-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">Rôle: {project.role}</p>
                  </div>
                  <button 
                    onClick={() => setActiveProject(project)}
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                  >
                    Détails <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                {activeProject.icon}
                <h3 className="text-2xl font-bold ml-3 text-gray-800">{activeProject.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{activeProject.description}</p>
                </div>
                
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Mon rôle</h4>
                    <p className="text-gray-600">{activeProject.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Impact</h4>
                    <p className="text-gray-600">{activeProject.impact}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg mr-3"
                >
                  Fermer
                </button>
                <a 
                  href="#contact" 
                  onClick={() => setActiveProject(null)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg flex items-center"
                >
                  Me contacter <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;