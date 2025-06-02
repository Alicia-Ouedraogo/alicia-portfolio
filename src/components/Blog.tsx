import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, User } from 'lucide-react';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "Être étudiante et entrepreneure à 20 ans",
      excerpt: "Comment je jongle entre mes études en développement informatique et ma présidence d'une association humanitaire. Découvrez mes astuces pour gérer son temps et rester motivée.",
      date: "12 Mars 2024",
      author: "Alicia Ouedraogo",
      readTime: "5 min",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Entrepreneuriat"
    },
    {
      id: 2,
      title: "Lancer une association active au Burkina Faso : mon expérience",
      excerpt: "Les défis et les réussites de la création et de la gestion de Lise Group, une association humanitaire qui lutte contre la précarité et soutient l'éducation au Burkina Faso.",
      date: "28 Février 2024",
      author: "Alicia Ouedraogo",
      readTime: "7 min",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Humanitaire"
    },
    {
      id: 3,
      title: "Tech et jeunesse africaine : mon engagement digital",
      excerpt: "Comment les technologies peuvent contribuer au développement de l'Afrique et pourquoi il est essentiel d'encourager les jeunes à s'engager dans le numérique.",
      date: "15 Janvier 2024",
      author: "Alicia Ouedraogo",
      readTime: "6 min",
      image: "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Tech"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mon <span className="text-purple-600">blog</span>
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
            Découvrez mes réflexions sur la technologie, l'entrepreneuriat et l'impact social.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a 
                    href="#" 
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                  >
                    Lire plus <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#" 
            className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
          >
            Voir tous les articles <ArrowRight size={18} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;