import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button');
const clockFace = document.querySelectorAll('.value');

btn.disabled = true;

let userSelectedDate;

const date = new Date();

btn.addEventListener('click', handleClick);

function handleClick() {
  input.disabled = true;
  btn.disabled = true;
  const intervalId = setInterval(() => {
    const deltaTime = userSelectedDate - new Date();
    const time = convertMs(deltaTime);
    updateClockFace(time);

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      input.disabled = false;
      clockFace[0].textContent = '00';
      clockFace[1].textContent = '00';
      clockFace[2].textContent = '00';
      clockFace[3].textContent = '00';
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] >= date) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
      // window.alert('Please choose a date in the future');
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    }

    userSelectedDate = selectedDates[0];
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  clockFace[0].textContent = days;
  clockFace[1].textContent = hours;
  clockFace[2].textContent = minutes;
  clockFace[3].textContent = seconds;
}
