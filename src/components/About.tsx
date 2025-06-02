import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            À propos de <span className="text-purple-600">moi</span>
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
            Développeuse web et mobile passionnée par l'innovation et l'impact social.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Qui suis-je?</h3>
            <p className="text-gray-600 mb-4">
              Je me présente : Alicia Lise Marion Ouedraogo, développeuse web et mobile passionnée par l'innovation et l'impact social. Actuellement en troisième année de développement d'applications digitales et informatiques à l'École Supérieure des Réseaux Informatiques et Management (ESRIM).
            </p>
            <p className="text-gray-600 mb-4">
              Je suis également présidente de Lise Group, une association humanitaire active dans la lutte contre la précarité, la promotion du leadership féminin, et le soutien à l'éducation au Burkina Faso.
            </p>
            <p className="text-gray-600">
              Titulaire d'un baccalauréat scientifique avec mention Bien (15,46/20), j'ai suivi une classe préparatoire scientifique (filière MP) à CPGE MENAPLN, appuyée par le professeur Stanislas OUARO. Mon parcours mêle exigence académique, expérience associative, entrepreneuriat et passion pour le digital.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Award className="text-purple-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Éducation</h4>
                <p className="text-gray-600">
                  Bac scientifique avec mention, classe préparatoire MP, 3ème année en développement d'applications.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <BookOpen className="text-teal-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Compétences</h4>
                <p className="text-gray-600">
                  Développement web/mobile, UI/UX, marketing digital, gestion de projets.
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <Users className="text-amber-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Leadership</h4>
                <p className="text-gray-600">
                  Présidente de Lise Group, gestion d'équipe, coordination de projets.
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg">
                <Heart className="text-rose-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Passions</h4>
                <p className="text-gray-600">
                  Innovation digitale, impact social, éducation, leadership féminin.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;