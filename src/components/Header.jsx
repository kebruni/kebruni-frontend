import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaServer, FaProjectDiagram, FaFileAlt, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const langLabels = { ru: 'RU', kz: 'KZ', en: 'EN' };
const langOrder = ['ru', 'kz', 'en'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (!langMenuOpen) return;
    const handler = () => setLangMenuOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [langMenuOpen]);

  const navItems = [
    { to: '/', icon: <FaHome />, label: t('nav.welcome') },
    { to: '/devops', icon: <FaServer />, label: t('nav.devops') },
    { to: '/projects', icon: <FaProjectDiagram />, label: t('nav.projects') },
    { to: '/resume', icon: <FaFileAlt />, label: t('nav.resume') },
    { to: '/contact', icon: <FaEnvelope />, label: t('nav.contact') },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">kebruni</span>
        </NavLink>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          {/* Language switcher */}
          <div className="lang-switcher" onClick={(e) => e.stopPropagation()}>
            <button
              className="lang-toggle"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-label="Change language"
            >
              <FaGlobe /> <span>{langLabels[lang]}</span>
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                {langOrder.map((l) => (
                  <button
                    key={l}
                    className={`lang-option${l === lang ? ' lang-active' : ''}`}
                    onClick={() => { setLang(l); setLangMenuOpen(false); }}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            title={dark ? t('theme.light') : t('theme.dark')}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
