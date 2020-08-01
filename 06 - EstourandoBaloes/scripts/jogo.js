var timerId = null;
var tempoSegundos = 0;

/*Função que inicia o jogo na seleção de níveis*/

function iniciarJogoLvl() {
  var nivel = document.getElementById('nível').value;

  window.location.href = 'jogo.html?' + nivel;

}

/*Função que inicia o jogo efetivamente*/

function iniciarJogo() {

  var url = window.location.search;
  var nivelJogo = url.replace("?", "");

  if (nivelJogo == 1) {
    tempoSegundos = 120;
  }

  if (nivelJogo == 2) {
    tempoSegundos = 60;
  }

  if (nivelJogo == 3) {
    tempoSegundos = 30;
  }

  document.getElementById('cronometro').innerHTML = tempoSegundos;

  var qtdeBaloes = 20;
  criaBaloes(qtdeBaloes);


  document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
  document.getElementById('baloesEstourados').innerHTML = 0;

  contagemTempo(tempoSegundos + 1);

}

/*Função que cria os balões de acordo com a dificuldade*/

function criaBaloes(qtdeBaloes) {

  for (var i = 1; i <= qtdeBaloes; i++) {

    var balao = document.createElement("img");
    balao.src = 'imagens/balao_azul_pequeno.png';
    balao.style.margin = '10px';
    balao.id = 'b'+i;
    balao.onclick = function () {
      estourar(this);
    };

    document.getElementById('cenario').appendChild(balao);
  }

}

/*Função que faz contagem regressiva TO-DO!!!!!!!!!!!!!*/

function contagemTempo(segundos) {
segundos = segundos - 1;


document.getElementById('cronometro').innerHTML = segundos;
timerId = setTimeout("contagemTempo("+segundos+")", 1000);

if (segundos == -1) {
  clearTimeout(timerId);
  gameOver();
  return false;
}

}

/*Função que para o jogo*/

function gameOver() {
alert('Fim de jogo! Você não conseguiu estourar todos os balões');
}

/*Função que marca o estouro do balão, mudando imagem*/

function estourar(e) {

var idBalao = e.id;
document.getElementById(idBalao).setAttribute("onclick","");
document.getElementById(idBalao).src = 'imagens/balao_azul_pequeno_estourado.png';

pontuacao();
}

/*Função que marca a pontuação*/

function pontuacao() {

var baloesInteiros = parseInt(document.getElementById('baloesInteiros').innerHTML);
var baloesEstourados = parseInt(document.getElementById('baloesEstourados').innerHTML);

baloesInteiros = parseInt(baloesInteiros);
baloesEstourados = parseInt(baloesEstourados);

baloesInteiros--;
baloesEstourados++;

document.getElementById('baloesInteiros').innerHTML = baloesInteiros;
  document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

  situacaoJogo(baloesInteiros);

}

/*Função que valida se o jogo acabou*/

function situacaoJogo(baloesInteiros) {
if (baloesInteiros == 0) {
  alert('Parabéns! você ganhou')
  pararJogo();
}
}

/*Função que termina o jogo*/

function pararJogo() {
clearTimeout(timerId);
}
