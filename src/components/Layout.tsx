import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      {/* Language selector bar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-10 items-center space-x-4">
            <select 
              className="bg-gray-900 text-gray-300 text-sm border-0 focus:ring-0"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              dir={language.startsWith('ar') ? 'rtl' : 'ltr'}
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
              <option value="ko">한국어</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="ar">العربية</option>
              <option value="ar-sa">العربية (السعودية)</option>
              <option value="ar-ae">العربية (الإمارات)</option>
              <option value="ar-eg">العربية (مصر)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center cursor-not-allowed">
                <span className="text-xl font-bold text-white">Orion Productions</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 cursor-not-allowed">
                Projects
              </span>
              <span className="text-gray-300 cursor-not-allowed">
                About
              </span>
              <span className="text-gray-300 cursor-not-allowed">
                Contact
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main dir={language.startsWith('ar') ? 'rtl' : 'ltr'}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Orion Productions K.K. All rights reserved.</p>
            <p className="mt-2">Built with 💻</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
