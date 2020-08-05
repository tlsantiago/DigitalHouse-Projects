function fetchData() {
  fetch("http://localhost:3000/characters").then(response => {
    if(!response.ok) {
      throw Error("ERROR!");
    }
    return response.json();

  }).then(data => {
    const html = data.map(character => {
      return `
        <div class="character card">
          <img src="${character.picture}" class="charPic card-img-top text-center justify-content-center"/>
          <h5 class="card-title text-center">Nome: ${character.fullName}</h5>
          <p class="card-text text-center">Idade: ${character.age}</p>
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