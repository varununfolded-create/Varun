const profile = {
  name: 'Varun K R',

  role:
    'Data Analyst | Technical Consultant | Python | ML & Web | ERP Systems',

  email:
    'varununfolded@gmail.com',

  linkedin:
    'linkedin.com/in/varun-k-r',

  instagram:
    '@the.varunraj',

  currentRole:
    'Varun is currently working as a Data Analyst at Planvisage Software Solutions (August 2026–Present). He uses SQL and Python and supports the consulting phase of the company software by working through requirements, data and system workflows.',

  previousRole:
    'Varun previously worked as a Junior Associate Planning at Schneider Electric through an external contract from January to July 2026. His work included Supply Chain planning and ERP and industrial-process exposure.',

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


/* =========================================================
   PORTFOLIO ACCESS
========================================================= */

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


/* =========================================================
   LOGIN
========================================================= */

const guestBtn = document.getElementById('guestBtn');
const loginToggle = document.getElementById('loginToggle');
const loginForm = document.getElementById('loginForm');


if (guestBtn) {

  guestBtn.addEventListener('click', enterPortfolio);

}


if (loginToggle && loginForm) {

  loginToggle.addEventListener('click', () => {

    loginForm.classList.toggle('hidden');

    if (!loginForm.classList.contains('hidden')) {

      const username =
        document.getElementById('username');

      if (username) {

        setTimeout(() => {
          username.focus();
        }, 50);

      }

    }

  });

}


if (loginForm) {

  loginForm.addEventListener('submit', event => {

    event.preventDefault();

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

      alert(
        'Access denied. Demo login: recruiter / race2026'
      );

    }

  });

}


/* =========================================================
   THEME
========================================================= */

const themeBtn =
  document.getElementById('themeBtn');


if (themeBtn) {

  themeBtn.addEventListener('click', () => {

    document.body.classList.toggle('light');

    localStorage.setItem(
      'varun-theme',
      document.body.classList.contains('light')
        ? 'light'
        : 'dark'
    );

  });


  if (
    localStorage.getItem('varun-theme') === 'light'
  ) {

    document.body.classList.add('light');

  }

}


/* =========================================================
   ZARA CHAT
========================================================= */

const chat =
  document.getElementById('chat');

const log =
  document.getElementById('chatLog');

const chatInput =
  document.getElementById('chatInput');


function openChat() {

  if (!chat) return;

  chat.classList.add('open');

  setTimeout(() => {

    chatInput?.focus();

  }, 150);

}


function closeChat() {

  chat?.classList.remove('open');


  if ('speechSynthesis' in window) {

    window.speechSynthesis.cancel();

  }

}


/* =========================================================
   SHOW CONTACT FORM
========================================================= */

function showZaraContactForm() {

  const form =
    document.getElementById('zaraContactForm');

  if (!form) return;

  form.classList.remove('hidden');

  setTimeout(() => {

    form.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });

  }, 100);

}


/* =========================================================
   ZARA ANSWER ENGINE
========================================================= */

