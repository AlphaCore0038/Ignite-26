
document.addEventListener('DOMContentLoaded', () => {
  
  const nav = document.getElementById('navbar');
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link-item');
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
    
    let curr = '';
    secs.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) curr = section.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + curr);
    });
  }, { passive: true });

  
  const menuBtn = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { if (menuBtn) menuBtn.checked = false; });
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
  
  const dotsBox = document.getElementById('hero-particles');
  if (dotsBox) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      const hue = [250, 330, 190, 30][Math.floor(Math.random() * 4)];
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random()*100}%;
        background:hsl(${hue},80%,70%);
        animation-duration:${Math.random()*12+8}s;
        animation-delay:${Math.random()*-20}s;
        opacity:${Math.random()*0.7+0.3};
        box-shadow:0 0 ${size*3}px hsl(${hue},80%,70%);
      `;
      dotsBox.appendChild(p);
    }
  }

  
  const textElement = document.querySelector('.typing-text');
  if (textElement) {
    const text = textElement.textContent;
    textElement.textContent = '';
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        textElement.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 60);
    }, 900);
  }
  
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let curr = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          curr = Math.min(curr + step, target);
          el.textContent = Math.floor(curr).toLocaleString();
          if (curr >= target) clearInterval(interval);
        }, 20);
        watcher.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => watcher.observe(el));

  
  


  
  document.querySelectorAll('.schedule-day').forEach(day => {
    day.addEventListener('mouseenter', () => {
      day.classList.add('open');
    });
    day.addEventListener('mouseleave', () => {
      day.classList.remove('open');
    });
  });

  
  


  
  const regForm = document.getElementById('register-form');
  const doneMessage = document.getElementById('success-message');
  const exitBtn = document.getElementById('success-close');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value.trim() || '';
      const txt = document.getElementById('success-text');
      if (txt) txt.textContent = `Thank you, ${name}! You are successfully registered.`;
      regForm.style.display = 'none';
      if (doneMessage) doneMessage.style.display = 'flex';
    });
  }
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      if (regForm) { regForm.reset(); regForm.style.display = 'flex'; }
      if (doneMessage) doneMessage.style.display = 'none';
    });
  }

});
