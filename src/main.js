/* Manejo del DOM */
const rootNode   = document.getElementById('root');
const rootStatNode = document.getElementById('stats');
const rootSelect = document.getElementById('select');
const selectType = document.getElementById('selectType');
const selectWeaknesses = document.getElementById('selectWeaknesses');
const vamosAVer = document.getElementById('funciona');
var pokemonStats, filteredTypeData, filteredWeakData;
document.addEventListener("DOMContentLoaded", load, false);

function load(){
  loadPokemon(ourData);
  pokemonStats = window.computeStats(ourData);
  loadStats(pokemonStats);
  selectType.onchange = function(e) {
    e.preventDefault();
    filteredTypeData = window.filterData(ourData, {type: selectType.value});
    removeAll();
    loadPokemon(filteredTypeData);
    pokemonStats = window.computeStats(filteredTypeData);
    loadStats(pokemonStats);
  }
  selectWeaknesses.onchange = function(e){
    e.preventDefault();
    filteredWeakData = window.filterData(ourData, {weaknesses: selectWeaknesses.value});
    removeAll();
    loadPokemon(filteredWeakData);
    pokemonStats = window.computeStats(filteredWeakData);
    loadStats(pokemonStats);
  }
}

function removeAll(){
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  while (rootStatNode.firstChild) {
    rootStatNode.removeChild(rootStatNode.firstChild);
  }
}

function loadStats(stats){
  for (var key in stats){
    const statNode = document.createElement("div");
    statNode.className = "statNode col-sm-3";
    statNode.innerHTML = key + ": " + stats[key];
    rootStatNode.appendChild(statNode);
  }
};



function loadPokemon(data){
  data.forEach(function(pokemon) {
    const pokemonNode = document.createElement("div");
    const w100        = document.createElement("div");

    pokemonNode.id = pokemon.name;
    pokemonNode.className = "pokemonNode col-sm-3";
    pokemon.type.forEach(function(pokemonType){
      pokemonNode.className += " " + pokemonType;
    });
    pokemonNode.innerHTML =  '<div class="card" style="width: 15rem;">'+
                                '<img id="image"src="'  + pokemon.img + '"></img>'+
                                '<div class="card-body">'+
                                  '<h5 class="card-title">'+ pokemon.name + '</h5>' +
                                  '<p class="card-text">' + pokemon.type + '</p>' + 
                                  '<button type="button" class="btn btn-primary" id="funciona">'+ "¡Yo te elijo!" + '</button>' +                            
                                '</div>'
                              '</div>';


                            
    rootNode.appendChild(pokemonNode);

    w100.className = "w-100";
  });
}

// function agregarElementos(){ 
//   var lista=document.getElementById("selectType"); 
//   data.forEach(function(data,index){
//   var linew= document.createElement("li");    
//   var contenido = document.createTextNode(data.name+' '+data.type);
//   lista.appendChild(linew);
//   linew.appendChild(contenido);

// })
// }
// agregarElementos();

// function getPokemonTypes(pokemon){

// }