function answer(question) {

  const q =
    question.toLowerCase().trim();


  /* -----------------------------------------
     GREETING
  ----------------------------------------- */

  if (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.includes('hello zara') ||
    q.includes('hi zara') ||
    q.includes('hey zara')
  ) {

    return (
      'Hi! I’m ZARA, Varun’s portfolio assistant. ' +
      'Ask me anything about Varun’s career, skills, ' +
      'projects, education, consulting experience or ' +
      'how to contact him.'
    );

  }


  /* -----------------------------------------
     ZARA IDENTITY
  ----------------------------------------- */

  if (
    q.includes('who are you') ||
    q.includes('what are you') ||
    q.includes('your name') ||
    q.includes('who is zara')
  ) {

    return (
      'I’m ZARA, Varun’s portfolio assistant. ' +
      'I can tell you about Varun’s professional background, ' +
      'skills, projects, education, experience and contact options.'
    );

  }


  /* -----------------------------------------
     WHO IS VARUN
  ----------------------------------------- */

  if (
    q.includes('who is varun') ||
    q.includes('tell me about varun') ||
    q.includes('about varun') ||
    q === 'about' ||
    q.includes('introduce varun')
  ) {

    return (
      'Varun K R is a Data Analyst and Technical Consultant ' +
      'at Planvisage Software Solutions. His work involves ' +
      'SQL, Python, data analysis and supporting software ' +
      'consulting workflows. He also has experience in Supply ' +
      'Chain planning, ERP systems, Machine Learning and web development.'
    );

  }


  /* -----------------------------------------
     CURRENT ROLE
  ----------------------------------------- */

  if (
    q.includes('current role') ||
    q.includes('current job') ||
    q.includes('current position') ||
    q.includes('where does varun work') ||
    q.includes('where is varun working') ||
    q.includes('planvisage') ||
    q.includes('what does varun do now') ||
    q.includes('what is varun doing now') ||
    q.includes('what does he do now')
  ) {

    return profile.currentRole;

  }


  /* -----------------------------------------
     PREVIOUS EXPERIENCE
  ----------------------------------------- */

  if (
    q.includes('schneider') ||
    q.includes('previous role') ||
    q.includes('previous job') ||
    q.includes('previous experience') ||
    q.includes('past experience') ||
    q.includes('work experience') ||
    q.includes('career') ||
    q.includes('experience')
  ) {

    return profile.previousRole;

  }


  /* -----------------------------------------
     SKILLS
  ----------------------------------------- */

  if (
    q.includes('skill') ||
    q.includes('skills') ||
    q.includes('technology') ||
    q.includes('technologies') ||
    q.includes('tech stack') ||
    q.includes('stack') ||
    q.includes('what does varun know') ||
    q.includes('programming') ||
    q.includes('technical skills')
  ) {

    return (
      `Varun's core skills include ${profile.skills.join(', ')}.`
    );

  }


  /* -----------------------------------------
     SQL
  ----------------------------------------- */

  if (
    q.includes('sql') ||
    q.includes('database')
  ) {

    return (
      'Yes. SQL is one of Varun’s core technical skills. ' +
      'He uses SQL for working with and filtering data as part ' +
      'of his data analysis and software consulting work.'
    );

  }


  /* -----------------------------------------
     PYTHON
  ----------------------------------------- */

  if (
    q.includes('python') ||
    q.includes('python skills')
  ) {

    return (
      'Yes. Python is one of Varun’s core technologies. ' +
      'He uses Python in data analysis and has Machine Learning, ' +
      'automation and web-development exposure.'
    );

  }


  /* -----------------------------------------
     MACHINE LEARNING / AI
  ----------------------------------------- */

  if (
    q.includes('machine learning') ||
    q.includes('machine-learning') ||
    q.includes('artificial intelligence') ||
    q.includes(' ai ') ||
    q === 'ai' ||
    q.includes('ml')
  ) {

    return (
      'Varun has Machine Learning experience, including a ' +
      'Terrorist Attack Prediction project involving historical ' +
      'data, data cleaning, feature selection and model evaluation.'
    );

  }


  /* -----------------------------------------
     WEB DEVELOPMENT
  ----------------------------------------- */

  if (
    q.includes('web development') ||
    q.includes('web developer') ||
    q.includes('frontend') ||
    q.includes('html') ||
    q.includes('css') ||
    q.includes('javascript') ||
    q.includes('react') ||
    q.includes('next.js')
  ) {

    return (
      'Varun has web-development experience with HTML, CSS ' +
      'and JavaScript, along with React and Next.js concepts.'
    );

  }


  /* -----------------------------------------
     ERP
  ----------------------------------------- */

  if (
    q.includes('erp') ||
    q.includes('sap') ||
    q.includes('oracle')
  ) {

    return (
      'Varun has ERP-system exposure, including SAP and Oracle ' +
      'exposure, along with practical experience working around ' +
      'Supply Chain and industrial processes.'
    );

  }


  /* -----------------------------------------
     SUPPLY CHAIN
  ----------------------------------------- */

  if (
    q.includes('supply chain') ||
    q.includes('planning') ||
    q.includes('replenishment') ||
    q.includes('forecast') ||
    q.includes('forecasting')
  ) {

    return (
      'Varun has Supply Chain planning experience from his work ' +
      'at Schneider Electric. He also has exposure to planning ' +
      'processes, ERP workflows and software systems.'
    );

  }


  /* -----------------------------------------
     PROJECTS
  ----------------------------------------- */

  if (
    q.includes('project') ||
    q.includes('projects') ||
    q.includes('portfolio project') ||
    q.includes('what has varun built')
  ) {

    return profile.projects
      .map(project =>
        `${project[0]} — ${project[1]}`
      )
      .join('\n');

  }


  /* -----------------------------------------
     TERRORIST ATTACK PROJECT
  ----------------------------------------- */

  if (
    q.includes('terrorist attack') ||
    q.includes('attack prediction') ||
    q.includes('prediction project')
  ) {

    return profile.projects[0][1];

  }


  /* -----------------------------------------
     OCR PROJECT
  ----------------------------------------- */

  if (
    q.includes('ocr') ||
    q.includes('document extraction') ||
    q.includes('document project')
  ) {

    return profile.projects[1][1];

  }


  /* -----------------------------------------
     EDUCATION
  ----------------------------------------- */

  if (
    q.includes('education') ||
    q.includes('degree') ||
    q.includes('college') ||
    q.includes('study') ||
    q.includes('qualification') ||
    q.includes('educational background')
  ) {

    return profile.education.join('\n');

  }


  /* -----------------------------------------
     HIRING
  ----------------------------------------- */

  if (
    q.includes('hire') ||
    q.includes('hiring') ||
    q.includes('why should i hire') ||
    q.includes('why hire') ||
    q.includes('fit for') ||
    q.includes('good candidate') ||
    q.includes('suitable candidate') ||
    q.includes('candidate')
  ) {

    return (
      'Varun combines SQL and Python data analysis with ' +
      'Machine Learning, web development and ERP-system ' +
      'understanding. His current role also gives him practical ' +
      'technical-consulting exposure, where he works with ' +
      'requirements, data and software workflows.'
    );

  }


  /* -----------------------------------------
     JOB / OPPORTUNITY
  ----------------------------------------- */

  if (
    q.includes('job opportunity') ||
    q.includes('job opening') ||
    q.includes('opportunity') ||
    q.includes('work with varun') ||
    q.includes('collaborate') ||
    q.includes('recruit') ||
    q.includes('recruiter')
  ) {

    return (
      'If you would like to discuss a job or professional ' +
      'opportunity with Varun, please use the contact enquiry ' +
      'form in this chat. Share your details and message, and ' +
      'Varun can get back to you.'
    );

  }


  /* -----------------------------------------
     PHONE NUMBER
  ----------------------------------------- */

  if (
    q.includes('phone') ||
    q.includes('mobile') ||
    q.includes('mobile number') ||
    q.includes('phone number') ||
    q.includes('contact number') ||
    q.includes('telephone') ||
    q.includes('call varun') ||
    q.includes('varun number') ||
    q.includes('whatsapp number')
  ) {

    setTimeout(() => {

      showZaraContactForm();

    }, 150);

    return (
      'Sure! Varun’s phone number is not displayed publicly here. ' +
      'Please fill out the form below with your details, and ' +
      'Varun can get back to you.'
    );

  }


  /* -----------------------------------------
     EMAIL
  ----------------------------------------- */

  if (
    q.includes('email') ||
    q.includes('mail id') ||
    q.includes('email id')
  ) {

    return (
      `You can contact Varun by email at ${profile.email}.`
    );

  }


  /* -----------------------------------------
     LINKEDIN
  ----------------------------------------- */

  if (
    q.includes('linkedin')
  ) {

    return (
      `Varun's LinkedIn is ${profile.linkedin}.`
    );

  }


  /* -----------------------------------------
     INSTAGRAM
  ----------------------------------------- */

  if (
    q.includes('instagram') ||
    q.includes('insta')
  ) {

    return (
      `Varun's Instagram is ${profile.instagram}.`
    );

  }


  /* -----------------------------------------
     CONTACT
  ----------------------------------------- */

  if (
    q.includes('contact') ||
    q.includes('get in touch') ||
    q.includes('reach varun') ||
    q.includes('how can i contact') ||
    q.includes('how to contact')
  ) {

    return (
      `You can contact Varun through his email at ${profile.email}, ` +
      `LinkedIn at ${profile.linkedin}, or Instagram at ${profile.instagram}. ` +
      'If you need his phone number, please use the contact enquiry form.'
    );

  }


  /* -----------------------------------------
     LOCATION
  ----------------------------------------- */

  if (
    q.includes('where is varun from') ||
    q.includes('where does varun live') ||
    q.includes('location') ||
    q.includes('where is varun based')
  ) {

    return (
      'Varun’s professional and educational background is connected ' +
      'with Bengaluru. ZARA does not display a private residential address.'
    );

  }


  /* -----------------------------------------
     PERSONAL / PROFESSIONAL STYLE
  ----------------------------------------- */

  if (
    q.includes('strength') ||
    q.includes('strengths')
  ) {

    return (
      'Varun’s strengths include working across data, software and ' +
      'business requirements. His background combines SQL, Python, ' +
      'analytics, Machine Learning, ERP systems and Supply Chain processes.'
    );

  }


  /* -----------------------------------------
     DATA ANALYST
  ----------------------------------------- */

  if (
    q.includes('data analyst') ||
    q.includes('analyst role')
  ) {

    return (
      'Varun currently works as a Data Analyst at Planvisage Software Solutions. ' +
      'His work involves SQL and Python, data handling and supporting the consulting ' +
      'phase of software delivery.'
    );

  }


  /* -----------------------------------------
     TECHNICAL CONSULTANT
  ----------------------------------------- */

  if (
    q.includes('technical consultant') ||
    q.includes('consulting')
  ) {

    return (
      'Varun works in a technical-consulting environment where he supports ' +
      'requirements, data and software workflows. His role combines technical ' +
      'understanding with practical business and system requirements.'
    );

  }


  /* -----------------------------------------
     THANK YOU
  ----------------------------------------- */

  if (
    q.includes('thank you') ||
    q.includes('thanks') ||
    q === 'thank'
  ) {

    return (
      'You’re welcome! 😊 If you want to know more about Varun, just ask me.'
    );

  }


  /* -----------------------------------------
     BYE
  ----------------------------------------- */

  if (
    q === 'bye' ||
    q.includes('goodbye')
  ) {

    return (
      'Thanks for visiting Varun’s portfolio. I’ll be here if you need anything else. 👋'
    );

  }


  /* -----------------------------------------
     DEFAULT
  ----------------------------------------- */

  return (
    'I can tell you about Varun’s current role, Schneider Electric ' +
    'experience, SQL, Python, Machine Learning, web development, ERP, ' +
    'Supply Chain, education, projects, technical consulting, hiring ' +
    'information or contact options. Try asking me something like ' +
    '“What does Varun do?”'
  );

}


