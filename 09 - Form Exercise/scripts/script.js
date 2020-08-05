/*Criando usuários*/

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
    picture == '' || password == '' || 
    passwordCheck == '' || gender == '') {
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

/*Deletando usuários*/

function deleteUser(id) {
  fetch(`http://localhost:3000/characters/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })
}

/*Editando usuários*/

function editUser(id) {

  var update = document.getElementById("updateUser");
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  update.addEventListener("click", updateUser => {
    var idCheck = id;
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var picture = document.getElementById('picture').value;
    var password = document.getElementById('password').value;
    var passwordCheck = document.getElementById('passwordCheck').value;

    var gender = document.getElementsByName('gender')
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        console.log(gender[i].value);
        gender = gender[i].value;
      }
    }

    /*Validação se algum campo foi deixado vazio*/

    if (name == '' || lastName == '' || age == '' ||
      picture == '' || password == '' ||
      passwordCheck == '' || gender == '') {
      alert("Favor preencher todos os campos do formulário.")

      /*Validação da igualdade de senhas*/
    } else if (password !== passwordCheck) {
      alert("As senhas não conferem. Favor verificar")

      /*Transformando o nome e sobrenome em uma única string + requisição Ajax*/
    } else {
      var fullName = `${name} ${lastName}`;

      $.ajax({
        method: "PUT",
        url: `http://localhost:3000/characters/${idCheck}`,
        data: {
          "id": id,
          "fullName": fullName,
          "age": age,
          "picture": picture,
          "password": password,
          "gender": gender,
        },

        success: function () {
          alert("Modificações feitas com sucesso!");
        },
        error: function () {
          alert("Ocorreu um erro! Tente novamente.")
        },
      })
    }
  })
}

/*Populando pagina de usuários com Fetch*/
function fetchData() {
  fetch("http://localhost:3000/characters").then(response => {
    if (!response.ok) {
      throw Error("ERROR!");
    }
    return response.json();

  }).then(data => {
    const html = data.map(character => {
      return `
        <div class="character card col-12 col-sm-6">
          <img src="${character.picture}" class="charPic card-img-top text-center justify-content-center"/>
          <h5 class="card-title text-center">${character.fullName}</h5>
          <p class="card-text text-center">${character.age} anos</p>
          <div class="addDel">
          <button class="btn btn-light" onClick="deleteUser(${character.id})">Excluir</a>
          <button type="button" class="btn btn-light" onClick="editUser(${character.id})">Editar</a>
          </div>
        </div>
      `
    }).join('');
    document
      .querySelector('#userContent')
      .insertAdjacentHTML('afterbegin', html)

  }).catch(error => {
    console.log(error);

  })
}

fetchData();


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





