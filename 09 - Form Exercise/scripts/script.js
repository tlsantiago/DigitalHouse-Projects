function send() {

  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastName').value;
  var age = document.getElementById('age').value;
  var picture = document.getElementById('picture').value;
  var password = document.getElementById('password').value;
  var passwordCheck = document.getElementById('passwordCheck').value;

  /*Validação dos radio buttons para identificar qual foi selecionado*/

  var gender = document.getElementsByName('gender')
  for (var i = 0; i < gender.length; i++) {
    if(gender[i].checked) {
      console.log(gender[i].value);
      gender = gender[i].value;
    }
  }

  /*Validação se algum campo foi deixado vazio*/

  if (id == '' || name == '' || lastName == '' || age == '' ||
    picture == '' || password == '' || passwordCheck == '' || gender == '') {
    alert("Favor preencher todos os campos do formulário.")

  /*Validação da igualdade de senhas*/  
  } else if (password !== passwordCheck) {
    alert("As senhas não conferem. Favor verificar")

  /*Transformando o nome e sobrenome em uma única string + requisição Ajax*/  
  } else {
    var fullName = `${name} ${lastName}`;


    $.ajax({
      method: "POST",
      url: "http://localhost:3000/characters",
      data: {
        "id": id,
        "fullName": fullName,
        "age": age,
        "picture": picture,
        "password": password,
        "gender": gender,
      },

      success: function () {
        alert("Cadastro efetuado!");
      },
      error: function () {
        alert("Ocorreu um erro! Tente novamente.")
      },
    })
  }
}


/*Trocar cor do fundo dependendo do gênero selecionado*/

function changeColor(gender) {


  if (gender == 'male') {
    document.getElementById("subBody").style.background = 'rgba(51,0,51,0.3)';

  } else if (gender == 'female') {
    document.getElementById("subBody").style.background = 'rgba(255,102,0,0.3)';

  } else {
    document.getElementById("subBody").style.background = 'rgba(0,51,0,0.3)';

  }
}