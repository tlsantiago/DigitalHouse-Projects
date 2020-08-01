function iniciarJogoLvl() {
  var nivel = document.getElementById('nível').value;

  window.location.href = 'jogo.html?'+nivel;

}