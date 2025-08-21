// Content data for Aram's Medical AI Portfolio

export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  category: 'clinical-ml' | 'hospital-analytics' | 'interoperability' | 'education';
  stack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    notebook?: string;
    paper?: string;
    demo?: string;
  };
  year: number;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: {
    es: string;
    en: string;
  };
  type: 'paper' | 'article' | 'poster' | 'thesis';
  date: string;
  url?: string;
  journal?: string;
}

export interface MediaContent {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  type: 'podcast' | 'video' | 'interview';
  url: string;
  date: string;
  platform: string;
}

export const personalInfo = {
  name: "Alejandro Zakzuk",
  title: {
    es: "Médico | IA aplicada a Salud | Interoperabilidad y Datos Clínicos",
    en: "Physician | AI Applied to Healthcare | Interoperability and Clinical Data"
  },
  location: "Madrid, España",
  email: "aram@example.com",
  linkedin: "https://www.linkedin.com/in/aram-profile",
  github: "https://github.com/Aram9574",
  bio: {
    es: "Médico (25 años) con enfoque en innovación en salud e IA. Formación en Medicina Familiar y Preventiva y Máster en Aplicación de la IA en Sanidad (2025–, Madrid). Integro analítica de datos y modelos de ML para mejorar decisiones clínicas, eficiencia operativa e interoperabilidad. Busco roles de salud digital, data clínica y consultoría tecnológica.",
    en: "Physician (25 years old) focused on health innovation and AI. Training in Family and Preventive Medicine and Master's in AI Application in Healthcare (2025–, Madrid). I integrate data analytics and ML models to improve clinical decisions, operational efficiency, and interoperability. Seeking roles in digital health, clinical data, and technology consulting."
  }
};

export const skills = {
  medical: {
    es: ["Medicina Familiar y Preventiva", "Medicina Basada en Evidencia", "Ética y Regulación en IA Sanitaria"],
    en: ["Family and Preventive Medicine", "Evidence-Based Medicine", "AI Ethics and Healthcare Regulation"]
  },
  technical: {
    es: ["Python", "scikit-learn", "pandas", "ML Clásico", "Fundamentos Deep Learning", "Evaluación Clínica (ROC/PR)", "MLOps Básico"],
    en: ["Python", "scikit-learn", "pandas", "Classical ML", "Deep Learning Fundamentals", "Clinical Evaluation (ROC/PR)", "Basic MLOps"]
  },
  tools: {
    es: ["Git", "Jupyter", "Google Colab", "VSCode", "Notion", "Conceptos HL7/FHIR"],
    en: ["Git", "Jupyter", "Google Colab", "VSCode", "Notion", "HL7/FHIR Concepts"]
  }
};

