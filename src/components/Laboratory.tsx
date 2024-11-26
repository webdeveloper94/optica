import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Experiment {
  id: number;
  title: string;
  description: string;
  component: React.FC<ExperimentProps>;
}

interface ExperimentProps {
  setResult: (result: string) => void;
}

const LightDispersionExperiment: React.FC<ExperimentProps> = ({ setResult }) => {
  const [angle, setAngle] = useState(45);
  const [wavelength, setWavelength] = useState(550);

  const calculateDispersion = () => {
    const n = 1.5 + (400 - wavelength) * 0.0001;
    const theta2 = Math.asin(Math.sin(angle * Math.PI / 180) / n) * 180 / Math.PI;
    setResult(`Sinish burchagi: ${theta2.toFixed(2)}°\nSindirish ko'rsatkichi: ${n.toFixed(4)}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32">Tushish burchagi:</label>
        <input
          type="range"
          min="0"
          max="90"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{angle}°</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">To'lqin uzunligi:</label>
        <input
          type="range"
          min="380"
          max="750"
          value={wavelength}
          onChange={(e) => setWavelength(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{wavelength} nm</span>
      </div>
      <div className="relative h-60 bg-gray-900 rounded-lg overflow-hidden">
        <motion.div
          className="absolute w-2 bg-white"
          style={{
            height: '100%',
            left: '30%',
            top: 0,
            transformOrigin: 'center',
            rotate: `${angle}deg`,
            background: `hsl(${(wavelength - 380) * 0.8}, 100%, 50%)`
          }}
        />
        <motion.div
          className="absolute w-2 bg-white"
          style={{
            height: '100%',
            left: '30%',
            top: 0,
            transformOrigin: 'center',
            rotate: `${Math.asin(Math.sin(angle * Math.PI / 180) / (1.5 + (400 - wavelength) * 0.0001)) * 180 / Math.PI}deg`,
            background: `hsl(${(wavelength - 380) * 0.8}, 100%, 50%)`
          }}
        />
      </div>
      <button
        onClick={calculateDispersion}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Natijani hisoblash
      </button>
    </div>
  );
};

const InterferenceExperiment: React.FC<ExperimentProps> = ({ setResult }) => {
  const [slitDistance, setSlitDistance] = useState(0.5);
  const [screenDistance, setScreenDistance] = useState(1);
  const [wavelength, setWavelength] = useState(500);

  const calculateInterference = () => {
    const maxDistance = (wavelength * 1e-9 * screenDistance) / (slitDistance * 1e-3);
    setResult(`Birinchi maksimum masofasi: ${(maxDistance * 1000).toFixed(2)} mm`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32">Tirqishlar orasidagi masofa:</label>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={slitDistance}
          onChange={(e) => setSlitDistance(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{slitDistance} mm</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">Ekrangacha masofa:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={screenDistance}
          onChange={(e) => setScreenDistance(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{screenDistance} m</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">To'lqin uzunligi:</label>
        <input
          type="range"
          min="380"
          max="750"
          value={wavelength}
          onChange={(e) => setWavelength(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{wavelength} nm</span>
      </div>
      <div className="relative h-60 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute left-1/4 top-1/2 w-4 h-4 bg-blue-500 rounded-full" />
        <div 
          className="absolute"
          style={{
            left: '25%',
            top: '50%',
            width: '75%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.1) 100%)'
          }}
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20"
            style={{
              left: `${75 + (i * 10)}%`,
              top: '50%',
              transform: 'translateY(-50%)',
              background: `hsl(${(wavelength - 380) * 0.8}, 100%, ${50 - i * 10}%)`
            }}
          />
        ))}
      </div>
      <button
        onClick={calculateInterference}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Natijani hisoblash
      </button>
    </div>
  );
};

const PolarizationExperiment: React.FC<ExperimentProps> = ({ setResult }) => {
  const [angle, setAngle] = useState(0);
  const [intensity, setIntensity] = useState(100);

  const calculatePolarization = () => {
    const resultIntensity = intensity * Math.cos(angle * Math.PI / 180) ** 2;
    setResult(`Chiquvchi yorug'lik intensivligi: ${resultIntensity.toFixed(1)}%`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32">Polyarizator burchagi:</label>
        <input
          type="range"
          min="0"
          max="90"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{angle}°</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">Boshlang'ich intensivlik:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{intensity}%</span>
      </div>
      <div className="relative h-60 bg-gray-900 rounded-lg overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/2 w-4 h-4 bg-blue-500 rounded-full"
          style={{
            opacity: intensity / 100
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border-4 border-blue-500 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            opacity: 0.5
          }}
        />
        <motion.div
          className="absolute right-1/4 top-1/2 w-4 h-4 bg-blue-500 rounded-full"
          style={{
            opacity: (intensity / 100) * Math.cos(angle * Math.PI / 180) ** 2
          }}
        />
      </div>
      <button
        onClick={calculatePolarization}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Natijani hisoblash
      </button>
    </div>
  );
};

const RefractionExperiment: React.FC<ExperimentProps> = ({ setResult }) => {
  const [angle, setAngle] = useState(45);
  const [refractionIndex, setRefractionIndex] = useState(1.5);

  const calculateRefraction = () => {
    const theta1 = angle * Math.PI / 180;
    const theta2 = Math.asin(Math.sin(theta1) / refractionIndex) * 180 / Math.PI;
    setResult(`Sinish burchagi: ${theta2.toFixed(2)}°\nSindirish ko'rsatkichi: ${refractionIndex}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32">Tushish burchagi:</label>
        <input
          type="range"
          min="0"
          max="89"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{angle}°</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">Sindirish ko'rsatkichi:</label>
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={refractionIndex}
          onChange={(e) => setRefractionIndex(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{refractionIndex}</span>
      </div>
      <div className="relative h-60 bg-gray-900 rounded-lg overflow-hidden">
        {/* Normal chiziq */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 opacity-50" />
        
        {/* Tushuvchi nur */}
        <motion.div
          className="absolute w-2"
          style={{
            height: '100%',
            left: '50%',
            top: 0,
            transformOrigin: 'center',
            rotate: `${-angle}deg`,
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(59,130,246,1) 50%)'
          }}
        />
        
        {/* Singan nur */}
        <motion.div
          className="absolute w-2"
          style={{
            height: '100%',
            left: '50%',
            top: '50%',
            transformOrigin: 'top',
            rotate: `${Math.asin(Math.sin(angle * Math.PI / 180) / refractionIndex) * 180 / Math.PI}deg`,
            background: 'linear-gradient(180deg, rgba(59,130,246,1) 0%, rgba(59,130,246,0.3) 100%)'
          }}
        />

        {/* Muhit chegarasi */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-600" />
      </div>
      <button
        onClick={calculateRefraction}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Natijani hisoblash
      </button>
    </div>
  );
};

const LensImageExperiment: React.FC<ExperimentProps> = ({ setResult }) => {
  const [focalLength, setFocalLength] = useState(20);
  const [objectDistance, setObjectDistance] = useState(40);
  const [objectHeight, setObjectHeight] = useState(10);

  const calculateImage = () => {
    // Linza formulasi: 1/f = 1/u + 1/v
    const f = focalLength;
    const u = objectDistance;
    const v = (u * f) / (u - f);
    const magnification = -v / u;
    const imageHeight = objectHeight * magnification;

    setResult(
      `Tasvir masofasi: ${Math.abs(v).toFixed(1)} sm\n` +
      `Tasvir balandligi: ${Math.abs(imageHeight).toFixed(1)} sm\n` +
      `Kattalashtirish: ${Math.abs(magnification).toFixed(2)} marta\n` +
      `Tasvir turi: ${v > 0 ? 'Haqiqiy' : 'Mavhum'}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-32">Fokus masofa:</label>
        <input
          type="range"
          min="5"
          max="50"
          value={focalLength}
          onChange={(e) => setFocalLength(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{focalLength} sm</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">Predmet masofasi:</label>
        <input
          type="range"
          min="10"
          max="100"
          value={objectDistance}
          onChange={(e) => setObjectDistance(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{objectDistance} sm</span>
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-32">Predmet balandligi:</label>
        <input
          type="range"
          min="1"
          max="20"
          value={objectHeight}
          onChange={(e) => setObjectHeight(Number(e.target.value))}
          className="w-full"
        />
        <span className="w-16">{objectHeight} sm</span>
      </div>
      <div className="relative h-60 bg-gray-900 rounded-lg overflow-hidden">
        {/* Optik o'q */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-600 opacity-50" />
        
        {/* Linza */}
        <div className="absolute left-1/2 top-1/4 bottom-1/4 w-1 bg-blue-500 rounded-full transform -translate-x-1/2" />
        
        {/* Fokus nuqtalari */}
        <motion.div
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          style={{
            left: `calc(50% + ${focalLength}px)`,
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          style={{
            left: `calc(50% - ${focalLength}px)`,
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Predmet */}
        <motion.div
          className="absolute w-1 bg-green-500"
          style={{
            height: `${objectHeight * 2}px`,
            left: `calc(50% - ${objectDistance}px)`,
            bottom: '50%'
          }}
        />
        
        {/* Tasvir */}
        {objectDistance !== focalLength && (
          <motion.div
            className="absolute w-1"
            style={{
              height: `${Math.abs(objectHeight * (-objectDistance * focalLength) / (objectDistance - focalLength) / objectDistance) * 2}px`,
              left: `calc(50% + ${(objectDistance * focalLength) / (objectDistance - focalLength)}px)`,
              bottom: objectDistance > focalLength ? '50%' : 'auto',
              top: objectDistance > focalLength ? 'auto' : '50%',
              backgroundColor: objectDistance > focalLength ? '#34D399' : '#34D39980'
            }}
          />
        )}
      </div>
      <button
        onClick={calculateImage}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Natijani hisoblash
      </button>
    </div>
  );
};

const experiments: Experiment[] = [
  {
    id: 1,
    title: "Yorug'lik dispersiyasi",
    description: "Yorug'likning to'lqin uzunligiga qarab sinishini o'rganish",
    component: LightDispersionExperiment
  },
  {
    id: 2,
    title: "Yung interferensiyasi",
    description: "Ikki tirqishli interferensiya hodisasini kuzatish",
    component: InterferenceExperiment
  },
  {
    id: 3,
    title: "Yorug'lik polyarizatsiyasi",
    description: "Yorug'lik to'lqinlarining polyarizatsiyasini o'rganish",
    component: PolarizationExperiment
  },
  {
    id: 4,
    title: "Yorug'lik sinishi",
    description: "Yorug'likning bir muhitdan ikkinchisiga o'tishini o'rganish",
    component: RefractionExperiment
  },
  {
    id: 5,
    title: "Linzada tasvir",
    description: "Yig'uvchi linzada tasvirning hosil bo'lishini o'rganish",
    component: LensImageExperiment
  }
];

const Laboratory: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [result, setResult] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Virtual laboratoriya
        </motion.h1>

        {!selectedExperiment ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((experiment) => (
              <motion.div
                key={experiment.id}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-900/30 p-6 rounded-xl cursor-pointer"
                onClick={() => setSelectedExperiment(experiment)}
              >
                <h2 className="text-xl font-bold mb-2">{experiment.title}</h2>
                <p className="text-gray-300">{experiment.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-900/30 p-8 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedExperiment.title}</h2>
                <button
                  onClick={() => {
                    setSelectedExperiment(null);
                    setResult("");
                  }}
                  className="text-gray-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <selectedExperiment.component setResult={setResult} />

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gray-800 rounded-lg"
                >
                  <pre className="whitespace-pre-wrap">{result}</pre>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laboratory;
