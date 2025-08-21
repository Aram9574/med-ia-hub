import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-heading text-xl font-medium">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Médico especializado en IA aplicada a salud, desarrollando soluciones basadas en datos para mejorar la atención médica.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Enlaces rápidos</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre mí
              </a>
              <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Proyectos
              </a>
              <a href="/publications" className="text-muted-foreground hover:text-foreground transition-colors">
                Publicaciones
              </a>
              <a href="/media" className="text-muted-foreground hover:text-foreground transition-colors">
                Media
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
              <a href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
                Legal
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">Conecta conmigo</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Email:</span> {personalInfo.email}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Ubicación:</span> {personalInfo.location}
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 {personalInfo.name}.</span>
            <span>{t('footer.rights')}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>en Madrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
}