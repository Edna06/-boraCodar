// capturando os botões
const calculation = document.querySelector('.calculator .calculation');
const display = document.querySelector('.result_display p');
const number = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');
const equalSymbolDisplay = document.querySelector(
  '.number_display .result_display .equal_display'
);

let newNumber = true;
let operator;
let previousNumber;

const operationPendant = () => operator !== undefined;

const calculate = () => {
  if (operationPendant()) {
    //se existir essa operação pendente, aí ele vai calcular
    const createCurrent = parseFloat(display.textContent.replace(',', '.')); //transformando em número
    newNumber = true;

    if (operator == '%') {
      updateDisplay((createCurrent / 100) * previousNumber);
      calculation.innerHTML = previousNumber + operator + createCurrent;
    } else {
      const result = eval(`${previousNumber} ${operator} ${createCurrent} `);
      calculation.innerHTML = previousNumber + operator + createCurrent;
      updateDisplay(result);
    }
  }
};

const updateDisplay = text => {
  //se for um novo número ele não vai concatenar, vai adicionar um novo número apenas
  if (newNumber) {
    display.textContent = text.toLocaleString('pt-BR'); //vai trazer o símbolo usado no decimal no Brasil
    newNumber = false; //quando eu clicar em um outro número não será mais 'um novo', então irá concatenar
  } else {
    display.textContent += text.toLocaleString('pt-BR'); //concatenando os números com os que já tem
  }
}

const insertNumber = event => updateDisplay(event.target.textContent); //para trazer para mim o alvo que cliquei

//executa uma função para cada elemento de um array
number.forEach(number => number.addEventListener('click', insertNumber));

//selecionando o operador
const selectOperator = event => {
  //fazendo validação
  //se não for um novo número
  if (!newNumber) {
    calculate();
    newNumber = true;
    operator = event.target.textContent; //guardando na memória o operador e o número que apareceu antes do operador
    previousNumber = parseFloat(display.textContent.replace(',', '.'));
  }
};

operators.forEach(operator =>
  operator.addEventListener('click', selectOperator);
);

// config equal button
document.querySelector('button.symbol_equal').addEventListener('click', () => {
  calculate();
  equalSymbolDisplay.classList.remove('equal_display');
  operator = undefined;
})

// config clear display
document.querySelector('button#cancel_entry').addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

// config cancel entry
document.querySelector('button#clear').addEventListener('click', () => {
  display.textContent = '';
  operator = undefined;
  previousNumber = undefined;
  createCurrent = true;
  equalSymbolDisplay.classList.add('equal_display');
  calculation.innerHTML = '';
});

// function invert signal
const invert = document
  .querySelector('button.invert')
  .addEventListener('click', () => {
    var myNumber = display.textContent;

    display.textContent = myNumber *= -1;
  });

// lembrando que a vírgula é um decimal

// vai procurar de existe vírgula no meu texto
const existDecimal = () => display.textContent.indexOf(',') !== -1; //se ele me trouxer um número diferente de -1, quer dizer que é true
const existValue = () => display.textContent.length > 0; //ele vai avaliar o tamanho

const insertDecimal = () => {
  if (!existDecimal()) {
    if (existValue()) {
      updateDisplay(',');
    } else {
      updateDisplay('0,');
    }
  }
}

document.querySelector('button#comma').addEventListener('click', insertDecimal);

// add opção de digitar pelo teclado
const mapKey = {
  0: 'key0',
  1: 'key1',
  2: 'key2',
  3: 'key3',
  4: 'key4',
  5: 'key5',
  6: 'key6',
  7: 'key7',
  8: 'key8',
  9: 'key9',
  Backspace: 'cancel_entry',
  c: 'clear',
  Enter: 'result',
  '%': 'porcentageOperator',
  '/': 'divideOperator',
  '*': 'multiplyOperator',
  '-': 'minusOperator',
  '+': 'plusOperator',
  ',': 'comma',
  i: 'invertSign'
};

const mapKeyboard = event => {
  var key = event.key;

  const keyPermit = () => Object.keys(mapKey).indexOf(key) !== -1; // o indexof me retorna -1 quando é false

  if (keyPermit()) {
    document.getElementById(mapKey[key]).click();
  }
}

document.addEventListener('keydown', mapKeyboard); 
