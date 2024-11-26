import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaWaveSquare, 
  FaGem, 
  FaAtom, 
  FaMicroscope, 
  FaLaptop,
  FaFlask,
  FaCube,
  FaBolt,
  FaProjectDiagram
} from 'react-icons/fa';

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topics: Topic[] = [
  {
    id: 'light-nature',
    title: "Yorug'lik va uning tabiati",
    description: "Yorug'likning to'lqin va zarracha xususiyatlari, tarqalishi va asosiy qonunlari",
    icon: <FaLightbulb className="text-yellow-400" />
  },
  {
    id: 'interference',
    title: "Yorug'lik interferensiyasi",
    description: "Yorug'lik to'lqinlarining o'zaro ta'siri va interferensiya hodisasi",
    icon: <FaWaveSquare className="text-blue-400" />
  },
  {
    id: 'diffraction',
    title: "Yorug'lik difraksiyasi",
    description: "Yorug'likning to'siqlar chetidan og'ishi va difraksion hodisalar",
    icon: <FaWaveSquare className="text-green-400" />
  },
  {
    id: 'dispersion',
    title: "Yorug'lik dispersiyasi",
    description: "Yorug'likning spektral tarkibga ajralishi va rang hosil bo'lishi",
    icon: <FaGem className="text-purple-400" />
  },
  {
    id: 'polarization',
    title: "Yorug'lik polyarizatsiyasi",
    description: "Yorug'lik to'lqinlarining tebranish tekisligi va polyarizatsiya hodisalari",
    icon: <FaWaveSquare className="text-red-400" />
  },
  {
    id: 'quantum',
    title: "Kvant optikasi",
    description: "Yorug'likning kvant tabiati, fotoeffekt va fotonlar",
    icon: <FaAtom className="text-blue-500" />
  },
  {
    id: 'lenses',
    title: "Linzalar optikasi",
    description: "Linzalarning turlari, xossalari va tasvirlar hosil bo'lishi",
    icon: <FaMicroscope className="text-green-500" />
  },
  {
    id: 'optical-instruments',
    title: "Optik asboblar",
    description: "Mikroskop, teleskop va boshqa optik asboblarning tuzilishi va ishlashi",
    icon: <FaMicroscope className="text-purple-500" />
  },
  {
    id: 'fiber-optics',
    title: "Tolali optika",
    description: "Optik tolalar, ularning tuzilishi va qo'llanilishi",
    icon: <FaProjectDiagram className="text-blue-400" />
  },
  {
    id: 'laser-physics',
    title: "Lazer fizikasi",
    description: "Lazerlarning ishlash prinsipi, turlari va qo'llanilishi",
    icon: <FaBolt className="text-red-500" />
  },
  {
    id: 'holography',
    title: "Golografiya",
    description: "Uch o'lchovli tasvirlar yaratish va golografik texnologiyalar",
    icon: <FaCube className="text-indigo-400" />
  },
  {
    id: 'nonlinear-optics',
    title: "Nochizig'iy optika",
    description: "Yuqori intensivlikdagi yorug'lik va muhit o'zaro ta'siri",
    icon: <FaFlask className="text-yellow-500" />
  },
  {
    id: 'quantum-optics',
    title: "Kvant optikasi asoslari",
    description: "Kvant mexanikasi va zamonaviy optik texnologiyalar",
    icon: <FaAtom className="text-purple-400" />
  },
  {
    id: 'optical-computing',
    title: "Optik hisoblash",
    description: "Yorug'lik yordamida ma'lumotlarni qayta ishlash texnologiyalari",
    icon: <FaLaptop className="text-green-400" />
  }
];

const Topics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Optika bo'yicha mavzular
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/topics/${topic.id}`}
                className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">
                    {topic.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
                </div>
                <p className="text-gray-300">{topic.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
