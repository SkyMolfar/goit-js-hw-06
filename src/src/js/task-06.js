const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  const valueLength = input.value.trim().length;
  if (valueLength === Number(validLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});