const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function fillBlanks() {
  const data = localStorage.getItem(key);
  if (data) {
    const parsed = JSON.parse(data);
    form.elements.email.value = parsed.email || '';
    form.elements.message.value = parsed.message || '';
  }
}

form.addEventListener('input', () => {
  const datas = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(key, JSON.stringify(datas));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const datas = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (datas.email === '' || datas.message === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(datas);
  form.reset();
  localStorage.removeItem(key);
});

document.addEventListener('DOMContentLoaded', fillBlanks);
