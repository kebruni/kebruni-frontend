import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaServer, FaProjectDiagram, FaFileAlt, FaEnvelope, FaTelegram, FaGithub, FaClock } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const astanaTime = time.toLocaleTimeString('ru-RU', {
    timeZone: 'Asia/Almaty',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const navItems = [
    { to: '/', icon: <FaHome />, label: t('nav.welcome') },
    { to: '/devops', icon: <FaServer />, label: t('nav.devops') },
    { to: '/projects', icon: <FaProjectDiagram />, label: t('nav.projects') },
    { to: '/resume', icon: <FaFileAlt />, label: t('nav.resume') },
    { to: '/contact', icon: <FaEnvelope />, label: t('nav.contact') },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <NavLink to="/" className="footer-logo">
              <span className="logo-symbol">&lt;/&gt;</span>
              <span className="logo-text">kebruni</span>
            </NavLink>
            <div className="footer-clock">
              <FaClock className="footer-clock-icon" />
              <span className="footer-clock-time">{astanaTime}</span>
            </div>
            <span className="footer-clock-label">Астана, Казахстан</span>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t('footer.nav')}</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className="footer-link">
                  {item.icon} <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t('footer.social')}</h4>
            <div className="footer-links">
              <a href="https://t.me/kebruni" target="_blank" rel="noreferrer" className="footer-link"><FaTelegram /> Telegram</a>
              <a href="https://github.com/kebruni" target="_blank" rel="noreferrer" className="footer-link"><FaGithub /> GitHub</a>
              <a href="mailto:nurbeknurbekbooom@gmail.com" className="footer-link"><FaEnvelope /> Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.copy')}</span>
          <span className="footer-dot">·</span>
          <span className="footer-quote">{t('footer.quote')}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
