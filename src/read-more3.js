(() => {
  const mobileMenu = document.querySelector('.js-menu-container3');
  const openMenuBtn = document.querySelector('.js-open-menu3');
  const closeMenuBtn = document.querySelector('.js-close-menu3');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      openMenuBtn.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

    openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  })
();
    