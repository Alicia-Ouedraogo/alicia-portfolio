import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Database, Smartphone, PenTool, Globe, BrainCircuit, Briefcase } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    {
      category: 'Développement Web',
      icon: <Code className="text-purple-600" size={32} />,
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'SQL']
    },
    {
      category: 'Développement Mobile',
      icon: <Smartphone className="text-purple-600\" size={32} />,
      items: ['Flutter', 'React Native', 'Java', 'Android Studio']
    },
    {
      category: 'Design UI/UX',
      icon: <PenTool className="text-purple-600" size={32} />,
      items: ['Figma', 'Canva', 'Magic Pattern', 'Principes de design']
    },
    {
      category: 'Base de données',
      icon: <Database className="text-purple-600\" size={32} />,
      items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Marketing Digital',
      icon: <Globe className="text-purple-600" size={32} />,
      items: ['Community Management', 'Stratégie de contenu', 'Réseaux sociaux', 'SEO']
    },
    {
      category: 'Gestion de projets',
      icon: <Briefcase className="text-purple-600\" size={32} />,
      items: ['Conception', 'Coordination', 'Exécution', 'Livraison']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mes <span className="text-purple-600">compétences</span>
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
            Au fil de mes formations et projets, j'ai acquis des compétences solides dans plusieurs domaines.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-purple-600 to-teal-500 p-8 rounded-xl text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <BrainCircuit size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">En constante évolution</h3>
          <p className="max-w-2xl mx-auto">
            Je reste à jour avec les dernières technologies et tendances du développement web et mobile. 
            L'apprentissage continu fait partie intégrante de ma démarche professionnelle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;