import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
  };

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

  const contactInfo = [
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: "Téléphone",
      details: [
        "+226 54 79 35 12 (Burkina Faso)",
        "+212 607 68 13 22 (Maroc)"
      ]
    },
    {
      icon: <Mail className="text-purple-600\" size={24} />,
      title: "Email",
      details: [
        "ouedraogoalicia22@gmail.com"
      ]
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Localisation",
      details: [
        "Casablanca-settat, Maroc",
        "Ouagadougou, Burkina Faso"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-600">Contactez</span> moi
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
            Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-purple-50 rounded-xl overflow-hidden shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2">
            <motion.div 
              variants={itemVariants} 
              className="p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre nom"
                    {...register('name', { required: 'Le nom est requis' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                    {...register('email', { 
                      required: 'L\'email est requis',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Adresse email invalide'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Sujet de votre message"
                    {...register('subject', { required: 'Le sujet est requis' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre message..."
                    {...register('message', { 
                      required: 'Le message est requis',
                      minLength: {
                        value: 10,
                        message: 'Le message doit contenir au moins 10 caractères'
                      }
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center disabled:bg-purple-400"
                >
                  {isSubmitting ? 'Envoi en cours...' : (
                    <>
                      Envoyer <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-purple-600 p-8 md:p-12 text-white flex items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Discutons de vos projets</h3>
                <p className="mb-6">
                  Vous avez un projet web ou mobile en tête ? Besoin d'une présence digitale efficace ? 
                  Ou peut-être souhaitez-vous collaborer sur un projet humanitaire ? 
                  Je suis disponible pour discuter de vos idées et vous aider à les concrétiser.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-2">Mes disponibilités :</h4>
                  <p>Lundi - Vendredi : 9h - 18h</p>
                  <p>Samedi : 10h - 14h</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Suivez-moi :</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-purple-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-purple-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-purple-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;