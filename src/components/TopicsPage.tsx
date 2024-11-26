import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaAtom, FaMicroscope } from 'react-icons/fa';

const topics = [
  {
    id: 1,
    title: "Yorug'lik va uning tabiati",
    description: "Yorug'likning to'lqin va kvant nazariyalari, yorug'lik tezligi va uning xususiyatlari",
    icon: <FaAtom className="text-4xl text-blue-400" />,
    path: "/topics/light-nature"
  },
  {
    id: 2,
    title: "Yorug'lik interferensiyasi",
    description: "Yorug'lik to'lqinlarining o'zaro ta'siri, Yung tajribasi, interferensiya hodisasi va uning amaliy qo'llanilishi",
    icon: <FaMicroscope className="text-4xl text-green-400" />,
    path: "/topics/interference"
  },
  {
    id: 3,
    title: "Yorug'lik difraksiyasi",
    description: "Yorug'likning to'siqlar atrofida tarqalishi, difraksion panjara va uning qo'llanilishi",
    icon: <FaBook className="text-4xl text-purple-400" />,
    path: "/topics/diffraction"
  },
  {
    id: 4,
    title: "Yorug'lik dispersiyasi",
    description: "Yorug'likning turli muhitlarda tarqalishi, spektr va ranglar nazariyasi",
    icon: <FaAtom className="text-4xl text-red-400" />,
    path: "/topics/dispersion"
  },
  {
    id: 5,
    title: "Geometrik optika",
    description: "Yorug'likning to'g'ri chiziq bo'ylab tarqalishi, ko'zgular va linzalar",
    icon: <FaMicroscope className="text-4xl text-yellow-400" />,
    path: "/topics/geometric-optics"
  },
  {
    id: 6,
    title: "Optik asboblar",
    description: "Mikroskop, teleskop, fotoapparatlar va boshqa optik qurilmalarning ishlash prinsipi",
    icon: <FaBook className="text-4xl text-pink-400" />,
    path: "/topics/optical-instruments"
  },
  {
    id: 7,
    title: "Yorug'lik polyarizatsiyasi",
    description: "Yorug'lik to'lqinlarining tebranish yo'nalishi va polyarizatsiya hodisasi",
    icon: <FaAtom className="text-4xl text-indigo-400" />,
    path: "/topics/polarization"
  },
  {
    id: 8,
    title: "Kvant optika asoslari",
    description: "Fotonlar, fotoeffekt hodisasi va kvant optikaning zamonaviy qo'llanilishi",
    icon: <FaMicroscope className="text-4xl text-cyan-400" />,
    path: "/topics/quantum-optics"
  },
  {
    id: 9,
    title: "Lazerlar",
    description: "Lazerlarning ishlash prinsipi, turlari va ularning amaliy qo'llanilishi",
    icon: <FaBook className="text-4xl text-orange-400" />,
    path: "/topics/lasers"
  },
  {
    id: 10,
    title: "Optik aloqa tizimlari",
    description: "Optik tolali aloqa, ma'lumotlarni uzatish va zamonaviy telekommunikatsiya",
    icon: <FaAtom className="text-4xl text-teal-400" />,
    path: "/topics/optical-communication"
  }
];

const TopicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Optika Mavzulari
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={topic.path} className="block">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:bg-white/20 transition-colors">
                  <div className="flex items-center mb-4">
                    {topic.icon}
                    <h2 className="text-xl font-semibold text-white ml-4">{topic.title}</h2>
                  </div>
                  <p className="text-blue-200">{topic.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
