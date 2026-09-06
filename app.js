const profile = {
name: 'Varun K R',
role: 'Data Analyst | Technical Consultant | Python | ML & Web | ERP Systems',
email: '[varununfolded@gmail.com](mailto:varununfolded@gmail.com)',
linkedin: 'linkedin.com/in/varun-k-r',
instagram: '@jolly_psycho___',

currentRole:
'Varun is currently working as a Data Analyst at Planvisage Software Solutions (August 2026–Present). He uses SQL and Python and supports the consulting phase of the company software by working through requirements, data and system workflows.',

previousRole:
'Varun previously worked as a Junior Associate Planning at Schneider Electric through an external contract from January to July 2026. His work included Supply Chain planning and ERP/industrial-process exposure.',

education: [
'B.E. Information Science — AMC Engineering College, Bengaluru',
'Diploma Mechanical Engineering — Sahyadri Polytechnic, Thirthahalli'
],

skills: [
'SQL',
'Python',
'Data Analysis',
'Machine Learning',
'Web development',
'HTML/CSS/JavaScript',
'React/Next.js concepts',
'Git/GitHub',
'Excel',
'ERP systems',
'SAP/Oracle exposure',
'Supply Chain processes',
'Technical consulting'
],

projects: [
[
'Terrorist Attack Prediction',
'Machine-learning predictive analysis using historical data, data cleaning, feature selection, model evaluation and attention to noisy data and overfitting.'
],
[
'OCR Document Extraction System',
'An ongoing document-processing system designed to convert hard-copy industry documents into structured, Excel-ready data.'
]
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
document.querySelectorAll('.reveal').forEach(el => {
el.classList.add('visible');
});
}, 80);

window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

/* =========================
LOGIN
========================= */

const guestBtn = document.getElementById('guestBtn');
const loginToggle = document.getElementById('loginToggle');
const loginForm = document.getElementById('loginForm');

if (guestBtn) {
guestBtn.addEventListener('click', enterPortfolio);
}

if (loginToggle && loginForm) {
loginToggle.addEventListener('click', () => {
loginForm.classList.toggle('hidden');

```
if (!loginForm.classList.contains('hidden')) {
  const username = document.getElementById('username');

  if (username) {
    setTimeout(() => username.focus(), 50);
  }
}
```

});
}

if (loginForm) {
loginForm.addEventListener('submit', event => {
event.preventDefault();

```
const username =
  (document.getElementById('username')?.value || '').trim();

const password =
  (document.getElementById('password')?.value || '').trim();

if (
  username.toLowerCase() === 'recruiter' &&
  password === 'race2026'
) {
  enterPortfolio();
} else {
  alert('Access denied. Demo login: recruiter / race2026');
}
```

});
}

/* =========================
THEME
========================= */

const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
themeBtn.addEventListener('click', () => {
document.body.classList.toggle('light');

```
localStorage.setItem(
  'varun-theme',
  document.body.classList.contains('light')
    ? 'light'
    : 'dark'
);
```

});

if (localStorage.getItem('varun-theme') === 'light') {
document.body.classList.add('light');
}
}

/* =========================
ZARA CHAT
========================= */

const chat = document.getElementById('chat');
const log = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');

function openChat() {
if (!chat) return;

chat.classList.add('open');

setTimeout(() => {
chatInput?.focus();
}, 150);
}

function closeChat() {
chat?.classList.remove('open');

// Stop ZARA if she is speaking
if ('speechSynthesis' in window) {
window.speechSynthesis.cancel();
}
}

/* =========================
ZARA ANSWER ENGINE
========================= */

