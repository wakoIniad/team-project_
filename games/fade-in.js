const targets = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  targets.forEach(target => {
    const targetPos = target.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (targetPos < windowHeight * 0.8) {
      target.classList.add('appear');
    } else {
      target.classList.remove('appear');
    }
  });
});