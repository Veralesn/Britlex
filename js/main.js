
    const burgerBtn = document.querySelector('.burger-btn');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-menu');

    function openMenu() {
      sideMenu.classList.add('active');
      overlay.classList.add('active');
      burgerBtn.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    }

    burgerBtn.addEventListener('click', () => {
      const isOpen = sideMenu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);

    // закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenu();
      }
    });
    window.onscroll = function() {
    var button = document.getElementById('scroll-button');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.classList.remove('hidden');
    } else {
    button.classList.add('hidden');
    }
    };