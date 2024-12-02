import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Topics from './components/Topics';
import TopicDetail from './components/TopicDetail';
import Laboratory from './components/Laboratory';
import Problems from './components/Problems';
import Tests from './components/Tests';
import About from './components/About';
import OfflineAlert from './components/OfflineAlert';

const App: React.FC = () => {
  // Production muhitda /optica, development muhitda / ishlatiladi
  const basename = process.env.NODE_ENV === 'production' ? '/optica' : '/';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicId" element={<TopicDetail />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <OfflineAlert />
      </div>
    </Router>
  );
};

export default App;
