function calcular() {

  var operacao = document.getElementById('operacao').value;
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');


  if (num1 == '' || num1 == null) {
    alert('Favor digitar um número válido');
  }

  if (num2 == '' || num2 == null) {
    alert('Favor digitar um número válido');
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  var resultado = null;

  switch (operacao) {

    case '1':
      resultado = num1 - num2;
      break;
    case '2':
      resultado = num1 + num2;
      break;
    case '3':
      resultado = num1 * num2;
      break;
    case '4':
      resultado = num1 / num2;
      break;
    default:
      alert("A opção selecionada é inválida");
      return false
  }

  resultado = parseFloat(resultado);
  document.getElementById('resultado').value = resultado;

}