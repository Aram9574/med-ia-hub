import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.publications': 'Publicaciones',
    'nav.media': 'Media',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV',
    
    // Hero section
    'hero.title': 'Médico + IA aplicada a Salud',
    'hero.subtitle': 'Desarrollo soluciones basadas en datos para mejorar decisiones clínicas y flujos hospitalarios.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.cta.cv': 'Descargar CV',
    'hero.badge.doctor': 'Médico',
    'hero.badge.master': 'Máster en IA Sanitaria (2025–)',
    'hero.badge.location': 'Madrid, España',
    
    // What I do section
    'whatido.title': '¿Qué hago?',
    'whatido.modeling.title': 'Modelado Predictivo Clínico',
    'whatido.modeling.description': 'Desarrollo modelos de ML para predicción de riesgo, diagnóstico asistido y pronóstico clínico.',
    'whatido.analytics.title': 'Analítica Hospitalaria',
    'whatido.analytics.description': 'Optimización de recursos, gestión de flujos y mejora de eficiencia operativa.',
    'whatido.interoperability.title': 'Interoperabilidad de Datos',
    'whatido.interoperability.description': 'Estándares HL7/FHIR, integración de sistemas y gobierno del dato clínico.',
    'whatido.education.title': 'Divulgación Científica',
    'whatido.education.description': 'Educación sobre IA en salud, ética y validación de modelos clínicos.',
    
    // Projects section
    'projects.title': 'Proyectos Destacados',
    'projects.viewall': 'Ver todos los proyectos',
    'projects.category.clinical-ml': 'ML Clínico',
    'projects.category.hospital-analytics': 'Analítica Hospitalaria',
    'projects.category.interoperability': 'Interoperabilidad',
    'projects.category.education': 'Educación',
    
    // About section
    'about.title': 'Sobre mí',
    'about.skills.medical': 'Competencias Médicas',
    'about.skills.technical': 'Competencias Técnicas',
    'about.skills.tools': 'Herramientas',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos sobre oportunidades en salud digital',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.media': 'Media',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    
    // Hero section
    'hero.title': 'Physician + AI Applied to Healthcare',
    'hero.subtitle': 'I develop data-driven solutions to improve clinical decisions and hospital workflows.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Contact',
    'hero.cta.cv': 'Download CV',
    'hero.badge.doctor': 'Physician',
    'hero.badge.master': 'Master in Healthcare AI (2025–)',
    'hero.badge.location': 'Madrid, Spain',
    
    // What I do section
    'whatido.title': 'What I do',
    'whatido.modeling.title': 'Clinical Predictive Modeling',
    'whatido.modeling.description': 'I develop ML models for risk prediction, diagnostic assistance, and clinical prognosis.',
    'whatido.analytics.title': 'Hospital Analytics',
    'whatido.analytics.description': 'Resource optimization, workflow management, and operational efficiency improvement.',
    'whatido.interoperability.title': 'Data Interoperability',
    'whatido.interoperability.description': 'HL7/FHIR standards, system integration, and clinical data governance.',
    'whatido.education.title': 'Scientific Outreach',
    'whatido.education.description': 'Education on AI in healthcare, ethics, and clinical model validation.',
    
    // Projects section
    'projects.title': 'Featured Projects',
    'projects.viewall': 'View all projects',
    'projects.category.clinical-ml': 'Clinical ML',
    'projects.category.hospital-analytics': 'Hospital Analytics',
    'projects.category.interoperability': 'Interoperability',
    'projects.category.education': 'Education',
    
    // About section
    'about.title': 'About me',
    'about.skills.medical': 'Medical Expertise',
    'about.skills.technical': 'Technical Skills',
    'about.skills.tools': 'Tools',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's talk about digital health opportunities",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    
    // Footer
    'footer.rights': 'All rights reserved.'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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