function answer(question) {
const q = question.toLowerCase().trim();

/* GREETING */
if (
q === 'hi' ||
q === 'hello' ||
q === 'hey' ||
q.includes('hello zara') ||
q.includes('hi zara')
) {
return 'Hi! I’m ZARA, Varun’s portfolio assistant. Ask me anything about Varun’s career, skills, projects, education, consulting experience or how to contact him.';
}

/* WHO IS ZARA */
if (
q.includes('who are you') ||
q.includes('what are you') ||
q.includes('your name')
) {
return 'I’m ZARA, Varun’s portfolio assistant. I can tell you about Varun’s professional background, skills, projects, education and contact options.';
}

/* WHO IS VARUN */
if (
q.includes('who is varun') ||
q.includes('tell me about varun') ||
q.includes('about varun') ||
q === 'about'
) {
return 'Varun K R is a Data Analyst and Technical Consultant at Planvisage Software Solutions. His work involves SQL, Python, data analysis and supporting software consulting workflows. He also has experience in supply chain planning, ERP systems, machine learning and web development.';
}

/* CURRENT ROLE */
if (
q.includes('current role') ||
q.includes('current job') ||
q.includes('where does varun work') ||
q.includes('where is varun working') ||
q.includes('planvisage') ||
q.includes('what does varun do now') ||
q.includes('what is varun doing now')
) {
return profile.currentRole;
}

/* PREVIOUS EXPERIENCE */
if (
q.includes('schneider') ||
q.includes('previous role') ||
q.includes('previous job') ||
q.includes('previous experience') ||
q.includes('past experience') ||
q.includes('work experience') ||
q.includes('career')
) {
return profile.previousRole;
}

/* SKILLS */
if (
q.includes('skill') ||
q.includes('skills') ||
q.includes('technology') ||
q.includes('technologies') ||
q.includes('tech stack') ||
q.includes('stack') ||
q.includes('what does varun know') ||
q.includes('programming')
) {
return `Varun's core skills include ${profile.skills.join(', ')}.`;
}

/* SQL */
if (q.includes('sql')) {
return 'Yes. SQL is one of Varun’s core technical skills. He uses SQL for working with and filtering data as part of his data analysis and software consulting work.';
}

/* PYTHON */
if (q.includes('python')) {
return 'Yes. Python is one of Varun’s core technologies. He uses Python in data analysis and has machine-learning and web-development exposure.';
}

/* MACHINE LEARNING / AI */
if (
q.includes('machine learning') ||
q.includes('machine-learning') ||
q.includes('ml') ||
q.includes('ai') ||
q.includes('artificial intelligence')
) {
return 'Varun has Machine Learning experience, including a Terrorist Attack Prediction project involving historical data, data cleaning, feature selection and model evaluation.';
}

/* WEB DEVELOPMENT */
if (
q.includes('web development') ||
q.includes('web developer') ||
q.includes('frontend') ||
q.includes('html') ||
q.includes('css') ||
q.includes('javascript') ||
q.includes('react')
) {
return 'Varun has web-development experience with HTML, CSS and JavaScript, along with React and Next.js concepts.';
}

/* ERP */
if (
q.includes('erp') ||
q.includes('sap') ||
q.includes('oracle')
) {
return 'Varun has ERP-system exposure, including SAP and Oracle exposure, along with practical experience working around supply-chain and industrial processes.';
}

/* SUPPLY CHAIN */
if (
q.includes('supply chain') ||
q.includes('planning') ||
q.includes('replenishment') ||
q.includes('forecast')
) {
return 'Varun has Supply Chain planning experience from his work at Schneider Electric and also has exposure to planning processes and ERP-related workflows.';
}

/* PROJECTS */
if (
q.includes('project') ||
q.includes('projects') ||
q.includes('portfolio project')
) {
return profile.projects
.map(project => `${project[0]} — ${project[1]}`)
.join('\n');
}

/* TERRORIST ATTACK PROJECT */
if (
q.includes('terrorist attack') ||
q.includes('attack prediction') ||
q.includes('prediction project')
) {
return profile.projects[0][1];
}

/* OCR PROJECT */
if (
q.includes('ocr') ||
q.includes('document extraction') ||
q.includes('document project')
) {
return profile.projects[1][1];
}

/* EDUCATION */
if (
q.includes('education') ||
q.includes('degree') ||
q.includes('college') ||
q.includes('study') ||
q.includes('qualification')
) {
return profile.education.join('\n');
}

/* HIRING */
if (
q.includes('hire') ||
q.includes('hiring') ||
q.includes('why should i hire') ||
q.includes('why hire') ||
q.includes('fit for') ||
q.includes('good candidate') ||
q.includes('suitable')
) {
return 'Varun combines SQL and Python data analysis with Machine Learning, web development and ERP-system understanding. His current role also gives him practical technical-consulting exposure, where he works with requirements, data and software workflows.';
}

/* JOB / OPPORTUNITY */
if (
q.includes('job opportunity') ||
q.includes('job') ||
q.includes('opportunity') ||
q.includes('work with varun') ||
q.includes('collaborate')
) {
return 'If you would like to discuss an opportunity with Varun, please use the contact option in the portfolio. You can leave your details and message, and Varun can get back to you.';
}

/* PHONE NUMBER */
if (
q.includes('phone') ||
q.includes('mobile') ||
q.includes('mobile number') ||
q.includes('phone number') ||
q.includes('contact number') ||
q.includes('telephone') ||
q.includes('call varun') ||
q.includes('varun number')
) {
return 'Sure! Varun’s phone number is not displayed publicly here. Please fill out the contact form below with your details, and I’ll inform Varun so he can get back to you.';
}

/* EMAIL */
if (
q.includes('email') ||
q.includes('mail id') ||
q.includes('email id')
) {
return `You can contact Varun by email at ${profile.email}.`;
}

/* LINKEDIN */
if (q.includes('linkedin')) {
return `Varun's LinkedIn is ${profile.linkedin}.`;
}

/* INSTAGRAM */
if (
q.includes('instagram') ||
q.includes('insta')
) {
return `Varun's Instagram is ${profile.instagram}.`;
}

/* CONTACT */
if (
q.includes('contact') ||
q.includes('get in touch') ||
q.includes('reach varun') ||
q.includes('how can i contact')
) {
return `You can contact Varun through his email at ${profile.email}, LinkedIn at ${profile.linkedin}, or Instagram at ${profile.instagram}. If you need his phone number, please use the contact enquiry form.`;
}

/* LOCATION */
if (
q.includes('where is varun from') ||
q.includes('where does varun live') ||
q.includes('location')
) {
return 'Varun’s portfolio identifies his education and professional background in Bengaluru, but ZARA does not display a private residential address.';
}

/* THANK YOU */
if (
q.includes('thank you') ||
q.includes('thanks')
) {
return 'You’re welcome! If you want to know more about Varun, just ask me. 😊';
}

/* DEFAULT */
return 'I can tell you about Varun’s current role, Schneider Electric experience, SQL, Python, Machine Learning, web development, ERP and Supply Chain exposure, education, projects, hiring information or contact options. Try asking me something like “What does Varun do?”';
}

