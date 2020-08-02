/*----------------Variables----------------*/ 
var changed = false;

/*----------------Olá no clique do botão----------------*/

document.getElementById("greetings").addEventListener("click", function () {
  alert("Olá!!!");
});

/*----------------Mudar cor de fundo no clique do botão----------------*/

document.getElementById("backgroundChange").addEventListener("click", function () {
  if (!changed) {
    document.getElementById("subBody").style.background = 'rgba(30, 130, 76, 0.5)';
    changed = true;
  } else {
    document.getElementById("subBody").style.background  = '';
    changed = false;
  }
});
/*------Mostrar no console quando passar o cursor pela imagem------*/

document.getElementById("sauron").addEventListener("mouseover", function () {
  console.log("Estou vendo a imagem");
})

/*------Mostrar no console a posição do cursos e a mensagem quando clicarmos------*/

document.getElementById("click").addEventListener("click", (e) => {
  console.log(`Posição X:${e.pageX} - Posição Y:${e.pageY}`);
  console.log("Estou clicando na imagem");
})

/*----------Mudar cor do body quando clicar em qualquer parte dele----------*/

/*
document.body.addEventListener("click", function() {
  if (!changed) {
    this.style.background = 'red';
    changed = true;
  } else {
    this.style.background = '';
    changed = false;
  }
});
*/

/*
document.getElementById("subBody").addEventListener("click", function() {
  if (!changed) {
    this.style.background = 'rgba(150, 40, 27, 0.5)';
    changed = true;
  } else {
    this.style.background = '';
    changed = false;
  }
});
*/

/*-----------Alertar impossibilidade de envio ao tentar enviar-----------*/

document.getElementById("send").addEventListener("click", function () {
  alert("Não foi possível enviar");
});

/*-----------Timers!-----------*/

/*
document.onload = setTimeout(function () { alert('Tempo esgotado!'); }, 10000);

document.onload = setInterval(function () { alert('Hora do intervalo'); }, 5000);
*/