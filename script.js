const loginWork = document.querySelector('.trybewarts-login button');
/* constante para o botão de submit */
const submitContent = document.querySelector('#submit-btn');
/* constante para o checkbox agreement */
const agreementChecked = document.getElementById('agreement');

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

/* evento para habilitar ou desabilitar submit */

agreementChecked.addEventListener('click', () => {
  /* checkBox recebe o valor booleano do check agreement, caso marcado true, caso desmarcado false */
  const checkBox = document.getElementById('agreement').checked;
  /* confirma se o check agreement está marcado e habilita a função submit do botão */
  if (checkBox === true) {
    /* seta a propriedade disabled do botão para off(false) */
    submitContent.disabled = false;
  }
});
