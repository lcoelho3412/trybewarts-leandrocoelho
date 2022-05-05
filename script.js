const loginWork = document.querySelector('.trybewarts-login button');
console.log(loginWork);

loginWork.addEventListener('click', () => {
  const emailReceiver = document.querySelector('.trybewarts-login').firstElementChild;
  const passReceiver = emailReceiver.nextElementSibling;
  const emailInput = emailReceiver.value;
  const passInput = passReceiver.value;
  console.log(emailInput, passInput);
  if (emailInput === 'tryber@teste.com' && passInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
