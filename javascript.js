let url = `https://pokeapi.co/api/v2/pokemon/`;

let pagenATION = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`;

let pageChange = document.querySelector(".pageChange");


for (let index = 1; index < 50; index++) {
    var id = index;
    createPokemon(id);
  }


async function createPokemon() {
  try {
    let url1 = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let dataFetch = await fetch(url1);

    let data = await dataFetch.json();

    console.log(data);

    // let beta =data.sort((a,b)=>a.id-b.id)

    // console.log(beta);

    createName(data);
    //  console.log(result);
  } catch (e) {
    console.log(e);
  }
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

// style="width: 18rem;"

function createName(data) {
  let { id, height, weight, name } = data;

  let poke_type = data.types.map((ele) => {
    return ele.type.name;
  });

  console.log(poke_type);

  let card = document.createElement("div");
  card.classList.add("col-lg-3");

  card.classList.add("col-sm-12");

  let cardContent = `
      <div class="card card__side--front-1" style="width: 18rem;">
    
     <div class="card-body">
     <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

     " class="card-img-top" alt="${name}">
     <h4 class="card-title">${id}</h4>
         <h5 class="card-title">${name}</h5>
         <div class="card-p ">
         <h6 class="card-title1">Types :${poke_type}</h6>
         <p class="card-text">Height :${height}</p>
         <p class="card-text">weight :${weight}</p>
         
     </div>
        
     </div>
     </div>`;

  card.innerHTML = cardContent;
  let container = document.querySelector(".row");

  container.append(card);
}
createPokemon();
