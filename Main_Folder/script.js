
document.addEventListener('DOMContentLoaded', () => {

  
  const cursorGlow = document.getElementById('cursor-glow');
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
  });

  
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link-item');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }
    
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  
  const navToggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  
  const parallaxBg = document.getElementById('hero-parallax');
  window.addEventListener('scroll', () => {
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }
  }, { passive: true });

  
  const particleContainer = document.getElementById('hero-particles');
  if (particleContainer) {
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
      particleContainer.appendChild(p);
    }
  }

  
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    const text = typingEl.textContent;
    typingEl.textContent = '';
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        typingEl.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 60);
    }, 900);
  }

  
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        aosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString();
          if (current >= target) clearInterval(interval);
        }, 20);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  
  


  
  document.querySelectorAll('.schedule-day').forEach(day => {
    day.addEventListener('mouseenter', () => {
      day.classList.add('open');
    });
    day.addEventListener('mouseleave', () => {
      day.classList.remove('open');
    });
  });

  
  


  
  const dropdown = document.getElementById('events-dropdown');
  if (dropdown) {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const options = dropdown.querySelectorAll('.option-item');
    const hiddenInput = document.getElementById('reg-events');
    let selectedEvents = [];

    trigger.addEventListener('click', () => dropdown.classList.toggle('active'));
    
    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const val = opt.getAttribute('data-value');
        
        if (opt.classList.contains('selected')) {
          opt.classList.remove('selected');
          selectedEvents = selectedEvents.filter(item => item !== val);
        } else {
          if (val === "All Events") {
            selectedEvents = ["All Events"];
            options.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
          } else {
            const allIndex = selectedEvents.indexOf("All Events");
            if (allIndex > -1) {
              selectedEvents.splice(allIndex, 1);
              options.forEach(o => {
                if (o.getAttribute('data-value') === "All Events") o.classList.remove('selected');
              });
            }
            opt.classList.add('selected');
            selectedEvents.push(val);
          }
        }
        
        if (hiddenInput) hiddenInput.value = selectedEvents.join(', ');
        
        if (selectedEvents.length === 0) {
          trigger.textContent = 'Select events';
        } else if (selectedEvents.length === 1) {
          trigger.textContent = selectedEvents[0];
        } else {
          trigger.textContent = selectedEvents.length + ' events selected';
        }
      });
    });
    
    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
    });
  }

  
  const form = document.getElementById('register-form');
  const successMsg = document.getElementById('success-message');
  const closeBtn = document.getElementById('success-close');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value.trim() || '';
      const txt = document.getElementById('success-text');
      if (txt) txt.textContent = `Thank you, ${name}! You are successfully registered.`;
      form.style.display = 'none';
      if (successMsg) successMsg.style.display = 'flex';
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (form) { form.reset(); form.style.display = 'flex'; }
      if (successMsg) successMsg.style.display = 'none';
    });
  }

});
