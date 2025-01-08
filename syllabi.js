// Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
      header.querySelector('.accordion-icon').textContent = '+';
    } else {
      content.style.display = 'block';
      header.querySelector('.accordion-icon').textContent = '-';
    }
  });
});
