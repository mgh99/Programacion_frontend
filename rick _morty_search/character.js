const input = document.getElementById("search"),
  display = document.getElementById("characters");

input.addEventListener("keyup", (e) => {
  let output = "";
  fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((character) => {
        if (e.target.value.length >= 1) {
          output += `          
            <div class="card mt-5 mx-auto" style="width: 18rem">
            <img src="${
              character.image
            }" class="card-img-top" alt="character image" />
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="badge badge-pill badge-info">${
                      character.gender
                    }</p>
                    <p class="badge badge-pill ${
                      character.status === "Alive"
                        ? "badge-success"
                        : "badge-danger"
                    }">${character.status}</p>
                    <p class="badge badge-pill badge-info">${
                      character.species
                    }</p>
                    <p class="badge badge-pill badge-secondary">${
                      character.location.name
                    }</p>
                </div>
            </div>        
          `;
        }
      });
      display.innerHTML = output;
    });
  output = "";
});
