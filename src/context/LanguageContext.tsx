"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja' | 'zh' | 'ko' | 'es' | 'fr' | 'de' | 'it' | 'ar' | 'ar-sa' | 'ar-ae' | 'ar-eg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'welcome': 'Welcome to',
    'tagline': 'Advancing the Creative Industries on Technology, Production and Education',
    'view_projects': 'View Projects',
    'contact_us': 'Contact Us',
    'projects': 'Projects',
    'about': 'About',
    'contact': 'Contact',
    'copyright': '© 2025 Orion Productions K.K. All rights reserved.',
    'built_with': 'Built with 💻',
  },
  ja: {
    'welcome': 'ようこそ',
    'tagline': '革新的なソリューションを創造し、アイデアを実現します。',
    'view_projects': 'プロジェクトを見る',
    'contact_us': 'お問い合わせ',
    'projects': 'プロジェクト',
    'about': '会社概要',
    'contact': 'お問い合わせ',
    'copyright': '© 2025 Orion Productions 株式会社 All rights reserved.',
    'built_with': '💻 で構築',
  },
  zh: {
    'welcome': '欢迎来到',
    'tagline': '创造创新解决方案，让想法成为现实。',
    'view_projects': '查看项目',
    'contact_us': '联系我们',
    'projects': '项目',
    'about': '关于我们',
    'contact': '联系方式',
    'copyright': '© 2025 Orion Productions K.K. 版权所有。',
    'built_with': '使用 💻 构建',
  },
  ko: {
    'welcome': '환영합니다',
    'tagline': '혁신적인 솔루션을 만들고 아이디어를 실현합니다.',
    'view_projects': '프로젝트 보기',
    'contact_us': '문의하기',
    'projects': '프로젝트',
    'about': '회사 소개',
    'contact': '문의',
    'copyright': '© 2025 Orion Productions K.K. 모든 권리 보유.',
    'built_with': '💻로 제작됨',
  },
  es: {
    'welcome': 'Bienvenido a',
    'tagline': 'Creando soluciones innovadoras y dando vida a las ideas.',
    'view_projects': 'Ver Proyectos',
    'contact_us': 'Contáctenos',
    'projects': 'Proyectos',
    'about': 'Acerca de',
    'contact': 'Contacto',
    'copyright': '© 2025 Orion Productions K.K. Todos los derechos reservados.',
    'built_with': 'Construido con 💻',
  },
  fr: {
    'welcome': 'Bienvenue chez',
    'tagline': 'Créer des solutions innovantes et donner vie aux idées.',
    'view_projects': 'Voir les Projets',
    'contact_us': 'Contactez-nous',
    'projects': 'Projets',
    'about': 'À propos',
    'contact': 'Contact',
    'copyright': '© 2025 Orion Productions K.K. Tous droits réservés.',
    'built_with': 'Construit avec 💻',
  },
  de: {
    'welcome': 'Willkommen bei',
    'tagline': 'Innovative Lösungen schaffen und Ideen zum Leben erwecken.',
    'view_projects': 'Projekte ansehen',
    'contact_us': 'Kontakt',
    'projects': 'Projekte',
    'about': 'Über uns',
    'contact': 'Kontakt',
    'copyright': '© 2025 Orion Productions K.K. Alle Rechte vorbehalten.',
    'built_with': 'Erstellt mit 💻',
  },
  it: {
    'welcome': 'Benvenuto su',
    'tagline': 'Creare soluzioni innovative e dare vita alle idee.',
    'view_projects': 'Visualizza Progetti',
    'contact_us': 'Contattaci',
    'projects': 'Progetti',
    'about': 'Chi Siamo',
    'contact': 'Contatti',
    'copyright': '© 2025 Orion Productions K.K. Tutti i diritti riservati.',
    'built_with': 'Creato con 💻',
  },
  ar: {
    'welcome': 'مرحباً بكم في',
    'tagline': 'نبتكر حلولاً إبداعية ونحوّل الأفكار إلى واقع.',
    'view_projects': 'عرض المشاريع',
    'contact_us': 'اتصل بنا',
    'projects': 'المشاريع',
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'copyright': '© 2025 أوريون للإنتاج. جميع الحقوق محفوظة.',
    'built_with': 'تم البناء بواسطة 💻',
  },
  'ar-sa': {
    'welcome': 'مرحباً بكم في',
    'tagline': 'نقدم حلولاً مبتكرة ونحول الأفكار إلى واقع ملموس.',
    'view_projects': 'استعراض المشاريع',
    'contact_us': 'تواصل معنا',
    'projects': 'المشاريع',
    'about': 'عن الشركة',
    'contact': 'اتصل بنا',
    'copyright': '© 2025 شركة أوريون للإنتاج. جميع الحقوق محفوظة.',
    'built_with': 'تم التطوير بواسطة 💻',
  },
  'ar-ae': {
    'welcome': 'أهلاً بكم في',
    'tagline': 'نبتكر حلولاً إبداعية ونحول الأفكار إلى إنجازات.',
    'view_projects': 'تصفح المشاريع',
    'contact_us': 'تواصل معنا',
    'projects': 'المشاريع',
    'about': 'عن المؤسسة',
    'contact': 'اتصل بنا',
    'copyright': '© 2025 مؤسسة أوريون للإنتاج. كافة الحقوق محفوظة.',
    'built_with': 'تم الإنشاء باستخدام 💻',
  },
  'ar-eg': {
    'welcome': 'مرحباً بكم في',
    'tagline': 'نبتكر حلول إبداعية ونحول الأفكار لواقع ملموس.',
    'view_projects': 'عرض المشروعات',
    'contact_us': 'اتصل بنا',
    'projects': 'المشروعات',
    'about': 'عن الشركة',
    'contact': 'اتصل بنا',
    'copyright': '© 2025 شركة أوريون للإنتاج. جميع الحقوق محفوظة.',
    'built_with': 'تم التطوير بواسطة 💻',
  },
};
