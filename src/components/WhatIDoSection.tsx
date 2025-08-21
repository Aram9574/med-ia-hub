import { Brain, BarChart3, Network, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhatIDoSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t('whatido.modeling.title'),
      description: t('whatido.modeling.description'),
      color: 'text-primary'
    },
    {
      icon: BarChart3,
      title: t('whatido.analytics.title'),
      description: t('whatido.analytics.description'),
      color: 'text-accent'
    },
    {
      icon: Network,
      title: t('whatido.interoperability.title'),
      description: t('whatido.interoperability.description'),
      color: 'text-success'
    },
    {
      icon: BookOpen,
      title: t('whatido.education.title'),
      description: t('whatido.education.description'),
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('whatido.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="medical-card text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-heading font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}