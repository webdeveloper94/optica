import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Biz haqimizda
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Optica - fizika fanidan optika bo'limini o'rganish uchun yaratilgan zamonaviy ta'lim platformasi
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bizning maqsadimiz</h3>
              <p className="text-gray-600">
                O'quvchilar va talabalarning fizika fanidan optika bo'limini chuqur o'rganishlariga ko'maklashish, 
                ularning bilimlarini mustahkamlash va amaliy ko'nikmalarini oshirish.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Loyiha haqida</h3>
              <p className="text-gray-600">
                Ushbu loyiha 2024-yilda ishga tushirilgan bo'lib, zamonaviy web texnologiyalar yordamida yaratilgan. 
                Platforma doimiy ravishda yangilanib va takomillashtirib borilmoqda.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dastur yaratuvchilari</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">👨‍💻</span>
                </div>
                <h4 className="mt-4 text-lg font-medium text-gray-900">Qayumov Jamol</h4>
                <p className="text-gray-500">Full-stack Developer</p>
              </div>
              {/* Boshqa jamoa a'zolari uchun joylar */}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Biz bilan bog'lanish</h3>
          <div className="flex justify-center space-x-6">
            <a href="mailto:info@optica.uz" className="text-gray-600 hover:text-gray-900">
              Email: jamolqayumov@gmail.com
            </a>
            <a href="tel:+998901234567" className="text-gray-600 hover:text-gray-900">
              Tel: +998 91 310 99 49
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
