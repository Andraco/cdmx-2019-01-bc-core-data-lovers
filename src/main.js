const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido = document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');
const pantalla3 = document.getElementById('pantalla3')
const pantalla2 = document.getElementById('pantalla2');
const showPokemons = document.getElementById('showPokemons');
const root = document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas')
const dataPokemon = window.POKEMON.pokemon;
const forWeight = document.getElementById("forWeight");


//Funcion imprime nombre de bienvenida
btngetName.addEventListener("click", () => {

  const name = trainerName.value;
  bienvenido.innerHTML = '¡Hola entrenador ' + name + '. Bienvenido!';
  sectionName.style.display = "none";
  pantalla2.style.display = "block"






  })


//funcion que jala la data con la prepiedades que especifique

const printData = (data) => {
  root.innerHTML = '';

  data.forEach(pokemon => {
    let namePokemon = `<div class="tarjeta"> <h2> ${pokemon.num} </h2> <h3> ${pokemon.name} </h3>    <figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>
    <p> TYPE: ${pokemon.type} </p>
    <p>HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>CANDY:${pokemon.candy}</p>
    <p>CANDY COUNT:${pokemon.candy_count}</p>
    <p>EGG: ${pokemon.egg}</p>
    <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
    <p>SPAWN TIME:${pokemon.spawn_time}</p>
    <p>MULTIPLIERS:${pokemon.multipliers}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> </div>
    `

    root.insertAdjacentHTML("beforeend", namePokemon);


  })
}


//funcion que imprime la data filtrada por elementos
for (let i = 0; i < cajitas.length; i++) {
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id;
    let pokemonType = window.pokemon.filterPokemons(dataPokemon, elementPokemon);
    window.pokemon.ordenarPorNombre(pokemonType);
    printData(pokemonType);

  });


}
//funcion de peso 

forPeso.addEventListener("click",() => {
  console.log(forWeight)
  const pokemonTotalPeso =  window.pokemon.totalWeightPokemon(dataPokemon);
  root.innerHTML= pokemonTotalPeso;



});


showPokemons.addEventListener("click",() => {
   printData(dataPokemon)

})