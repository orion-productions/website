"use client";

import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">{t('welcome')}</span>
              <span className="block text-blue-400">Orion Productions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('tagline')}
            </p>
            <div className="mt-8 flex justify-center">
              <img src="/logo.png" alt="Orion Productions Logo" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
