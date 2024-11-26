import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Problem {
  id: number;
  title: string;
  description: string;
  solution: string;
  difficulty: 'Oson' | "O'rta" | 'Qiyin';
}

const problems: Problem[] = [
  {
    id: 1,
    title: 'Yorug`lik sinishi',
    description: 'Yorug`lik nuri havoda 1.5 burchak ostida shisha sirtiga tushmoqda. Agar shishaning sindirish ko`rsatkichi 1.5 bo`lsa, singan nurning yo`nalishini toping.',
    solution: "Snell qonunidan foydalanib:\nn₁sin(θ₁) = n₂sin(θ₂)\n1 × sin(1.5°) = 1.5 × sin(θ₂)\nθ₂ = arcsin(sin(1.5°)/1.5) ≈ 1°",
    difficulty: 'Oson'
  },
  {
    id: 2,
    title: 'Linza fokusi',
    description: 'Qavariq linzaning fokus masofasi 10 sm. Agar predmet linzadan 15 sm masofada joylashgan bo`lsa, tasvir qayerda hosil bo`ladi?',
    solution: "1/f = 1/d₁ + 1/d₂\n1/10 = 1/15 + 1/d₂\nd₂ = 30 sm\nTasvir linzadan 30 sm masofada hosil bo'ladi",
    difficulty: "O'rta"
  },
  {
    id: 3,
    title: 'Optik kuch',
    description: 'Linzaning fokus masofasi 25 sm. Uning optik kuchini dioptrlarda hisoblang.',
    solution: 'D = 1/f (metrda)\nD = 1/0.25 = 4 dioptriya',
    difficulty: 'Oson'
  },
  {
    id: 4,
    title: 'Interferensiya',
    description: 'Yung tajribasida ekrandagi interferension maksimumlar orasidagi masofa 0.5 mm. Agar yorug`lik to`lqin uzunligi 500 nm bo`lsa va ekran tirqishlardan 1 m masofada joylashgan bo`lsa, tirqishlar orasidagi masofani toping.',
    solution: 'Δx = λL/d\nd = λL/Δx = (500×10⁻⁹ × 1)/(0.5×10⁻³) = 1 mm',
    difficulty: "O'rta"
  },
  {
    id: 5,
    title: 'Difraksion panjara',
    description: 'Difraksion panjaraga normal yo`nalishda yorug`lik tushmoqda. Agar panjarada 1 mm da 100 ta shtrix bo`lsa va birinchi tartibli maksimum 30° burchak ostida kuzatilsa, yorug`likning to`lqin uzunligini toping.',
    solution: 'd×sin(θ) = k×λ\nd = 1/100 = 0.01 mm\nλ = d×sin(30°) = 0.01×0.5 = 500 nm',
    difficulty: 'Qiyin'
  },
  {
    id: 6,
    title: 'Fokus masofasini hisoblash',
    description: 'Sferik linzaning dioptriyalari 5 dioptriya. Uning fokus masofasini toping.',
    solution: 'f = 1/D = 1/5 = 0.2 m (20 sm)',
    difficulty: 'Oson'
  },
  {
    id: 7,
    title: 'Qavariq linzaning tasviri',
    description: 'Qavariq linzadan 30 sm masofada joylashgan predmetning tasvirining masofasini toping. Linzaning fokus masofasi 15 sm.',
    solution: '1/f = 1/d₁ + 1/d₂\n1/15 = 1/30 + 1/d₂\nd₂ = 30 sm\nTasvir linzadan 30 sm masofada hosil bo‘ladi',
    difficulty: "O'rta"
  },
  {
    id: 8,
    title: 'Yorug`lik nurlanishi',
    description: 'Agar yorug`likning to`lqin uzunligi 600 nm bo`lsa va yorug`lik tezligi 3×10⁸ m/s bo`lsa, uning chastotasini hisoblang.',
    solution: 'v = λ × f\nf = v/λ = (3×10⁸)/(600×10⁻⁹) = 5×10¹⁴ Hz',
    difficulty: 'Oson'
  },
  {
    id: 9,
    title: 'Polarisatsiya',
    description: 'Yorug`likni polarizatsiya qilishda 60° burchak ostida qutb filtridan o`tkazish kerak. Filtrga qarshi burchakni toping.',
    solution: 'θ = 90° - 60° = 30°\nFiltrga qarshi burchak 30° bo‘ladi.',
    difficulty: "O'rta"
  },
  {
    id: 10,
    title: 'Laser yorug`ligi',
    description: 'Laserli nurning to`lqin uzunligi 500 nm. Agar lazer nuri 2 marta intensiv bo`lsa, yangi to`lqin uzunligini toping.',
    solution: 'To`lqin uzunligi va intensivlik orasidagi bog`lanish: λ ∝ 1/√I\nYangi to`lqin uzunligi: 500√2 ≈ 707 nm',
    difficulty: "O'rta"
  },
  {
    id: 11,
    title: 'Spektral chiziqlar',
    description: 'Spektral chiziqlar orasidagi masofa 1 mm. Agar yorug`likning to`lqin uzunligi 400 nm bo`lsa, yorug`likning tarqalish burchagini toping.',
    solution: 'd × sin(θ) = m × λ\nd = 1 mm = 10⁻³ m, m = 1\nθ = arcsin(λ/d) = arcsin(400×10⁻⁹/10⁻³) = 23.6°',
    difficulty: 'Qiyin'
  },
  {
    id: 12,
    title: 'Difraksion qatorlar',
    description: 'Difraksion qatorlar o`rtasidagi masofa 2 mm. Agar birinchi tartibdagi maksimum uchun yorug`lik to`lqin uzunligi 600 nm bo`lsa, difraksion panjaraning shtrixlar orasidagi masofani toping.',
    solution: 'd = λL/Δx = (600×10⁻⁹ × 1)/(2×10⁻³) = 0.3 mm',
    difficulty: "O'rta"
  },
  {
    id: 13,
    title: 'Ko`zgularni ishlatish',
    description: 'Ikki ko`zgu orasidagi masofa 10 sm. Agar birinchi ko`zgu fokusi 5 sm va ikkinchisi 15 sm bo`lsa, tasvir hosil bo`lgan joyni toping.',
    solution: '1/f = 1/f₁ + 1/f₂\n1/10 = 1/5 + 1/15\nd₂ = 7.5 sm',
    difficulty: "O'rta"
  },
  {
    id: 14,
    title: 'Optik kuchni o`lchash',
    description: 'Linzaning fokus masofasi 50 sm. Uning optik kuchini hisoblang.',
    solution: 'D = 1/f = 1/0.5 = 2 dioptriya',
    difficulty: 'Oson'
  },
  {
    id: 15,
    title: 'Interferensiya maximumi',
    description: 'Ekrandagi interferensiya maksimumi orasidagi masofa 1 mm. Agar yorug`lik to`lqin uzunligi 700 nm bo`lsa, tirqishlar orasidagi masofani toping.',
    solution: 'Δx = λL/d\nd = λL/Δx = (700×10⁻⁹ × 1)/(1×10⁻³) = 0.7 mm',
    difficulty: "O'rta"
  },
  {
    id: 16,
    title: 'Kuzatuvchi linzaning tasviri',
    description: 'Qavariq linzaning fokus masofasi 10 sm. Agar predmet linzadan 20 sm masofada joylashgan bo`lsa, tasvir hosil bo`lgan joyni toping.',
    solution: '1/f = 1/d₁ + 1/d₂\n1/10 = 1/20 + 1/d₂\nd₂ = 20 sm',
    difficulty: "O'rta"
  },
  {
    id: 17,
    title: 'Xususiy optik kuch',
    description: 'Linzaning optik kuchi 6 dioptriya. Fokus masofasini hisoblang.',
    solution: 'f = 1/D = 1/6 = 0.167 m (16.7 sm)',
    difficulty: 'Oson'
  },
  {
    id: 18,
    title: 'Yorug`lik sinishi',
    description: 'Yorug`lik nuri havoda 30° burchak ostida suvga tushmoqda. Agar suvning sindirish ko`rsatkichi 1.33 bo`lsa, singan nurning yo`nalishini toping.',
    solution: 'Snell qonuni: n₁sin(θ₁) = n₂sin(θ₂)\n1 × sin(30°) = 1.33 × sin(θ₂)\nθ₂ ≈ 22°',
    difficulty: "O'rta"
  },
  {
    id: 19,
    title: 'Burgut tasviri',
    description: 'Burgutni 2 m masofadan ko`rish uchun linzani joylashtirish kerak. Agar linzaning fokus masofasi 5 sm bo`lsa, tasvir masofasini hisoblang.',
    solution: '1/f = 1/d₁ + 1/d₂\n1/5 = 1/200 + 1/d₂\nd₂ = 5.05 sm',
    difficulty: "O'rta"
  },
  {
    id: 20,
    title: 'Difraksion panjaraning tuzilishi',
    description: 'Difraksion panjarada 500 shtrix bo`lsa va maksimal difraksiya 20° burchak ostida kuzatilsa, yorug`lik to`lqin uzunligini toping.',
    solution: 'd = 1/500 = 0.002 mm\nλ = d×sin(20°) = 0.002×0.342 = 684 nm',
    difficulty: 'Qiyin'
  }
];


const Problems: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleProblemClick = (problem: Problem) => {
    setSelectedProblem(problem);
    setShowSolution(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Optika masalalari</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Masalalar ro'yxati</h2>
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedProblem?.id === problem.id
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-white border-gray-200'
              } border hover:shadow-lg transition-shadow`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProblemClick(problem)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{problem.title}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  problem.difficulty === 'Oson' ? 'bg-green-100 text-green-800' :
                  problem.difficulty === "O'rta" ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {selectedProblem ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">{selectedProblem.title}</h2>
              <p className="text-gray-700 mb-6">{selectedProblem.description}</p>
              
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? 'Yechimni yashirish' : 'Yechimni ko`rsatish'}
              </button>

              {showSolution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Yechim:</h3>
                  <pre className="bg-gray-50 p-4 rounded whitespace-pre-wrap">
                    {selectedProblem.solution}
                  </pre>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Masalani tanlang</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;