/* =========================================================
   ZARA VOICE
========================================================= */

function getFemaleVoice() {

  if (!('speechSynthesis' in window)) {
    return null;
  }

  const voices =
    window.speechSynthesis.getVoices();

  if (!voices.length) {
    return null;
  }


  /*
    Prefer voices commonly available as
    female English voices.
  */

  const femaleNames = [

    'Samantha',
    'Karen',
    'Zira',
    'Jenny',
    'Aria',
    'Sonia',
    'Moira',
    'Hazel',
    'Susan',
    'Google UK English Female',
    'Google US English Female',
    'Microsoft Zira',
    'Microsoft Jenny',
    'Microsoft Aria'

  ];


  for (const name of femaleNames) {

    const voice =
      voices.find(v =>
        v.name
          .toLowerCase()
          .includes(name.toLowerCase())
      );

    if (voice) {
      return voice;
    }

  }


  /*
    If a named female voice isn't available,
    use an English voice.
  */

  const englishVoice =
    voices.find(v =>
      v.lang
        .toLowerCase()
        .startsWith('en')
    );


  return englishVoice || voices[0];

}


/* =========================================================
   SPEAK ZARA
========================================================= */

function speakZara(text, button) {

  if (!('speechSynthesis' in window)) {

    alert(
      'Voice is not supported in this browser. Please use Google Chrome or Microsoft Edge.'
    );

    return;

  }


  /*
    Stop previous speech.
  */

  window.speechSynthesis.cancel();


  const cleanText =
    text
      .replace(/•/g, '')
      .replace(/\n/g, '. ')
      .replace(/—/g, ', ')
      .trim();


  /*
    Create speech object.
  */

  const utterance =
    new SpeechSynthesisUtterance(cleanText);


  const voice =
    getFemaleVoice();


  if (voice) {

    utterance.voice = voice;

    utterance.lang =
      voice.lang || 'en-IN';

  } else {

    utterance.lang = 'en-IN';

  }


  /*
    ZARA voice settings.
  */

  utterance.rate = 0.92;

  utterance.pitch = 1.10;

  utterance.volume = 1;


  if (button) {

    button.textContent =
      '⏹ Stop ZARA';

  }


  utterance.onstart = () => {

    if (button) {

      button.textContent =
        '⏹ Stop ZARA';

    }

  };


  utterance.onend = () => {

    if (button) {

      button.textContent =
        '🔊 Listen';

    }

  };


  utterance.onerror = event => {

    console.log(
      'ZARA voice error:',
      event
    );

    if (button) {

      button.textContent =
        '🔊 Listen';

    }

  };


  /*
    Chrome can sometimes pause speech.
  */

  window.speechSynthesis.resume();


  window.speechSynthesis.speak(
    utterance
  );

}


