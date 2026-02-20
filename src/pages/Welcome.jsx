import { Link } from 'react-router-dom';
import { FaServer, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function Welcome() {
  const { t } = useLanguage();
  return (
    <section className="welcome-page">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-greeting">{t('welcome.greeting')}</span>
          <h1 className="hero-name">{t('welcome.name')}</h1>
          <p className="hero-title">{t('welcome.title')}</p>
          <p className="hero-description">{t('welcome.description')}</p>
          <div className="hero-actions">
            <Link to="/resume" className="btn btn-primary">{t('welcome.resumeBtn')}</Link>
            <Link to="/contact" className="btn btn-outline">{t('welcome.contactBtn')}</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">terminal</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> systemctl status nginx</p>
              <p className="output">● nginx.service - A high performance web server</p>
              <p className="output">&nbsp;&nbsp;Active: <span style={{color: 'var(--accent-green)'}}>active (running)</span></p>
              <p><span className="prompt">$</span> ip addr show eth0</p>
              <p className="output">inet 192.168.1.10/24 brd 192.168.1.255</p>
              <p><span className="prompt">$</span> ansible all -m ping</p>
              <p className="output">server1 | SUCCESS</p>
              <p className="output">server2 | SUCCESS</p>
              <p><span className="prompt">$</span> <span className="cursor">_</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="highlights">
        <h2 className="section-title">{t('welcome.whatIDo')}</h2>
        <div className="highlights-grid">
          <Link to="/devops" className="highlight-card">
            <FaServer className="highlight-icon" />
            <h3>{t('welcome.cardNetworks')}</h3>
            <p>{t('welcome.cardNetworksDesc')}</p>
          </Link>
          <Link to="/projects" className="highlight-card">
            <FaProjectDiagram className="highlight-icon" />
            <h3>{t('welcome.cardProjects')}</h3>
            <p>{t('welcome.cardProjectsDesc')}</p>
          </Link>
          <Link to="/resume" className="highlight-card">
            <FaFileAlt className="highlight-icon" />
            <h3>{t('welcome.cardResume')}</h3>
            <p>{t('welcome.cardResumeDesc')}</p>
          </Link>
          <Link to="/contact" className="highlight-card">
            <FaEnvelope className="highlight-icon" />
            <h3>{t('welcome.cardContact')}</h3>
            <p>{t('welcome.cardContactDesc')}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
