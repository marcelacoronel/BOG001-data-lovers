import { buscarPokemon } from './data.js';
// import { verDatos } from './data.js'

// import data from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js';


//declaracion de la variable
let nombreNumeroPokemon = document.getElementById('numPokemon')
//declaracion del evento
document.getElementById('boton').addEventListener('click',function(){llenarFrontPokemon(nombreNumeroPokemon.value)});

document.getElementById('botonMenu2').addEventListener('click', conocerP);
// completar los botones y su id?///
function conocerP(){
  console.log('Click')
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='block';
  //document.getmen completra???
}

// Evento cuando se presiona el enter en el input del nombre del pokemon
nombreNumeroPokemon.addEventListener("keyup", function(event) {
    // Numero 13 es el "enter" del teclado
    if (event.keyCode === 13) {
      // Cancela accion por defecto para ejecutar este enter
      event.preventDefault();
      // accion que se ejecuta cuando leda enter
      document.getElementById("boton").click();
    }
  });

// function iniciar(){
//     const arreglos = data;
//     let datos = arreglos.map( arreglo => {
//         return {
//             id: arreglo.id,
//             name: arreglo.name
//         }
//     })
//     console.log("datos=>",datos);

// }

function llenarFrontPokemon(valor){
   const pokemon = buscarPokemon(valor,data)

   if (!pokemon)
   {
     alert('No se encontro el pokemon')
     return
   }


    document.getElementById("Numero").innerHTML = "numero:"+pokemon.id
    document.getElementById("Nombre").innerHTML = pokemon.name
    document.getElementById("imagen").src = pokemon.img
    document.getElementById("peso").innerHTML=pokemon.weight
    
    console.log(pokemon)
}






