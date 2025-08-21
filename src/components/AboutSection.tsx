import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo, skills } from '@/data/content';

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('about.title')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="animate-fade-in-up">
              <div className="medical-card">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-heading font-medium">A</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-center mb-4">{personalInfo.name}</h3>
                <p className="text-center text-primary font-medium mb-6">
                  {personalInfo.title[language]}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio[language]}
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Medical Skills */}
              <div className="medical-card">
                <h4 className="text-lg font-heading font-medium mb-4 text-primary">
                  {t('about.skills.medical')}
                </h4>
                <div className="space-y-2">
                  {skills.medical[language].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="medical-card">
                <h4 className="text-lg font-heading font-medium mb-4 text-accent">
                  {t('about.skills.technical')}
                </h4>
                <div className="space-y-2">
                  {skills.technical[language].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="medical-card">
                <h4 className="text-lg font-heading font-medium mb-4 text-warning">
                  {t('about.skills.tools')}
                </h4>
                <div className="space-y-2">
                  {skills.tools[language].map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}