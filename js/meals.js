const seeMoreBtn = document.querySelectorAll('.see-more-btn');

seeMoreBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const moreText = btn.previousElementSibling;
      moreText.style.display = moreText.style.display === 'none' ? 'block' : 'none';
      
      btn.querySelector('i').style.transform = moreText.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });