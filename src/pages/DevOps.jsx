import { FaLinux, FaNetworkWired } from 'react-icons/fa';
import { SiAnsible, SiApache, SiNginx, SiDebian, SiVmware, SiOpenvpn, SiProxmox } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';

function DevOps() {
  const { t, tRaw } = useLanguage();

  const techStack = [
    { category: t('devops.categories.os'), items: [
      { name: 'Linux', icon: <FaLinux />, level: 85 },
      { name: 'Debian', icon: <SiDebian />, level: 80 },
      { name: 'Windows Server', icon: <FaNetworkWired />, level: 85 },
    ]},
    { category: t('devops.categories.virt'), items: [
      { name: 'VMware', icon: <SiVmware />, level: 80 },
      { name: 'Proxmox', icon: <SiProxmox />, level: 75 },
    ]},
    { category: t('devops.categories.net'), items: [
      { name: 'DNS / DHCP / OSPF', icon: <FaNetworkWired />, level: 85 },
      { name: 'OpenVPN / IPSec', icon: <SiOpenvpn />, level: 80 },
      { name: 'Firewall / IPTables', icon: <FaNetworkWired />, level: 80 },
      { name: 'SSL/TLS', icon: <FaNetworkWired />, level: 75 },
    ]},
    { category: t('devops.categories.svc'), items: [
      { name: 'Active Directory / LDAP', icon: <FaNetworkWired />, level: 80 },
      { name: 'Apache HTTP Server', icon: <SiApache />, level: 75 },
      { name: 'Nginx', icon: <SiNginx />, level: 75 },
      { name: 'Bind (DNS)', icon: <FaNetworkWired />, level: 70 },
    ]},
    { category: t('devops.categories.auto'), items: [
      { name: 'Ansible', icon: <SiAnsible />, level: 70 },
      { name: 'Bash', icon: <FaLinux />, level: 80 },
      { name: 'Zabbix', icon: <FaNetworkWired />, level: 75 },
      { name: 'Cacti', icon: <FaNetworkWired />, level: 65 },
    ]},
  ];

  const practices = tRaw('devops.practiceItems') || [];

  return (
    <section className="devops-page">
      <div className="page-header">
        <h1>{t('devops.heading')}</h1>
        <p className="page-subtitle">{t('devops.subtitle')}</p>
      </div>

      <div className="tech-stack">
        <h2 className="section-title">{t('devops.techStack')}</h2>
        {techStack.map((group) => (
          <div key={group.category} className="tech-group">
            <h3 className="tech-group-title">{group.category}</h3>
            <div className="tech-items">
              {group.items.map((item) => (
                <div key={item.name} className="tech-item">
                  <div className="tech-item-header">
                    <span className="tech-icon">{item.icon}</span>
                    <span className="tech-name">{item.name}</span>
                    <span className="tech-level">{item.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="practices">
        <h2 className="section-title">{t('devops.practices')}</h2>
        <div className="practices-grid">
          {practices.map((practice) => (
            <div key={practice.title} className="practice-card">
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevOps;
