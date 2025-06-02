import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Mme Loubna BOUAICHA",
      position: "Cheffe du département informatique",
      company: "Agence Urbaine de Settat",
      text: "Alicia a développé une application web fonctionnelle, très utile à nos services. Sérieuse, rigoureuse et réactive, elle a su répondre parfaitement à nos besoins tout en proposant des améliorations pertinentes.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "BERGER IGNABAYE NGABE",
      position: "Étudiant",
      company: "2ème année de Génie Logiciel",
      text: "J'ai collaboré avec Alicia sur plusieurs projets. Elle est très organisée, à l'écoute, et assure un travail de qualité. Sa capacité à résoudre les problèmes et sa créativité font d'elle une excellente développeuse.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Coulibaly Gisèle",
      position: "Vice-présidente du comité d'organisation",
      company: "Association Lise Group",
      text: "Le site web créé par Alicia pour notre association a considérablement augmenté notre visibilité. Son professionnalisme et sa compréhension de nos besoins ont fait toute la différence. Je la recommande vivement.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-600">Témoignages</span>
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
            Découvrez ce que disent mes clients et collaborateurs.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Quote size={60} className="absolute text-purple-100 -top-10 -left-4 opacity-70" />
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="bg-purple-50 rounded-xl p-8 md:p-10">
                    <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.text}"</p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <p className="text-purple-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-white shadow-md hover:bg-purple-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-purple-600" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-white shadow-md hover:bg-purple-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-purple-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;