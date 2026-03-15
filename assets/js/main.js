document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const more = btn.nextElementSibling;
      if (more.style.display === 'block') {
        more.style.display = 'none';
      } else {
        more.style.display = 'block';
      }
    });
  });
});
