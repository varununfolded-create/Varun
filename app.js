const profile = {
  name: 'Varun K R',
  role: 'Data Analyst | Technical Consultant | Python | ML & Web | ERP Systems',
  email: 'varununfolded@gmail.com',
  linkedin: 'linkedin.com/in/varun-k-r',
  instagram: '@jolly_psycho___',
  currentRole: 'Data Analyst at Planvisage Software Solutions (August 2026–Present). Uses SQL and Python and supports the consulting phase of the company software by working through requirements, data and system workflows.',
  previousRole: 'Junior Associate Planning at Schneider Electric through an external contract (January–July 2026), with Supply Chain planning and ERP/industrial-process exposure.',
  education: [
    'B.E. Information Science — AMC Engineering College, Bengaluru',
    'Diploma Mechanical Engineering — Sahyadri Polytechnic, Thirthahalli'
  ],
  skills: [
    'SQL', 'Python', 'Data Analysis', 'Machine Learning', 'Web development',
    'HTML/CSS/JavaScript', 'React/Next.js concepts', 'Git/GitHub', 'Excel',
    'ERP systems', 'SAP/Oracle exposure', 'Supply Chain processes', 'Technical consulting'
  ],
  projects: [
    ['Terrorist Attack Prediction', 'Machine-learning predictive analysis using historical data, data cleaning, feature selection, model evaluation and attention to noisy data and overfitting.'],
    ['OCR Document Extraction System', 'Ongoing document-processing system designed to convert hard-copy industry documents into structured, Excel-ready data.']
  ]
};

const gate = document.getElementById('gate');
const app = document.getElementById('app');

function enterPortfolio() {
  if (!gate || !app) return;
  gate.classList.add('hidden');
  app.classList.remove('hidden');
  document.body.classList.add('portfolio-entered');
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 80);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const guestBtn = document.getElementById('guestBtn');
const loginToggle = document.getElementById('loginToggle');
const loginForm = document.getElementById('loginForm');

if (guestBtn) guestBtn.addEventListener('click', enterPortfolio);

if (loginToggle && loginForm) {
  loginToggle.addEventListener('click', () => {
    loginForm.classList.toggle('hidden');
    if (!loginForm.classList.contains('hidden')) {
      const username = document.getElementById('username');
      if (username) setTimeout(() => username.focus(), 50);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = (document.getElementById('username')?.value || '').trim();
    const password = (document.getElementById('password')?.value || '').trim();

    if (username.toLowerCase() === 'recruiter' && password === 'race2026') {
      enterPortfolio();
    } else {
      alert('Access denied. Demo login: recruiter / race2026');
    }
  });
}

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('varun-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  if (localStorage.getItem('varun-theme') === 'light') {
    document.body.classList.add('light');
  }
}

const chat = document.getElementById('chat');
const log = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');

function openChat() {
  if (!chat) return;
  chat.classList.add('open');
  setTimeout(() => chatInput?.focus(), 150);
}

function closeChat() {
  chat?.classList.remove('open');
}

function answer(question) {
  const q = question.toLowerCase();

  if (q.includes('current role') || q.includes('current job') || q.includes('planvisage')) {
    return profile.currentRole;
  }
  if (q.includes('schneider') || q.includes('previous') || q.includes('experience')) {
    return profile.previousRole;
  }
  if (q.includes('skill') || q.includes('technology') || q.includes('stack')) {
    return `Varun's core stack includes ${profile.skills.join(', ')}.`;
  }
  if (q.includes('project')) {
    return profile.projects.map(project => `• ${project[0]} — ${project[1]}`).join('\n');
  }
  if (q.includes('education') || q.includes('degree') || q.includes('college')) {
    return profile.education.join('\n');
  }
  if (q.includes('hire') || q.includes('fit') || q.includes('why')) {
    return 'Varun combines SQL and Python data analysis with ML, web and ERP-system understanding. His current work also gives him practical exposure to technical consulting: translating requirements, data and user needs into software workflows.';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('linkedin') || q.includes('instagram')) {
    return `Email: ${profile.email}\nLinkedIn: ${profile.linkedin}\nInstagram: ${profile.instagram}`;
  }
  if (q.includes('about') || q.includes('who')) {
    return 'Varun K R is a Data Analyst and Technical Consultant at Planvisage Software Solutions, working with SQL and Python and supporting the consulting phase of software delivery.';
  }

  return 'I can answer about Varun’s current role, previous Schneider Electric experience, education, SQL/Python skills, projects, consulting work or contact details.';
}

function send(message) {
  const q = message.trim();
  if (!q || !log) return;

  const userMessage = document.createElement('div');
  userMessage.className = 'msg user';
  userMessage.textContent = q;
  log.appendChild(userMessage);

  const botMessage = document.createElement('div');
  botMessage.className = 'msg bot';
  botMessage.style.whiteSpace = 'pre-line';
  botMessage.textContent = answer(q);
  log.appendChild(botMessage);

  log.scrollTop = log.scrollHeight;
}

document.getElementById('chatFab')?.addEventListener('click', openChat);
document.getElementById('chatClose')?.addEventListener('click', closeChat);
document.querySelectorAll('.open-chat').forEach(button => {
  button.addEventListener('click', openChat);
});

document.getElementById('chatForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('chatInput');
  if (!input) return;
  send(input.value);
  input.value = '';
});

document.querySelectorAll('.quick button').forEach(button => {
  button.addEventListener('click', () => send(button.dataset.q || ''));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
