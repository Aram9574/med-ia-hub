import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';

export function HeroSection() {
  const { language, t } = useLanguage();

  const techStack = [
    'Python', 'scikit-learn', 'pandas', 'PyTorch', 'SQL', 'HL7/FHIR'
  ];

  return (
    <section className="min-h-screen pt-16 hero-gradient flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up">
            <span className="medical-card px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {t('hero.badge.doctor')}
            </span>
            <span className="medical-card px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
              {t('hero.badge.master')}
            </span>
            <span className="medical-card px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
              {t('hero.badge.location')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            ALEJANDRO ZAKZUK
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="gradient-primary text-white border-0 hover:shadow-[var(--shadow-glow)]" asChild>
              <a href="#projects">
                {t('hero.cta.projects')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 w-5 h-5" />
                {t('hero.cta.contact')}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`/cv/cv-${language}.pdf`} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-5 h-5" />
                {t('hero.cta.cv')}
              </a>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-4">Stack tecnológico:</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}