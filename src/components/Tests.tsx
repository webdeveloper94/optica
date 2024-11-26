import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface TestSection {
  id: number;
  title: string;
  description: string;
  questions: TestQuestion[];
  difficulty: 'Oson' | "O'rta" | 'Qiyin';
}

const testSections: TestSection[] = [
  {
    id: 1,
    title: 'Yorug`likning tarqalishi',
    description: 'Yorug`likning to`g`ri chiziq bo`ylab tarqalish xususiyatlari',
    difficulty: 'Oson',
    questions: [
      {
        id: 1,
        question: 'Yorug`lik to`g`ri chiziq bo`ylab tarqalishini qanday qonun tushuntiradi?',
        options: [
          'Geometrik optika qonuni',
          'Difraksiya qonuni',
          'Sinish qonuni'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Yorug`lik vakuumda qanday tezlikda harakat qiladi?',
        options: ['3×10⁸ m/s', '2×10⁸ m/s', '1×10⁸ m/s'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'Qaysi modda yorug`likni eng sekin o`tkazadi?',
        options: ['Olmos', 'Suv', 'Havo'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Yorug`lik qanday nurlar bo`lib ajratiladi?',
        options: ['To`g`ri va qaytuvchi', 'Difraksion va sinuvchi', 'Infraqizil va ultrabinafsha'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Yorug`likning qaytish qonunini kim kashf qilgan?',
        options: ['Nyuton', 'Snellius', 'Galiley'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Yorug`lik tarqalishida to`siq uchraganda nima sodir bo`ladi?',
        options: ['Sochiladi', 'Qaytadi', 'Sinadi'],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Yorug`likning tarqalishi qaysi turdagi to`lqinga kiradi?',
        options: ['Bo`shliqda tarqaluvchi', 'Mexanik', 'Elektromagnit'],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'Yorug`likning sinish burchagini qanday aniqlash mumkin?',
        options: ['Sinish qonuni yordamida', 'Tushish burchagini o`lchash orqali', 'Kuzatish orqali'],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'Yorug`likning egilishi qanday hodisa orqali namoyon bo`ladi?',
        options: ['Difraksiya', 'Polarizatsiya', 'Interferensiya'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Ko`zgudagi tasvir qanday hosil bo`ladi?',
        options: [
          'Yorug`lik qaytishi natijasida',
          'Yorug`lik sinishi natijasida',
          'Yorug`lik sochilishi natijasida'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 2,
    title: 'Yorug`likning sinishi',
    description: 'Yorug`likning bir muhitdan ikkinchisiga o`tishi jarayonidagi sinishi',
    difficulty: 'Oson',
    questions: [
      {
        id: 1,
        question: 'Yorug`lik bir muhitdan ikkinchisiga o`tganda qaysi hodisa sodir bo`ladi?',
        options: ['Sinadi', 'Qaytadi', 'Yutiladi'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Sinish burchagi qanday omillarga bog`liq?',
        options: ['Muhayyo nisbati va burchakka', 'Tushish burchagiga', 'Faqat muhitning zichligiga'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'Sinish qonuni qaysi formula orqali ifodalanadi?',
        options: ['n₁sinθ₁ = n₂sinθ₂', 'n₁θ₁ = n₂θ₂', 'sinθ₁/sinθ₂ = c₁/c₂'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Qaysi muhitda yorug`lik eng sekin harakat qiladi?',
        options: ['Shisha', 'Havo', 'Suv'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'Sinishning maksimal burchagi nima deb ataladi?',
        options: ['Kritik burchak', 'Tushish burchagi', 'Refleksiya burchagi'],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Yorug`lik sinishida nima saqlanib qoladi?',
        options: ['Tezlik', 'To`lqin uzunligi', 'Chastota'],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'Qaysi asbob yorug`lik sinishini kuzatish uchun ishlatiladi?',
        options: ['Refraktometr', 'Mikroskop', 'Barometr'],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Sinish hodisasi qaysi hodisa bilan birga ko`riladi?',
        options: ['Interferensiya', 'Polarizatsiya', 'Qaytish'],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'Yorug`likning tezligi kamayganida sinish qanday bo`ladi?',
        options: ['Ichkariga sinadi', 'Tashqariga sinadi', 'So`nadi'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Yorug`likning sinishining amaliy ahamiyati qaysi asbobda ko`rinadi?',
        options: ['Ko`zoynak', 'Teleskop', 'Periskop'],
        correctAnswer: 0
      }
    ]
  },

  {
    id: 3,
    title: 'Yorugʻlikning tabiati',
    description: 'Yorugʻlikning asosiy xususiyatlari va tarqalishi haqida testlar',
    difficulty: 'Oson',
    questions: [
      {
        id: 1,
        question: 'Yorugʻlik vakuumda qanday tezlikda tarqaladi?',
        options: ['3×10⁸ m/s', '2×10⁸ m/s', '4×10⁸ m/s'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Yorugʻlik qanday turdagi toʻlqinga kiradi?',
        options: ['Elektromagnit toʻlqin', 'Mexanik toʻlqin', 'Tovush toʻlqini'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'Yorugʻlik nurlari qanday boʻlinadi?',
        options: ['Toʻgʻri va qaytuvchi', 'Difraksion va sinuvchi', 'Infraqizil va ultrabinafsha'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Yorugʻlik qanday xususiyatga ega?',
        options: ['Chastotaga bogʻliq', 'Tezlikka bogʻliq', 'Har ikkalasi ham'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Yorugʻlik qanday energiyani tashiydi?',
        options: ['Issiqlik energiyasi', 'Elektromagnit energiya', 'Kimyoviy energiya'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Yorugʻlikning birinchi kashfiyoti kim tomonidan olingan?',
        options: ['Nyuton', 'Faraday', 'Maxvell'],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Qaysi muhitda yorugʻlik tezligi eng katta boʻladi?',
        options: ['Havo', 'Suv', 'Vakuum'],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'Yorugʻlik toʻlqin uzunligi nimaga bogʻliq?',
        options: ['Chastota', 'Energiya', 'Ikkalasi ham'],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'Yorugʻlikning difraksiya hodisasi nimaga asoslangan?',
        options: ['Toʻlqin tabiatiga', 'Zarracha tabiatiga', 'Spektroskopiya qonunlariga'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Yorugʻlikning interferensiya hodisasi qanday sodir boʻladi?',
        options: [
          'Toʻlqinlarning ustma-ust tushishi natijasida',
          'Nurlarning qaytishi natijasida',
          'Spektroskopiya orqali'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 4,
    title: 'Yorugʻlik qaytishi',
    description: 'Yorugʻlikning qaytish qonunlari va hodisalari',
    difficulty: 'Qiyin',
    questions: [
      {
        id: 1,
        question: 'Yorugʻlikning qaytish qonuni qanday?',
        options: [
          'Tushish burchagi qaytish burchagiga teng',
          'Tushish burchagi sinish burchagiga teng',
          'Tushish burchagi 90 gradusga teng'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Koʻzgu yuzasida qanday tasvir hosil boʻladi?',
        options: ['Teskari tasvir', 'Toʻgʻri tasvir', 'Sochuvchi tasvir'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'Yorugʻlik qaysi yuzada qaytadi?',
        options: ['Tekis yuzada', 'Egri yuzada', 'Faqat suv yuzasida'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Qaysi burchakda tushgan yorugʻlik qaytmaydi?',
        options: ['0°', '90°', '45°'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Qaytgan yorugʻlik qanday nur hosil qiladi?',
        options: ['Parallel nur', 'Sochuvchi nur', 'Sinuvchi nur'],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Qaytish qaysi hodisada kuzatiladi?',
        options: ['Koʻzguda', 'Suv ostida', 'Havoda'],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Koʻzgudagi tasvir qaysi xususiyatga ega?',
        options: ['Toʻgʻri', 'Teskari', 'Faqat koʻzguni katta qiladi'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'Yorugʻlik qaytishi qanday muhitda yuz beradi?',
        options: ['Shaffof muhitda', 'Faqat qattiq muhitda', 'Suyuq muhitda'],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'Qaytish qonuni qaysi asbob bilan sinovdan oʻtgan?',
        options: ['Goniometr', 'Spektroskop', 'Barometr'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Qaytishning umumiy holati qaysi?',
        options: [
          'Tushish burchagi teng boʻladi',
          'Qaytish burchagi kichik boʻladi',
          'Ikki burchak oʻrtasida doim bogʻliqlik boʻladi'
        ],
        correctAnswer: 2
      }
    ]
  },

  {
    id: 5,
    title: 'Linzalar va ularning xususiyatlari',
    description: 'Murakkab linza tizimlari va yorugʻlikning sinishi qonunlari haqida testlar',
    difficulty: 'Qiyin',
    questions: [
      {
        id: 1,
        question: 'Konvergent linzada yasalgan tasvirning kattaligi qanday belgilanadi?',
        options: [
          'Tasvirning balandligi boʻlinadi obyektning balandligiga',
          'Fokus masofasi boʻlinadi obyektning masofasiga',
          'Obyekt masofasi boʻlinadi fokus masofasiga'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Oʻzaro perpendikulyar joylashgan ikki linzaning optik kuchi qanday aniqlanadi?',
        options: [
          'Ularning kuchlari yigʻindisi bilan',
          'Ularning kuchlari ayirmasi bilan',
          'Ikki kuchning nisbatiga bogʻliq'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'Yorugʻlik linzada qanday sinadi?',
        options: [
          'Har doim fokusga yoʻnaladi',
          'Oʻtkazuvchi oʻq bo‘ylab sinadi',
          'Tushish burchagiga bogʻliq'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Linzalarda tasvirni kattalashtirish qanday formula bilan hisoblanadi?',
        options: [
          'K = f / (f - d)',
          'K = f / d',
          'K = (d - f) / f'
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'Linzalarning aberratsiyasi nima?',
        options: [
          'Tasvirning deformatsiyalashishi',
          'Tasvirning kattalashishi',
          'Tasvirning fokusdan uzoqlashishi'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Achromatik linza qanday ishlaydi?',
        options: [
          'Yorugʻlikni dispersiysiz yoʻnaltiradi',
          'Faqat infraqizil nurlarni yoʻnaltiradi',
          'Hamma toʻlqin uzunliklarini bir xil sinadi'
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Asferik linza qanday afzalliklarga ega?',
        options: [
          'Kamroq optik xatolik keltirib chiqaradi',
          'Koʻp fokus nuqtalari beradi',
          'Katta kattalashtirish darajasiga ega'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Linzaning optik kuchining birligi nima?',
        options: ['Dioptriya', 'Lux', 'Nanometr'],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'Linzaning tasvirni inverting qilish xususiyati nima bilan bogʻliq?',
        options: [
          'Tasvir masofasi obyekt masofasidan kichik boʻlganda',
          'Fokus masofasiga bogʻliq boʻlganda',
          'Tushish burchagining kattaligiga bogʻliq boʻlganda'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Murakkab linza tizimlarida qanday tasvir hosil boʻladi?',
        options: [
          'Birlashtirilgan linzalar yordamida kattalashtirilgan tasvir',
          'Aksincha tasvir',
          'Murakkab tasvir hosil boʻlmaydi'
        ],
        correctAnswer: 0
      }
    ]
  },


  {
    id: 6,
    title: 'Kvant fizikasining asosiy qonunlari',
    description: 'Kvant mexanikasi va zarrachalar xususiyatlari haqida testlar',
    difficulty: 'Qiyin',
    questions: [
      {
        id: 1,
        question: 'Plank doimiysi qanday formulada qoʻllaniladi?',
        options: [
          'E = hf',
          'E = mc²',
          'F = ma'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Fotoelektr effektda chiqarilgan elektronning energiyasi qanday aniqlanadi?',
        options: [
          'E = hf - W',
          'E = hf / W',
          'E = hf + W'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'De Broyl toʻlqin uzunligi qanday aniqlanadi?',
        options: [
          'λ = h / p',
          'λ = p / h',
          'λ = h × p'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Kvadrat operatorining xossasi nima?',
        options: [
          'Operator qiymati oʻzgarmaydi',
          'Fazoviy oʻzgarishlarni hosil qiladi',
          'Yigʻindi operator boʻladi'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Kvant mexanikada zarracha xususiyati qanday aniqlanadi?',
        options: [
          'Energiya va toʻlqin xossalari bilan',
          'Faqat toʻlqin uzunligi bilan',
          'Faqat impuls bilan'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Eynshteynning nisbiylik nazariyasida kvant tushunchasi qanday izohlanadi?',
        options: [
          'Yorugʻlik zarracha va toʻlqin sifatida harakat qiladi',
          'Faqat zarracha xossasiga ega',
          'Faqat toʻlqin xossasiga ega'
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Kvadrat toʻlqin funksiyasi qanday talqin qilinadi?',
        options: [
          'Zarrachani topish ehtimoli',
          'Zarrachani energiyasi',
          'Zarrachani impulsi'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Kvant superpozitsiya prinsipi nima?',
        options: [
          'Zarrachalar ikki yoki undan koʻp holatda boʻlishi mumkin',
          'Faqat bitta holatda boʻlishi mumkin',
          'Holat oʻzgarishi doimiydir'
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'Geyzenbergning noaniqlik prinsipida nimani oʻlchab boʻlmaydi?',
        options: [
          'Bir vaqtning oʻzida zarrachaning joylashuvi va impulsi',
          'Faqat zarrachaning energiyasi',
          'Faqat zarrachaning toʻlqin uzunligi'
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Kvant tunellash hodisasi qayerda qoʻllanadi?',
        options: [
          'Yadro reaksiyalarida',
          'Suv molekulalarida',
          'Faqat elektromagnit maydonlarda'
        ],
        correctAnswer: 0
      }
    ]
  }
  
  
  // ... qolgan 18 ta mavzuni davom ettirish
];


const Tests: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<TestSection | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [unlockedSections, setUnlockedSections] = useState<number[]>([1]);

  useEffect(() => {
    // Cookie dan ma'lumotlarni o'qish
    const savedProgress = localStorage.getItem('testProgress');
    if (savedProgress) {
      setUnlockedSections(JSON.parse(savedProgress));
    }
  }, []);

  const handleSectionSelect = (section: TestSection) => {
    if (!unlockedSections.includes(section.id)) {
      alert('Avvalgi bo`limni muvaffaqiyatli yakunlang!');
      return;
    }
    setSelectedSection(section);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedSection!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!selectedSection) return 0;
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === selectedSection.questions[index].correctAnswer
    );
    return (correctAnswers.length / selectedSection.questions.length) * 100;
  };

  const handleTestComplete = () => {
    const score = calculateScore();
    if (score >= 80) {
      const nextSectionId = selectedSection!.id + 1;
      if (!unlockedSections.includes(nextSectionId)) {
        const newUnlockedSections = [...unlockedSections, nextSectionId];
        setUnlockedSections(newUnlockedSections);
        localStorage.setItem('testProgress', JSON.stringify(newUnlockedSections));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Optika testlari
        </motion.h1>

        {!selectedSection ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testSections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${
                  unlockedSections.includes(section.id)
                    ? 'bg-blue-900/50 cursor-pointer'
                    : 'bg-gray-800/50 opacity-75'
                }`}
                onClick={() => handleSectionSelect(section)}
              >
                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      section.difficulty === 'Oson'
                        ? 'bg-green-900/50 text-green-300'
                        : section.difficulty === "O'rta"
                        ? 'bg-yellow-900/50 text-yellow-300'
                        : 'bg-red-900/50 text-red-300'
                    }`}
                  >
                    {section.difficulty}
                  </span>
                  {!unlockedSections.includes(section.id) && (
                    <span className="text-gray-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m0 0v2m0-2h2m-2 0H8"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto bg-blue-900/30 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Test natijalari</h2>
            <div className="text-4xl font-bold mb-4">
              {calculateScore().toFixed(0)}%
            </div>
            {calculateScore() >= 80 ? (
              <p className="text-green-400 mb-4">Tabriklaymiz! Siz testdan muvaffaqiyatli o'tdingiz!</p>
            ) : (
              <p className="text-red-400 mb-4">
                Kechirasiz, testdan o'tish uchun kamida 80% to'plashingiz kerak.
              </p>
            )}
            <button
              onClick={() => {
                handleTestComplete();
                setSelectedSection(null);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Bo'limlar ro'yxatiga qaytish
            </button>
          </motion.div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-900/30 p-8 rounded-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedSection.title}</h2>
                <span className="text-gray-300">
                  {currentQuestionIndex + 1} / {selectedSection.questions.length}
                </span>
              </div>

              <div className="mb-8">
                <p className="text-xl mb-6">
                  {selectedSection.questions[currentQuestionIndex].question}
                </p>
                <div className="space-y-4">
                  {selectedSection.questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full p-4 rounded-lg text-left transition-colors ${
                          userAnswers[currentQuestionIndex] === index
                            ? 'bg-blue-600'
                            : 'bg-blue-900/20 hover:bg-blue-800/30'
                        }`}
                      >
                        {option}
                      </motion.button>
                    )
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedSection(null)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Chiqish
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={userAnswers[currentQuestionIndex] === undefined}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    userAnswers[currentQuestionIndex] === undefined
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {currentQuestionIndex === selectedSection.questions.length - 1
                    ? 'Yakunlash'
                    : 'Keyingi savol'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tests;