/* =========================
ZARA VOICE
========================= */

function getFemaleVoice() {
if (!('speechSynthesis' in window)) {
return null;
}

const voices = window.speechSynthesis.getVoices();

if (!voices.length) {
return null;
}

// Prefer English voices with names that are commonly female-style voices.
const preferredNames = [
'Samantha',
'Karen',
'Moira',
'Zira',
'Google UK English Female',
'Google US English Female',
'Microsoft Zira',
'Microsoft Jenny',
'Microsoft Aria',
'Microsoft Sonia',
'Female'
];

for (const preferred of preferredNames) {
const found = voices.find(voice =>
voice.name.toLowerCase().includes(preferred.toLowerCase())
);

```
if (found) {
  return found;
}
```

}

// Otherwise prefer an English voice.
const englishVoice = voices.find(voice =>
voice.lang.toLowerCase().startsWith('en')
);

return englishVoice || voices[0];
}

function speakZara(text, button) {
if (!('speechSynthesis' in window)) {
alert('Voice is not supported in this browser.');
return;
}

window.speechSynthesis.cancel();

const cleanText = text
.replace(/•/g, '')
.replace(/\n/g, '. ')
.trim();

const utterance = new SpeechSynthesisUtterance(cleanText);

const voice = getFemaleVoice();

if (voice) {
utterance.voice = voice;
utterance.lang = voice.lang || 'en-IN';
} else {
utterance.lang = 'en-IN';
}

utterance.rate = 0.95;
utterance.pitch = 1.08;
utterance.volume = 1;

if (button) {
button.textContent = '⏹ Stop ZARA';
}

utterance.onend = () => {
if (button) {
button.textContent = '🔊 Listen';
}
};

utterance.onerror = () => {
if (button) {
button.textContent = '🔊 Listen';
}
};

window.speechSynthesis.speak(utterance);
}

/* =========================
SEND MESSAGE
========================= */

function send(message) {
const q = message.trim();

if (!q || !log) return;

/* USER MESSAGE */

const userMessage = document.createElement('div');

userMessage.className = 'msg user';
userMessage.textContent = q;

log.appendChild(userMessage);

/* ZARA RESPONSE */

const answerText = answer(q);

const botMessage = document.createElement('div');

botMessage.className = 'msg bot';
botMessage.style.whiteSpace = 'pre-line';

/* RESPONSE TEXT */

const responseText = document.createElement('span');

responseText.textContent = answerText;

botMessage.appendChild(responseText);

/* VOICE BUTTON */

const voiceButton = document.createElement('button');

voiceButton.type = 'button';
voiceButton.className = 'voice-btn';
voiceButton.textContent = '🔊 Listen';
voiceButton.setAttribute(
'aria-label',
'Listen to ZARA response'
);

voiceButton.addEventListener('click', () => {
if (window.speechSynthesis.speaking) {
window.speechSynthesis.cancel();
voiceButton.textContent = '🔊 Listen';
} else {
speakZara(answerText, voiceButton);
}
});

botMessage.appendChild(voiceButton);

log.appendChild(botMessage);

log.scrollTop = log.scrollHeight;
}

/* =========================
CHAT CONTROLS
========================= */

document.getElementById('chatFab')?.addEventListener(
'click',
openChat
);

document.getElementById('chatClose')?.addEventListener(
'click',
closeChat
);

document.querySelectorAll('.open-chat').forEach(button => {
button.addEventListener('click', openChat);
});

/* =========================
CHAT FORM
========================= */

document.getElementById('chatForm')?.addEventListener(
'submit',
event => {
event.preventDefault();

```
const input = document.getElementById('chatInput');

if (!input) return;

send(input.value);

input.value = '';
```

}
);

/* =========================
QUICK QUESTIONS
========================= */

document.querySelectorAll('.quick button').forEach(button => {
button.addEventListener('click', () => {
send(button.dataset.q || '');
});
});

/* =========================
LOAD BROWSER VOICES
========================= */

if ('speechSynthesis' in window) {
window.speechSynthesis.onvoiceschanged = () => {
getFemaleVoice();
};
}

/* =========================
SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
},
{
threshold: 0.12
}
);

document.querySelectorAll('.reveal').forEach(el => {
observer.observe(el);
});
