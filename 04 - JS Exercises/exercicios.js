/*------------------ Exercício 01 ------------------*/

function parOuImpar(num) {
  if (num % 2 == 0) {
    console.log('Par')
  } else {
    console.log('Impar')
  }
}

/*------------------ Exercício 02 ------------------*/

var verifPrimo = (num) => {

  for (var i = 2; i < num; i++) {

    if (num % i === 0) {
      return `${num} não é primo!`;
    } else {
      return `${num} é primo!`;
    }
  }
}

/*------------------ Exercício 03 ------------------*/

function happyNewYear() {
  console.log("Feliz ano novo!");
  }
  
  function countdown(num, happyNewYear) {
  
    for(var i = num; i >= 1; i--) {
      console.log(i);
    }
  
    happyNewYear();
  }
  
  countdown(10, happyNewYear)

/*------------------ Exercício 04 ------------------*/

const promise1 = new Promise((resolve, reject) => {
  
  for(var i = 10; i >= 1; i--) {
    console.log(i)
  }
   resolve('Feliz ano novo!');
});
  
  promise1.then((value) => {
    console.log(value);
  });


/*------------------ Exercício 05 ------------------*/

var numArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getNum = num => {
  return sleep(1000).then(v => numArr[num]);
}

const printCountdown = async _ => {
  for (let i = 0; i < numArr.length; i++) {
    const num = await getNum(i);
    console.log(num);
  }

  console.log('Feliz ano novo!')

}

printCountdown();

/*------------------ Exercício 06 ------------------*/

var gradeArr = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7]

function verify() {
  
  for(var i = 0; i < gradeArr.length; i++) {
    if(gradeArr[i] >= 7){
      console.log(gradeArr[i])
    }
  }
}

verify();

/*------------------ Exercício 07 ------------------*/

var products = [
  { nome: 'Cerveja', preco: '2.30' },
  { nome: 'Suco', preco: '1.50' },
  { nome: 'Arroz', preco: '6.90' },
  { nome: 'Chocolate', preco: '3.20' },
  { nome: 'Pão', preco: '2.70' },
]


function sum(arr) {
  var finalValue = 0;
  arr.forEach(function total(arrayItem) {
    finalValue = (parseFloat(arrayItem.preco) + finalValue);
  })
  return finalValue.toFixed(2);
}

console.log(sum(products));

/*------------------ Exercício 08 ------------------*/

var alunos = [
  { nome: 'João', ano: '8' },
  { nome: 'Pedro', ano: '8' },
  { nome: 'Ana', ano: '9' },
  { nome: 'Rafaela', ano: '8' },
  { nome: 'Carla', ano: '9' },
]

  alunos.forEach(function disciplina(arrayItem) {
    if(arrayItem.ano == 9) {
      console.log(`${arrayItem.nome} terá aula de física na quarta-feira.`)
    } else {
      console.log(`${arrayItem.nome} terá aula de história na quarta-feira.`)
    }
  })