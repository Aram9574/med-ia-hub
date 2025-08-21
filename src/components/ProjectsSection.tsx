import { ArrowRight, Github, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/content';

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors = {
      'clinical-ml': 'bg-primary/10 text-primary',
      'hospital-analytics': 'bg-accent/10 text-accent',
      'interoperability': 'bg-success/10 text-success',
      'education': 'bg-warning/10 text-warning'
    };
    return colors[category as keyof typeof colors] || 'bg-secondary text-secondary-foreground';
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('projects.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="medical-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                  {t(`projects.category.${project.category}`)}
                </span>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-primary transition-colors">
                {project.title[language]}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description[language]}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.slice(0, 2).map((metric) => (
                  <span key={metric.label} className="metric-badge">
                    {metric.label}: {metric.value}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="tech-badge text-xs">+{project.stack.length - 3}</span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-2 pt-4 border-t border-card-border">
                {project.links.github && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.notebook && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.links.notebook} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Notebook
                    </a>
                  </Button>
                )}
                {project.links.paper && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-1" />
                      Paper
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/projects">
              {t('projects.viewall')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}