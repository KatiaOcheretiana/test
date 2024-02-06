document.addEventListener('DOMContentLoaded', function () {
  const marks = document.querySelectorAll('.mark');
  const averageRating = document.querySelector('.average-rating');
  const totalVotesField = document.querySelector('.total-votes');
  const progressContent = document.querySelector('.circle-border');
  const progressNumber = document.querySelector('.progress-number');

  let totalVotes = 0;
  let totalRating = 0;

  marks.forEach(mark => {
    mark.addEventListener('click', function () {
      const value = parseInt(this.getAttribute('data-value'));
      totalRating += value;
      totalVotes++;
      calculateAverageRating();
    });
  });

  function calculateAverageRating() {
    const average = totalRating / totalVotes;
    averageRating.textContent = average.toFixed(1);
    totalVotesField.textContent = totalVotes;
    progressNumber.textContent = average.toFixed(1);

    const percentage = (average / 10) * 100;

    const gradientColor = `linear-gradient(270deg, #F9B936 ${percentage}%, transparent ${percentage}%, rgba(0, 0, 0, 0.44))`;
    progressContent.style.background = gradientColor;
  }
});

// for change rating hover color

document.addEventListener('DOMContentLoaded', function () {
  const marks = document.querySelectorAll('.mark');
  const startRating = document.querySelector('.start-rating');

  marks.forEach(mark => {
    mark.addEventListener('mouseenter', function () {
      const value = parseInt(mark.getAttribute('data-value'));
      for (let i = 1; i <= value; i++) {
        const prevMark = document.querySelector(`.mark[data-value="${i}"]`);
        prevMark.classList.add('hover');
      }
      startRating.classList.add('hover');
    });

    mark.addEventListener('mouseleave', function () {
      const value = parseInt(mark.getAttribute('data-value'));
      for (let i = 1; i <= value; i++) {
        const prevMark = document.querySelector(`.mark[data-value="${i}"]`);
        prevMark.classList.remove('hover');
      }
      startRating.classList.remove('hover');
    });
  });
});
