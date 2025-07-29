import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import IntegrationsSection from './components/IntegrationsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .animate-blob {
        animation: blob 7s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .line-clamp-3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      
      html.dark {
        color-scheme: dark;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      html.dark ::-webkit-scrollbar-track {
        background: #374151;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3B82F6, #8B5CF6);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #2563EB, #7C3AED);
      }
    `;
    document.head.appendChild(style);

    // Welcome animation timer
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Welcome Animation */}
      {showWelcome && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
              BYT Digital
            </div>
            <div className="text-xl md:text-2xl opacity-90 animate-bounce">
              Yapay zekâ destekli çözümlerle tanışmaya hazır mısınız?
            </div>
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SolutionsSection />
          <IntegrationsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;