import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaGem, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Optika Dunyosiga Xush Kelibsiz
          </h1>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Yorug'lik, linzalar, interferensiya va boshqa qiziqarli hodisalarni o'rganishga tayyormisiz?
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <FaLightbulb className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Yorug'lik Tabiati</h3>
              <p className="text-blue-200">Yorug'likning to'lqin va kvant xususiyatlarini o'rganing</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <FaGem className="text-4xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Optik Hodisalar</h3>
              <p className="text-blue-200">Interferensiya, difraksiya va dispersiya hodisalarini o'rganing</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <FaGraduationCap className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Interaktiv Ta'lim</h3>
              <p className="text-blue-200">Animatsiyalar va simulyatsiyalar orqali bilim oling</p>
            </motion.div>
          </div>

          {/* Call to action button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-colors"
            onClick={() => navigate('/topics')}
          >
            Darslarni Boshlash
          </motion.button>
        </motion.div>
      </div>

      {/* Animated light beam */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-1 h-64 bg-gradient-to-t from-blue-500 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translateX(-50%)' }}
      />
    </div>
  );
};

export default HomePage;
