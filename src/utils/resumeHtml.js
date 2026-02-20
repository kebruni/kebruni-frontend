/**
 * Returns a self-contained HTML string for the PDF resume.
 * All styles are inline so html2pdf / html2canvas can capture them
 * regardless of the page's CSS or theme.
 */
export function getResumeHtml() {
  const skills = [
    'Настройка сетевых подключений', 'Администрирование сетевого оборудования',
    'Настройка ПК', 'Linux', 'Настройка серверов', 'Active Directory',
    'Администрирование серверов', 'Apache HTTP Server', 'Windows Server',
    'Администрирование серверов Linux', 'VMware', 'Debian',
    'Windows Server 2012', 'IPTables', 'IPSec', 'OpenVPN',
    'Firewall', 'SSL/TLS', 'LDAP', 'Bind', 'Ansible',
    'Bash', 'Cacti', 'DHCP', 'DNS', 'OSPF', 'Zabbix',
  ];

  return `
<div class="pdf-root" style="
  width:190mm;
  font-family:Arial,Helvetica,sans-serif;
  color:#1a1a1a;
  background:#fff;
  padding:0;
  font-size:11px;
  line-height:1.55;
">

  <!-- HEADER -->
  <div style="margin-bottom:6px">
    <h1 style="font-size:20px;font-weight:800;color:#111;margin:0 0 3px">Жарылқасынов Нұрбек Ғалымбекұлы</h1>
    <p style="font-size:12px;color:#555;margin:0">Мужчина, 19 лет, родился 6 апреля 2006</p>
  </div>

  <div style="margin-bottom:4px">
    <p style="margin:2px 0;font-size:11px"><b>Тел:</b> +7 (707) 240-61-34 — <i style="color:#888;font-size:10px">предпочитаемый способ связи</i></p>
    <p style="margin:2px 0;font-size:11px"><b>Email:</b> nurbeknurbekbooom@gmail.com</p>
    <p style="margin:2px 0;font-size:11px"><b>Telegram:</b> @kebruni</p>
  </div>

  <div style="margin-bottom:4px">
    <p style="margin:2px 0;font-size:11px">Проживает: <b>Караганда</b></p>
    <p style="margin:2px 0;font-size:11px;color:#444">Гражданство: Казахстан, есть разрешение на работу: Казахстан</p>
    <p style="margin:2px 0;font-size:11px;color:#444">Не готов к переезду, готов к командировкам</p>
  </div>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- DESIRED POSITION -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Желаемая должность и зарплата</h2>
  <h3 style="font-size:15px;font-weight:700;color:#e01030;margin:0 0 5px">Системный администратор</h3>
  <p style="margin:2px 0;font-size:11px"><b>Специализации:</b></p>
  <ul style="margin:3px 0 3px 18px;padding:0">
    <li style="margin-bottom:1px;font-size:11px">DevOps-инженер</li>
    <li style="margin-bottom:1px;font-size:11px">Сетевой инженер</li>
    <li style="margin-bottom:1px;font-size:11px">Системный администратор</li>
  </ul>
  <p style="margin:2px 0;font-size:11px"><b>Тип занятости:</b> полная занятость, частичная занятость, проектная работа / разовое задание</p>
  <p style="margin:2px 0;font-size:11px"><b>Формат работы:</b> гибрид</p>
  <p style="margin:2px 0;font-size:11px"><b>Желательное время в пути до работы:</b> не имеет значения</p>
  <p style="margin:5px 0;font-size:12px"><b>250 000 ₸</b> на руки</p>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- EXPERIENCE -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Опыт работы — 6 месяцев</h2>
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3px">
    <div>
      <h3 style="font-size:13px;font-weight:700;color:#111;margin:0">Компьютерная Академия IT STEP</h3>
      <p style="font-size:10px;color:#777;margin:1px 0 0">Образовательные учреждения · Бизнес-образование</p>
    </div>
    <span style="font-size:10px;color:#888;white-space:nowrap">Июнь 2025 — Ноябрь 2025 · 6 мес.</span>
  </div>
  <h4 style="font-size:11px;font-weight:700;color:#333;margin:0 0 3px">Младший Системный Администратор</h4>
  <ul style="margin:3px 0 3px 18px;padding:0">
    <li style="margin-bottom:1px;font-size:11px">Поддерживал работу рабочих компьютеров и серверов.</li>
    <li style="margin-bottom:1px;font-size:11px">Устанавливал и настраивал Windows и Linux.</li>
    <li style="margin-bottom:1px;font-size:11px">Настраивал локальную сеть и решал проблемы с подключением.</li>
    <li style="margin-bottom:1px;font-size:11px">Работал с виртуальными машинами в VMware и Proxmox.</li>
    <li style="margin-bottom:1px;font-size:11px">Настраивал удалённый доступ для администрирования (RDP, SSH).</li>
    <li style="margin-bottom:1px;font-size:11px">Помогал пользователям, устранял возникающие технические проблемы.</li>
    <li style="margin-bottom:1px;font-size:11px">Следил за состоянием оборудования и базовых серверных сервисов.</li>
  </ul>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- EDUCATION -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Образование</h2>
  <p style="font-size:11px;color:#888;margin:0 0 2px">Среднее специальное · 2026</p>
  <h3 style="font-size:13px;font-weight:700;color:#111;margin:0">Карагандинский высший политехнический колледж</h3>
  <p style="font-size:11px;margin:2px 0">9-3-ПОИС-22, Разработчик сайта</p>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- ACHIEVEMENTS -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Повышение квалификации, курсы</h2>

  <div style="display:flex;gap:10px;margin-bottom:6px;align-items:flex-start">
    <span style="font-weight:700;font-size:12px;color:#e01030;min-width:34px">2025</span>
    <div>
      <p style="font-size:11px;font-weight:600;margin:0 0 1px;color:#222">Призёр Республиканское соревнование WorldSkills Kazakhstan 2025</p>
      <p style="font-size:10px;color:#777;margin:0">WorldSkills · Сетевое и системное администрирование</p>
    </div>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:6px;align-items:flex-start">
    <span style="font-weight:700;font-size:12px;color:#e01030;min-width:34px">2025</span>
    <div>
      <p style="font-size:11px;font-weight:600;margin:0 0 1px;color:#222">Призёр Карагандинской области соревнование WorldSkills Kazakhstan 2025</p>
      <p style="font-size:10px;color:#777;margin:0">WorldSkills · Сетевое и системное администрирование</p>
    </div>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:6px;align-items:flex-start">
    <span style="font-weight:700;font-size:12px;color:#e01030;min-width:34px">2024</span>
    <div>
      <p style="font-size:11px;font-weight:600;margin:0 0 1px;color:#222">Призёр Республиканское соревнование WorldSkills Kazakhstan 2024</p>
      <p style="font-size:10px;color:#777;margin:0">WorldSkills · Сетевое и системное администрирование</p>
    </div>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:6px;align-items:flex-start">
    <span style="font-weight:700;font-size:12px;color:#e01030;min-width:34px">2024</span>
    <div>
      <p style="font-size:11px;font-weight:600;margin:0 0 1px;color:#222">Призёр Карагандинской области соревнование WorldSkills Kazakhstan 2024</p>
      <p style="font-size:10px;color:#777;margin:0">WorldSkills · Сетевое и системное администрирование</p>
    </div>
  </div>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- LANGUAGES -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Знание языков</h2>
  <p style="margin:2px 0;font-size:11px"><b>Казахский</b> — Родной</p>
  <p style="margin:2px 0;font-size:11px"><b>Русский</b> — C2 — В совершенстве</p>
  <p style="margin:2px 0;font-size:11px"><b>Английский</b> — B1 — Средний</p>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- SKILLS -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Навыки</h2>
  <div style="display:flex;flex-wrap:wrap;gap:4px">
    ${skills.map((s) => `<span style="display:inline-block;background:#f0f0f0;color:#333;padding:2px 7px;border-radius:4px;font-size:10px;font-weight:500">${s}</span>`).join('')}
  </div>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0"/>

  <!-- ABOUT -->
  <h2 style="font-size:13px;font-weight:800;color:#111;margin:0 0 5px;text-transform:uppercase;letter-spacing:0.03em">Обо мне</h2>
  <p style="font-size:11px;line-height:1.6;color:#333;margin:0">
    Ответственный, внимательный к деталям и всегда довожу начатое до конца.
    Увлекаюсь системным администрированием, люблю настраивать всё с нуля и искать
    простые решения сложных задач. Быстро обучаюсь новым технологиям, не боюсь
    сложностей и умею работать в команде. Участвовал в соревнованиях WorldSkills,
    где занял 1 место в области — это дало мне уверенность, дисциплину и желание
    развиваться дальше в IT. Открыт для новых знаний и всегда стремлюсь расти как
    специалист и как человек.
  </p>

</div>
  `.trim();
}
