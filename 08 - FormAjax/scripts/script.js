function envio() {

  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var location = document.getElementById('location').value;

  $.ajax({
    method: "POST",
    url: "http://localhost:3000/users",
    data: {
      "id": id,
      "name": name,
      "location": location
    },
    success: function() {
      alert("Dados inseridos com sucesso!");
    },
    error: function() {
      alert("Ocorreu um erro! Tente novamente.")
    },
  })
}