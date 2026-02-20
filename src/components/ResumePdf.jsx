import { forwardRef } from 'react';

const ResumePdf = forwardRef(function ResumePdf(_, ref) {
  return (
    <div ref={ref} className="pdf-resume">
      {/* ===== HEADER ===== */}
      <div className="pdf-header">
        <div className="pdf-header-main">
          <h1 className="pdf-name">Жарылқасынов Нұрбек Ғалымбекұлы</h1>
          <p className="pdf-meta">Мужчина, 19 лет, родился 6 апреля 2006</p>
        </div>
        <div className="pdf-contacts">
          <p><strong>Тел:</strong> +7 (707) 240-61-34 <span className="pdf-badge">предпочитаемый</span></p>
          <p><strong>Email:</strong> nurbeknurbekbooom@gmail.com</p>
          <p><strong>Telegram:</strong> @kebruni</p>
        </div>
        <div className="pdf-location">
          <p>Проживает: <strong>Караганда</strong></p>
          <p>Гражданство: Казахстан, есть разрешение на работу: Казахстан</p>
          <p>Не готов к переезду, готов к командировкам</p>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== DESIRED POSITION ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Желаемая должность и зарплата</h2>
        <h3 className="pdf-position">Системный администратор</h3>
        <div className="pdf-details">
          <p><strong>Специализации:</strong></p>
          <ul className="pdf-list">
            <li>DevOps-инженер</li>
            <li>Сетевой инженер</li>
            <li>Системный администратор</li>
          </ul>
          <p><strong>Тип занятости:</strong> полная занятость, частичная занятость, проектная работа / разовое задание</p>
          <p><strong>Формат работы:</strong> гибрид</p>
          <p><strong>Желательное время в пути до работы:</strong> не имеет значения</p>
          <p className="pdf-salary"><strong>250 000 ₸</strong> на руки</p>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== EXPERIENCE ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Опыт работы — 6 месяцев</h2>
        <div className="pdf-job">
          <div className="pdf-job-header">
            <div>
              <h3 className="pdf-company">Компьютерная Академия IT STEP</h3>
              <p className="pdf-industry">Образовательные учреждения · Бизнес-образование</p>
            </div>
            <span className="pdf-period">Июнь 2025 — Ноябрь 2025 · 6 месяцев</span>
          </div>
          <h4 className="pdf-role">Младший Системный Администратор</h4>
          <ul className="pdf-list">
            <li>Поддерживал работу рабочих компьютеров и серверов.</li>
            <li>Устанавливал и настраивал Windows и Linux.</li>
            <li>Настраивал локальную сеть и решал проблемы с подключением.</li>
            <li>Работал с виртуальными машинами в VMware и Proxmox.</li>
            <li>Настраивал удалённый доступ для администрирования (RDP, SSH).</li>
            <li>Помогал пользователям, устранял возникающие технические проблемы.</li>
            <li>Следил за состоянием оборудования и базовых серверных сервисов.</li>
          </ul>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== EDUCATION ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Образование</h2>
        <div className="pdf-edu">
          <p className="pdf-edu-level">Среднее специальное · 2026</p>
          <h3 className="pdf-company">Карагандинский высший политехнический колледж</h3>
          <p>9-3-ПОИС-22, Разработчик сайта</p>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== COURSES / ACHIEVEMENTS ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Повышение квалификации, курсы</h2>

        <div className="pdf-cert">
          <span className="pdf-cert-year">2025</span>
          <div>
            <p className="pdf-cert-title">Призёр Республиканское соревнование WorldSkills Kazakhstan 2025</p>
            <p className="pdf-cert-org">WorldSkills · Сетевое и системное администрирование</p>
          </div>
        </div>

        <div className="pdf-cert">
          <span className="pdf-cert-year">2025</span>
          <div>
            <p className="pdf-cert-title">Призёр Карагандинской области соревнование WorldSkills Kazakhstan 2025</p>
            <p className="pdf-cert-org">WorldSkills · Сетевое и системное администрирование</p>
          </div>
        </div>

        <div className="pdf-cert">
          <span className="pdf-cert-year">2024</span>
          <div>
            <p className="pdf-cert-title">Призёр Республиканское соревнование WorldSkills Kazakhstan 2024</p>
            <p className="pdf-cert-org">WorldSkills · Сетевое и системное администрирование</p>
          </div>
        </div>

        <div className="pdf-cert">
          <span className="pdf-cert-year">2024</span>
          <div>
            <p className="pdf-cert-title">Призёр Карагандинской области соревнование WorldSkills Kazakhstan 2024</p>
            <p className="pdf-cert-org">WorldSkills · Сетевое и системное администрирование</p>
          </div>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== LANGUAGES ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Знание языков</h2>
        <div className="pdf-langs">
          <p><strong>Казахский</strong> — Родной</p>
          <p><strong>Русский</strong> — C2 — В совершенстве</p>
          <p><strong>Английский</strong> — B1 — Средний</p>
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== SKILLS ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Навыки</h2>
        <div className="pdf-skills">
          {[
            'Настройка сетевых подключений', 'Администрирование сетевого оборудования',
            'Настройка ПК', 'Linux', 'Настройка серверов', 'Active Directory',
            'Администрирование серверов', 'Apache HTTP Server', 'Windows Server',
            'Администрирование серверов Linux', 'VMware', 'Debian',
            'Windows Server 2012', 'IPTables', 'IPSec', 'OpenVPN',
            'Firewall', 'SSL/TLS', 'LDAP', 'Bind', 'Ansible',
            'Bash', 'Cacti', 'DHCP', 'DNS', 'OSPF', 'Zabbix',
          ].map((s) => (
            <span key={s} className="pdf-skill-tag">{s}</span>
          ))}
        </div>
      </div>

      <hr className="pdf-divider" />

      {/* ===== ABOUT ===== */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Обо мне</h2>
        <p className="pdf-about">
          Ответственный, внимательный к деталям и всегда довожу начатое до конца.
          Увлекаюсь системным администрированием, люблю настраивать всё с нуля и искать
          простые решения сложных задач. Быстро обучаюсь новым технологиям, не боюсь
          сложностей и умею работать в команде. Участвовал в соревнованиях WorldSkills,
          где занял 1 место в области — это дало мне уверенность, дисциплину и желание
          развиваться дальше в IT. Открыт для новых знаний и всегда стремлюсь расти как
          специалист и как человек.
        </p>
      </div>
    </div>
  );
});

export default ResumePdf;
