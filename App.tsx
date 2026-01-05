
import React, { useState } from 'react';
import { Section } from './types';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import AnimatedBackground from './components/Layout/AnimatedBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home onNavigate={setActiveSection} />;
      case 'about': 
      case 'skills': 
      case 'education': 
        return <About activeSubSection={activeSection} />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <AnimatedBackground />

      {/* Persistent Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-8">
            {renderSection()}
          </div>
        </div>
      </main>

      {/* Persistent Footer */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
