import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MonitorSmartphone, Smartphone, BarChart3, Briefcase } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      title: "Création de sites web",
      description: "Je conçois et développe des sites web attrayants et fonctionnels, qu'il s'agisse de sites vitrines, associatifs, ou e-commerce. Chaque projet est adapté aux besoins spécifiques et aux objectifs du client.",
      icon: <MonitorSmartphone size={48} className="text-purple-600" />,
      offerings: [
        "Sites vitrines professionnels",
        "Sites e-commerce",
        "Sites associatifs",
        "Blogs personnalisés",
      ]
    },
    {
      title: "Développement d'applications",
      description: "Je développe des applications web et mobiles innovantes, intuitives et performantes pour répondre à vos besoins spécifiques, qu'il s'agisse d'une application métier ou grand public.",
      icon: <Smartphone size={48} className="text-purple-600" />,
      offerings: [
        "Applications web progressives",
        "Applications mobiles natives",
        "Applications hybrides",
        "Interfaces administrateur",
      ]
    },
    {
      title: "Community management",
      description: "Je gère votre présence sur les réseaux sociaux en créant du contenu engageant, en développant votre communauté et en élaborant des stratégies digitales efficaces pour accroître votre visibilité en ligne.",
      icon: <BarChart3 size={48} className="text-purple-600" />,
      offerings: [
        "Gestion des réseaux sociaux",
        "Création de contenu",
        "Stratégie digitale",
        "Analyse des performances",
      ]
    },
    {
      title: "Accompagnement digital",
      description: "J'accompagne les entreprises, associations et entrepreneurs dans leur transformation digitale en proposant des solutions sur mesure adaptées à leurs besoins et objectifs spécifiques.",
      icon: <Briefcase size={48} className="text-purple-600" />,
      offerings: [
        "Conseil en stratégie digitale",
        "Formation sur les outils numériques",
        "Audit et optimisation web",
        "Accompagnement personnalisé",
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mes <span className="text-purple-600">services</span>
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
            Découvrez les services que je propose pour vous aider à concrétiser vos projets digitaux.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Ce que j'offre :</h4>
                  <ul className="space-y-2">
                    {service.offerings.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg inline-block transition-colors font-medium"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;