export const projects: Project[] = [
  {
    id: "cardiovascular-risk",
    title: {
      es: "Predicción de Riesgo Cardiovascular a 10 años",
      en: "10-Year Cardiovascular Risk Prediction"
    },
    description: {
      es: "Modelo de ML para clasificar riesgo de enfermedad coronaria a 10 años usando el dataset de Framingham con énfasis en seguridad clínica y calibración.",
      en: "ML model to classify 10-year coronary heart disease risk using Framingham dataset with emphasis on clinical safety and calibration."
    },
    category: "clinical-ml",
    stack: ["Python", "pandas", "scikit-learn", "matplotlib"],
    metrics: [
      { label: "AUC-ROC", value: "0.78" },
      { label: "Sensibilidad", value: "85%" },
      { label: "Especificidad", value: "72%" }
    ],
    links: {
      github: "https://github.com/Aram9574/cardiovascular-risk-ml",
      notebook: "https://github.com/Aram9574/cardiovascular-risk-ml/blob/main/analysis.ipynb"
    },
    year: 2024,
    featured: true
  },
  {
    id: "breast-cancer-classification",
    title: {
      es: "Clasificación de Cáncer de Mama",
      en: "Breast Cancer Classification"
    },
    description: {
      es: "Implementación de regresión logística para clasificación de tumores con análisis detallado de interpretabilidad y seguridad del paciente.",
      en: "Logistic regression implementation for tumor classification with detailed interpretability analysis and patient safety considerations."
    },
    category: "clinical-ml",
    stack: ["Python", "scikit-learn", "SHAP", "seaborn"],
    metrics: [
      { label: "AUC-ROC", value: "0.96" },
      { label: "Precisión", value: "94%" },
      { label: "Recall", value: "96%" }
    ],
    links: {
      github: "https://github.com/Aram9574/breast-cancer-ml",
      notebook: "https://github.com/Aram9574/breast-cancer-ml/blob/main/classification.ipynb"
    },
    year: 2024,
    featured: true
  },
  {
    id: "hospital-bed-occupancy",
    title: {
      es: "Predicción de Ocupación Hospitalaria",
      en: "Hospital Bed Occupancy Prediction"
    },
    description: {
      es: "Sistema de forecasting para optimizar la gestión de camas hospitalarias y reducir cancelaciones de cirugías programadas.",
      en: "Forecasting system to optimize hospital bed management and reduce scheduled surgery cancellations."
    },
    category: "hospital-analytics",
    stack: ["Python", "Prophet", "pandas", "Plotly"],
    metrics: [
      { label: "MAPE", value: "8.5%" },
      { label: "Reducción cancelaciones", value: "23%" },
      { label: "Eficiencia camas", value: "+15%" }
    ],
    links: {
      paper: "https://example.com/hospital-occupancy-paper.pdf"
    },
    year: 2024,
    featured: true
  }
];

export const publications: Publication[] = [
  {
    id: "ai-medical-ethics",
    title: {
      es: "Consideraciones Éticas en IA Aplicada a Medicina",
      en: "Ethical Considerations in AI Applied to Medicine"
    },
    type: "article",
    date: "2024-03-15",
    url: "https://linkedin.com/pulse/ai-medical-ethics-aram"
  },
  {
    id: "interoperability-challenges",
    title: {
      es: "Desafíos de Interoperabilidad en Sistemas de Salud",
      en: "Interoperability Challenges in Healthcare Systems"
    },
    type: "article",
    date: "2024-02-20",
    url: "https://linkedin.com/pulse/interoperability-challenges-aram"
  },
  {
    id: "ml-clinical-validation",
    title: {
      es: "Validación Clínica de Modelos de Machine Learning",
      en: "Clinical Validation of Machine Learning Models"
    },
    type: "article",
    date: "2024-01-10",
    url: "https://linkedin.com/pulse/ml-clinical-validation-aram"
  }
];

export const mediaContent: MediaContent[] = [
  {
    id: "media-podcast-1",
    title: {
      es: "Introducción a la IA en Medicina",
      en: "Introduction to AI in Medicine"
    },
    description: {
      es: "Primer episodio del podcast MedIA explorando las aplicaciones actuales de la inteligencia artificial en el sector salud.",
      en: "First episode of MedIA podcast exploring current applications of artificial intelligence in healthcare."
    },
    type: "podcast",
    url: "https://spotify.com/episode/media-intro-ai-medicine",
    date: "2024-03-01",
    platform: "Spotify"
  },
  {
    id: "media-podcast-2",
    title: {
      es: "Ética y Seguridad en IA Médica",
      en: "Ethics and Safety in Medical AI"
    },
    description: {
      es: "Segundo episodio discutiendo los aspectos éticos y de seguridad fundamentales en el desarrollo de IA para medicina.",
      en: "Second episode discussing fundamental ethical and safety aspects in AI development for medicine."
    },
    type: "podcast",
    url: "https://spotify.com/episode/media-ethics-safety",
    date: "2024-03-15",
    platform: "Spotify"
  }
];