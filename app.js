document.addEventListener('DOMContentLoaded', function () {
  const secondHand = document.querySelector('.s-hand');
  const minHand = document.querySelector('.m-hand');
  const hourHand = document.querySelector('.h-hand');

  setInterval(() => {
    const now = new Date();
    const miliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const rotateSeconds = ((360 / 60) * (seconds + miliseconds/1000)) + 90;
    const rotateMinutes = ((360 / 60) * minutes) + 90;
    const rotateHours = ((360 / 12) * hours) + 90;

    secondHand.style.transform = `rotate(${rotateSeconds}deg)`;
    minHand.style.transform = `rotate(${rotateMinutes}deg)`;
    hourHand.style.transform = `rotate(${rotateHours}deg)`;
  }, 50)
});