import { FaEnvelope, FaTelegram, FaGithub, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaBriefcase, FaLanguage, FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function Contact() {
  const { t, tRaw } = useLanguage();

  const contacts = [
    { icon: <FaEnvelope />, label: t('contact.labels.email'), value: 'nurbeknurbekbooom@gmail.com', href: 'mailto:nurbeknurbekbooom@gmail.com' },
    { icon: <FaTelegram />, label: t('contact.labels.telegram'), value: '@kebruni', href: 'https://t.me/kebruni', preferred: true },
    { icon: <FaGithub />, label: t('contact.labels.github'), value: 'github.com/kebruni', href: 'https://github.com/kebruni' },
    { icon: <FaMapMarkerAlt />, label: t('contact.labels.location'), value: t('contact.locationValue'), href: null },
  ];

  const facts = tRaw('contact.facts');
  const quickFacts = [
    { icon: <FaClock />, label: facts.timezone.label, value: facts.timezone.value },
    { icon: <FaBriefcase />, label: facts.exp.label, value: facts.exp.value },
    { icon: <FaLanguage />, label: facts.langs.label, value: facts.langs.value },
    { icon: <FaGlobe />, label: facts.format.label, value: facts.format.value },
  ];

  return (
    <section className="contact-page">
      <div className="page-header">
        <h1>{t('contact.heading')}</h1>
        <p className="page-subtitle">{t('contact.subtitle')}</p>
      </div>

      {/* Статус доступности */}
      <div className="contact-status-banner">
        <span className="status-dot status-dot--available"></span>
        <span className="status-text">{t('contact.statusText')}</span>
      </div>

      <div className="contact-grid">
        {/* Контактные ссылки */}
        <div className="contact-info">
          <h2>{t('contact.findMe')}</h2>
          <div className="contact-links">
            {contacts.map((contact) => (
              <div key={contact.label} className={`contact-item${contact.preferred ? ' contact-item--preferred' : ''}`}>
                <span className="contact-icon">{contact.icon}</span>
                <div>
                  <span className="contact-label">
                    {contact.label}
                    {contact.preferred && <span className="preferred-badge">{t('contact.preferred')}</span>}
                  </span>
                  {contact.href ? (
                    <a href={contact.href} target="_blank" rel="noreferrer" className="contact-value">
                      {contact.value}
                    </a>
                  ) : (
                    <span className="contact-value">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Быстрые факты + CTA */}
        <div className="contact-sidebar">
          <div className="quick-facts-card">
            <h2>{t('contact.aboutMe')}</h2>
            <div className="quick-facts-list">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="quick-fact">
                  <span className="quick-fact-icon">{fact.icon}</span>
                  <div>
                    <span className="quick-fact-label">{fact.label}</span>
                    <span className="quick-fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-cta-card">
            <FaCheckCircle className="cta-icon" />
            <h3>{t('contact.quickResponse')}</h3>
            <p>{t('contact.quickResponseDesc')}</p>
            <a href="https://t.me/kebruni" target="_blank" rel="noreferrer" className="btn btn-primary cta-btn">
              <FaTelegram /> {t('contact.telegramBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
