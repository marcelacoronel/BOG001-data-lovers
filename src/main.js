import { example } from './data.js';
// import { verDatos } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example,data);
console.log(example,data);

document.get
document.getElementById('boton').addEventListener('click',iniciar);

document.getElementById('vistaConocerP').addEventListener('click', conocerP);

function conocerP(){
document.getElementById('vistaPpal').style.display='none';
document.getElementById('vistaConocerP').style.display='block';


}

function iniciar(){
const arreglos=pokemon;
// let numero = document.getElementById('numPokemon').value;
// let mostrarDatos=example(arreglos,numero);
const mostrarDatos = arreglos.map((arreglo) => {
    return arreglo.id===2;
});
console.log(mostrarDatos);




}