/* =========================================================
   SEND MESSAGE
========================================================= */

function send(message) {

  const q =
    message.trim();


  if (!q || !log) {
    return;
  }


  /* USER MESSAGE */

  const userMessage =
    document.createElement('div');


  userMessage.className =
    'msg user';


  userMessage.textContent =
    q;


  log.appendChild(
    userMessage
  );


  /* ZARA ANSWER */

  const answerText =
    answer(q);


  const botMessage =
    document.createElement('div');


  botMessage.className =
    'msg bot';


  botMessage.style.whiteSpace =
    'pre-line';


  /* RESPONSE TEXT */

  const responseText =
    document.createElement('span');


  responseText.textContent =
    answerText;


  botMessage.appendChild(
    responseText
  );


  /* VOICE BUTTON */

  const voiceButton =
    document.createElement('button');


  voiceButton.type =
    'button';


  voiceButton.className =
    'voice-btn';


  voiceButton.textContent =
    '🔊 Listen';


  voiceButton.setAttribute(
    'aria-label',
    'Listen to ZARA response'
  );


  voiceButton.addEventListener(
    'click',
    () => {

      if (
        'speechSynthesis' in window &&
        window.speechSynthesis.speaking
      ) {

        window.speechSynthesis.cancel();

        voiceButton.textContent =
          '🔊 Listen';

      } else {

        speakZara(
          answerText,
          voiceButton
        );

      }

    }
  );


  botMessage.appendChild(
    voiceButton
  );


  log.appendChild(
    botMessage
  );


  /*
    Keep chat at bottom.
  */

  setTimeout(() => {

    log.scrollTop =
      log.scrollHeight;

  }, 50);

}


