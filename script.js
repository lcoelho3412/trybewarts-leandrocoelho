const loginWork = document.querySelector('.trybewarts-login button');
/* constante para o botão de submit */
const submitContent = document.querySelector('#submit-btn');
/* constante para o checkbox agreement */
const agreementChecked = document.getElementById('agreement');
/* constante para  textarea */
const areaTexto = document.querySelector('#textarea');

/* função para login */
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

/* FUNÇÃO PARA DECREMENTAR O CONTADOR DE CARACTERES função para o evento da linha 53 */
function charCount() {
  /* cosntante que recebe o tamanho da string contida na textArea */
  const charLength = areaTexto.value.length;
  /* constante que recebe o elemento <p> esse elemento mostra em tempo real a quantidade de caracteres */
  const counterChar = document.querySelector('#counter');
  /* o elemento <p> recebe a diferença entre 500 e o tamanho da string contida em textArea */
  counterChar.innerText = 500 - charLength;
}
/* evento que escuta a entrada de valores do elemento, toda vez que há uma entrada ele ativa */
areaTexto.addEventListener('input', charCount);

/* FUNÇÃO PARA ARMAZENAR AS MATERIAS ESCOLHIDAS (veja a função relatórioForm linha 110) */
function materiasCheked() {
  /* constante que recebe todos os elementos que contenham a classe subject */
  const materias = document.querySelectorAll('.subject');
  /* constante array para armazenar os valores contidos nos elementos */
  const arrayMaterias = [];
  /* metodo para varrer a lista de elementos de nome materias */
  materias.forEach((element) => {
    /* se o elemento da vez estiver marcado(checked) o arrayMaterias recebe o valor do elemento da vez */
    if (element.checked === true) {
      arrayMaterias.push(element.value);
    }
  });
  /* o array acima termina com uma virgula [,''] o metodo abaixo remove esse objeto vazio e a virgula */
  arrayMaterias.pop();
  return arrayMaterias.join(', ');
}

/* FUNÇÃO PARA RETORNAR O RADIO SELECIONADO (veja a função relatórioForm linha 110) */
function radioSelected(select) {
  /* variável que recebe o valor  de um elemento input do tipo radio começa com vazio caso não seja selecionado nada */
  let selectedFamily = 'vazio';
  select.forEach((element) => {
    /* se o elemento input radio estiver marcado faz a linha de codigo  */
    if (element.checked === true) {
      selectedFamily = element.value;
    }
  });
  return selectedFamily;
}

/* CONSTANTES PARA USO NO RELATORIO FINAL DO FORM */

/* constante para  elemento input name */
const inputName = document.querySelector('#input-name');
/* constante para elemento input ultimoNome */
const inputLastName = document.querySelector('#input-lastname');
/* constante para elemento input email */
const inputEmail = document.querySelector('#input-email');
/* constante para elemento input casa */
const inputCasa = document.getElementById('house');
/* constante que recebe uma lista contendo os elementos com a classe sumir */
const formDiv = document.querySelectorAll('.sumir');
/* constante que recebe o elemento do relatorio que armazena as materias */
const inMaterias = document.querySelector('.relatorio-materias');
/* constante que recebe o elemento do relatorio que armazena o nome completo */
const inNome = document.querySelector('.relatorio-nome');
/* constante que recebe o elemento do relatorio que armazena o email */
const inEmail = document.querySelector('.relatorio-Email');
/* constante que recebe o elemento do relatorio que armazena a casa */
const inCasa = document.querySelector('.relatorio-casa');
/* constante que recebe o elemento do relatorio que armazena a familia */
const inFamilia = document.querySelector('.relatorio-familia');
/* constante que recebe o elemento do relatorio que armazena a nota da avaliação */
const inAvaliation = document.querySelector('.relatorio-avaliation');
/* constante que recebe o elemento do relatorio que armazena as observações */
const inObs = document.querySelector('.relatorio-obs');
/* constante que recebe uma lista com os elementos radio do tipo familia */
const radioFamily = document.querySelectorAll('.radio .line input');
/* constante que recebe uma lista com os elementos radio do tipo nota */
const radioNota = document.querySelectorAll('.container-nota input');

/* FUNÇÃO PARA APAGAR O FORMULÁRIO E MOSTRAR O RELATÓRIO DE ENVIO */
function relatorioForm(event) {
  /* constante que recebe a opção de casa escolhida, o metodo nomeDaVariavel.options[nomeDaVariavel.selectedIndex]
  varre a lista de elementos option do elemento selected em busca do elemento selecionado */
  const selectOption = inputCasa.options[inputCasa.selectedIndex];
  /* constante recebe resultado da função materiasChecked e transforma em string os objetos d array separando por virgula */
  const arrayMaterias = materiasCheked();
  /* a div relatório está inicialmente setado como display none, ao clicar no botão submit o codigo da linha 117 seta essa div como display block tornando-a visivel na linha 118 torno invisivel todos os elementos do formulário da classe sumir */
  document.querySelector('.relatorio').style.display = 'block';
  formDiv.forEach((e) => {
    e.style.display = 'none';
  }); /* da linha 120 a 127 insere os valores  em forma de texto dos inputs trabalhados em seus respectivos lugares */
  inNome.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  inEmail.innerText = `Email: ${inputEmail.value}`;
  inCasa.innerText = `Casa: ${selectOption.value}`;
  inFamilia.innerText = `Família: ${radioSelected(radioFamily)}`;
  inMaterias.innerText = `Matérias: ${arrayMaterias}`;
  inAvaliation.innerText = `Avaliação: ${radioSelected(radioNota)}`;
  inObs.innerText = `Observações: ${areaTexto.value}`;
  event.preventDefault(); /* impede a ação de dar refresh na pagina feita pelo botão de submite */
}

submitContent.addEventListener('click', relatorioForm);
