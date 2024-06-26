// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputSeconds = document.querySelector('input[type = "number"]');
const input = document.querySelectorAll('input[type= "radio"]');
const form = document.querySelector('.form');

form.addEventListener('submit', hanleSubmit);

function hanleSubmit(event) {
  event.preventDefault();
  let selectedValue;
  const inputSecondsValue = inputSeconds.value.trim();
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      selectedValue = input[i].value;
      console.log(selectedValue);
      break;
    }
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedValue === 'fulfilled') {
        resolve(`Fulfilled promise in ${inputSecondsValue} ms`);
      }
      if (selectedValue === 'rejected') {
        reject(`Rejected promise in ${inputSecondsValue} ms`);
      }
    }, parseInt(inputSecondsValue));
  });

  console.log(promise);
  promise
    .then(data => {
      iziToast.success({
        title: 'Fulfilled',
        message: data,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Rejected',
        message: error,
        position: 'topRight',
      });
    });

  input[0].checked = false;
  input[1].checked = false;
  inputSeconds.value = '';
}
