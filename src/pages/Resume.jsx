import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaDownload, FaTrophy, FaLanguage, FaSpinner } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import { getResumeHtml } from '../utils/resumeHtml';

function Resume() {
  const { t, tRaw } = useLanguage();
  const [generating, setGenerating] = useState(false);

  const experience = tRaw('resume.jobs') || [];
  const education = tRaw('resume.edu') || [];
  const achievements = tRaw('resume.achievementItems') || [];
  const languages = tRaw('resume.langs') || [];
  const skills = tRaw('resume.skills') || {};

  const handleDownloadPdf = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const htmlString = getResumeHtml();
      const container = document.createElement('div');
      container.innerHTML = htmlString;
      container.style.cssText = 'position:fixed;left:0;top:0;width:210mm;z-index:-1;opacity:0;pointer-events:none;';
      document.body.appendChild(container);
      // let the browser lay out the content
      await new Promise((r) => setTimeout(r, 100));
      const opt = {
        margin: [8, 10, 8, 10],
        filename: 'Zharylkassynov_Nurbek_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          onclone: (clonedDoc) => {
            const el = clonedDoc.querySelector('.pdf-root');
            if (el) {
              el.parentElement.style.opacity = '1';
              el.parentElement.style.zIndex = '99999';
            }
          },
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };
      await html2pdf().set(opt).from(container.firstChild).save();
      document.body.removeChild(container);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section className="resume-page">
      <div className="page-header">
        <h1>{t('resume.heading')}</h1>
        <p className="page-subtitle">{t('resume.subtitle')}</p>
        <button className="btn btn-primary download-btn" onClick={handleDownloadPdf} disabled={generating}>
          {generating ? <FaSpinner className="spin-icon" /> : <FaDownload />} {generating ? '...' : t('resume.downloadPdf')}
        </button>
      </div>

      <div className="resume-pdf-content">
        <h2 className="section-title"><FaBriefcase className="section-icon" /> {t('resume.experience')}</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div key={job.role + job.company} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.role}</h3>
                  <span className="timeline-company">{job.company}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-list">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      <div className="resume-section">
        <h2 className="section-title"><FaGraduationCap className="section-icon" /> {t('resume.education')}</h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.degree} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <span className="timeline-company">{edu.school}</span>
                <span className="timeline-period">{edu.period}</span>
                {edu.details && <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title"><FaTrophy className="section-icon" /> {t('resume.achievements')}</h2>
        <div className="certifications-grid">
          {achievements.map((a) => (
            <div key={a.title} className="cert-card">
              <FaTrophy className="cert-icon" />
              <div>
                <strong>{a.title}</strong>
                <br />
                <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{a.org} — {a.field}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title"><FaLanguage className="section-icon" /> {t('resume.languagesTitle')}</h2>
        <div className="certifications-grid">
          {languages.map((lang) => (
            <div key={lang.name} className="cert-card">
              <span style={{fontWeight: 700, minWidth: '80px'}}>{lang.name}</span>
              <span style={{color: 'var(--text-secondary)'}}>{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">{t('resume.skillsTitle')}</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Resume;
