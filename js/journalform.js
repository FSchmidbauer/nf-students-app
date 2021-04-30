const starsSection = document.querySelector('.form__stars');
const stars = starsSection.querySelectorAll('svg');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('filled');
    }
    for (let i = index + 1; i < 5; i++) {
      stars[i].classList.remove('filled');
    }
  });
});

const rectanglesSection = document.querySelector('.form__rectangles');
const rectangles = rectanglesSection.querySelectorAll('svg');

rectangles.forEach((rectangle, index) => {
  rectangle.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      rectangles[i].classList.add('filled');
    }
    for (let i = index + 1; i < 11; i++) {
      rectangles[i].classList.remove('filled');
    }
  });
});

/* const starSVG = document.createElement('svg');
const starPath = document.createElement('path');
starsSection.appendChild(starSVG);
starSVG.appendChild(starPath);
starSVG.setAttribute('fill', 'none');
starSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
starSVG.setAttribute('viewBox', '-2 -2 28 28');
starPath.setAttribute('fill-rule', 'evenodd');
starPath.setAttribute('stroke', '#7589A2');
starPath.setAttribute(
  'd',
  'M8.2 7.2L.8 8.3h0C0 8.5-.3 9.4.2 10l5.4 5.2-1.3 7.4v.1a1 1 0 001.4 1l6.6-3.6 6.6 3.5h.1a1 1 0 001.3-1l-1.2-7.4 5.3-5.2h.1a1 1 0 00-.6-1.6l-7.4-1L13.3.4a1 1 0 00-1.8 0L8.2 7.2z'
); */