/* =========================================================
   CHAT BUTTON
========================================================= */

document
  .getElementById('chatFab')
  ?.addEventListener(
    'click',
    openChat
  );


document
  .getElementById('chatClose')
  ?.addEventListener(
    'click',
    closeChat
  );


document
  .querySelectorAll('.open-chat')
  .forEach(button => {

    button.addEventListener(
      'click',
      openChat
    );

  });


/* =========================================================
   CHAT FORM
========================================================= */

document
  .getElementById('chatForm')
  ?.addEventListener(
    'submit',
    event => {

      event.preventDefault();


      const input =
        document.getElementById('chatInput');


      if (!input) {
        return;
      }


      send(input.value);


      input.value = '';

    }
  );


/* =========================================================
   QUICK QUESTIONS
========================================================= */

document
  .querySelectorAll('.quick button')
  .forEach(button => {

    button.addEventListener(
      'click',
      () => {

        send(
          button.dataset.q || ''
        );

      }
    );

  });


/* =========================================================
   ZARA ENQUIRY FORM
========================================================= */

const zaraEnquiryForm =
  document.getElementById(
    'zaraEnquiryForm'
  );


if (zaraEnquiryForm) {

  zaraEnquiryForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();


      const name =
        document
          .getElementById('zaraName')
          ?.value
          .trim() || 'Not provided';


      const email =
        document
          .getElementById('zaraEmail')
          ?.value
          .trim() || 'Not provided';


      const phone =
        document
          .getElementById('zaraPhone')
          ?.value
          .trim() || 'Not provided';


      const message =
        document
          .getElementById('zaraMessage')
          ?.value
          .trim() || 'Not provided';


      const subject =
        encodeURIComponent(
          'ZARA Portfolio Enquiry'
        );


      const body =
        encodeURIComponent(
          `Hello Varun,

A visitor submitted an enquiry through ZARA.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

Please get back to them if appropriate.`
        );


      /*
        Opens the visitor's email application
        with the enquiry already prepared.
      */

      window.location.href =
        `mailto:${profile.email}?subject=${subject}&body=${body}`;


      const status =
        document.getElementById(
          'zaraFormStatus'
        );


      if (status) {

        status.textContent =
          'Your email app should open with the enquiry prepared.';

      }

    }
  );

}


/* =========================================================
   BROWSER VOICE INITIALIZATION
========================================================= */

if (
  'speechSynthesis' in window
) {

  /*
    Chrome loads voices asynchronously.
  */

  window.speechSynthesis.onvoiceschanged =
    () => {

      getFemaleVoice();

    };

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.classList.add(
            'visible'
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll('.reveal')
  .forEach(el => {

    observer.observe(el);

  });
