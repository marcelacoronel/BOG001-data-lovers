import { example } from './data.js';
// import { verDatos } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example,data);
console.log(example,data);


document.getElementById('boton').addEventListener('click',iniciar);

function iniciar(){
const arreglos = data;
let datos = arreglos.map( arreglo => {
    return {
        id: arreglo.id,
        name: arreglo.name
    }
})
console.log("datos=>",datos);

}






