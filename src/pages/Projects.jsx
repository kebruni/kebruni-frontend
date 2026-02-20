import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function Projects() {
  const { t, tRaw } = useLanguage();

  const projects = tRaw('projects.items') || [];
  const statusLabels = tRaw('projects.statusLabels') || {};

  const statusColors = {
    production: 'status-production',
    active: 'status-active',
    development: 'status-development',
    planning: 'status-planning',
  };

  return (
    <section className="projects-page">
      <div className="page-header">
        <h1>{t('projects.heading')}</h1>
        <p className="page-subtitle">{t('projects.subtitle')}</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className={`project-status ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
