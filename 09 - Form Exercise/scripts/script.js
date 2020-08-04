function send() {

  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastName').value;
  var age = document.getElementById('age').value;
  var picture = document.getElementById('picture').value;
  var password = document.getElementById('password').value;
  var passwordCheck = document.getElementById('passwordCheck').value;
  var newsletter = document.getElementById('newsCheckbox')

  if (id == '' || name == '' || lastName == '' || age == '' ||
    picture == '' || password == '' || passwordCheck == '') {
    alert("Favor preencher todos os campos do formulário.")  

  } else if (password !== passwordCheck) {
    alert("As senhas não conferem. Favor verificar")

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
        "newsletter": newsletter
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