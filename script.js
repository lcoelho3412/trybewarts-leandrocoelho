/* acessar button */
const loginWork = document.querySelector(".trybewarts-login button")
console.log(loginWork);
//captura email
loginWork.addEventListener('click', function () {
  const emailReceiver = document.querySelector('.trybewarts-login').firstElementChild;
  const passReceiver = document.querySelector('.trybewarts-login').firstElementChild.nextElementSibling;
  const emailInput = emailReceiver.value;
  const passInput = passReceiver.value;
  console.log(emailInput, passInput);
  if (emailInput === 'tryber@teste.com' && passInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

//captura senha
//envia ao clicar enviar
//se email e senha bater alert Ola! 
//alert senha inválido se senha for diferente
