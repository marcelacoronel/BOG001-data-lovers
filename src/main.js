import { buscarPokemon,randomPokemon,probabilidadCombate } from './data.js';
// import { verDatos } from './data.js'

// import data from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js';


//declaracion de la variable
let nombreNumeroPokemon = document.getElementById('numPokemon');
let contador=1;

//declaracion del evento
document.getElementById('boton').addEventListener('click',function(){llenarFrontPokemon(nombreNumeroPokemon.value)});
document.getElementById('vistaConoceP').style.display='none';
document.getElementById('carateristicas').style.display='none';
document.getElementById('vistaEvoluciones').style.display='none';


const menuNav = document.getElementsByClassName('menu-bar')[0];
const listaMenu= document.getElementsByClassName('menu')[0];
listaMenu.style.display = 'none';

menuNav.addEventListener("click", verMenu);

document.getElementById('botonMenu1').addEventListener('click', inicio);
document.getElementById('botonMenu2').addEventListener('click', conocerP);
document.getElementById('botonMenu3').addEventListener('click', evoluciones);
document.getElementById('botonMenu4').addEventListener('click', combate);
document.getElementById('botonVolver').addEventListener('click', volverJugar);

// evento iniciar combate
document.getElementById('titulopoke').addEventListener('click',iniciarcombate)
document.getElementById('pokebola').addEventListener('click',iniciarcombate)

let nombreNumeroPokemon2 = document.getElementById('numPokemon2');
document.getElementById('botonSeleccionar').addEventListener('click',function(){seleccionarPokemon(nombreNumeroPokemon2.value)})


function verMenu(){
if(contador==1){
  listaMenu.style.display = 'block';
  contador=0;
}
else{
  listaMenu.style.display = 'none';
  contador=1
}

}



function inicio(){
  document.getElementById('vistaPpal').style.display='block';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='none';
  listaMenu.style.display = 'none';
}

function conocerP(){
  // console.log('Click')
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='block';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='none';
  listaMenu.style.display = 'none';
  //document.getmen completra???
}

function evoluciones(){
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='block';
  document.getElementById('vistaCombate').style.display='none';
  listaMenu.style.display = 'none';


  //---IMPRIMIR LISTA DE TODOS LOS POKEMON EN PANTALLA
  const arregloData=data.pokemon;
  // const verTodos=buscarTodos(arregloData);
console.log(arregloData.id);

//     arregloData.num.forEach(elemento=> {
//     let imprimirNum=document.createElement("p")
//     imprimirNum.innerHTML=elemento;
//     document.getElementById('numPokemon').appendChild(imprimirNum);
// }
 // class="numPokemon">
  // class="imgPokemon">
  // class="namePokemon"

}

function combate(){
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='flex';
  listaMenu.style.display = 'none';
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

function llenarFrontPokemon(valor){


  const arreglo=data.pokemon;
  const pokemon = buscarPokemon(valor,arreglo)
//   document.getElementById('carateristicas').style.display='block';

 


  

  document.getElementById('carateristicas').style.display='flex';

  if (!pokemon)
  {
    alert('No se encontro el pokemon')
    return
  }
  

   //Se limpia la data
  document.getElementById("weaknesses").innerHTML = null
  document.getElementById("multipliers").innerHTML = null
  document.getElementById("typePokemon").innerHTML = null
  

   // Se llena la data del pokemon
    document.getElementById("textNumber").innerHTML = "No "+pokemon.num
    document.getElementById("textName").innerHTML = pokemon.name
    document.getElementById("alturavalordata").innerHTML = pokemon.height
    document.getElementById("pesovalordata").innerHTML = pokemon.weight
    document.getElementById("imgPok").src = pokemon.img

    // document.getElementById("tipovalordata").innerHTML = pokemon.type
    // document.getElementById("debilidadesvalordata").innerHTML = pokemon.weaknesses;


    if (pokemon.multipliers != null){
      pokemon.multipliers.forEach(elemento=> {
        let imprimirMultipliers=document.createElement("p")
        imprimirMultipliers.innerHTML=elemento;
        document.getElementById('multipliers').appendChild(imprimirMultipliers);
        });
    }
    if(pokemon.multipliers == null){
      let imprimirMultipliers=document.createElement("p")
      imprimirMultipliers.innerHTML="No aplica";
      document.getElementById('multipliers').appendChild(imprimirMultipliers);
    }

    pokemon.type.forEach(elemento=> {
      let imprimirTipos=document.createElement("p")
      imprimirTipos.innerHTML=elemento;
      document.getElementById('typePokemon').appendChild(imprimirTipos);
      });

      pokemon.weaknesses.forEach(elemento=> {
        let imprimirDebilidades=document.createElement("p")
        imprimirDebilidades.innerHTML=elemento;
        document.getElementById('weaknesses').appendChild(imprimirDebilidades);
        });




          //-------------- PRIMERA FORMA REALIZADA PARA IMPRIMIR VARIOS VALORES DE UN ARREGLO
    // if (pokemon.multipliers != null)
    // {
    //   for (let index = 0; index < pokemon.multipliers.length; index++) {
    //     if(index == 0)
    //     {
    //       document.getElementById("multi1").innerHTML = pokemon.multipliers[index];
    //     }
    //     else if(index == 1)
    //     {
    //       document.getElementById("multi2").innerHTML = pokemon.multipliers[index];
    //     }
    //   }
    // }

    
    // console.log(pokemon)
}

let numeropokerival

function iniciarcombate(){
  document.getElementById('fondocombate1').style.display='none';
  document.getElementById('fondocombate2').style.display='flex';

  const pokemonrival = randomPokemon()
  numeropokerival=pokemonrival
  document.getElementById("pokeRival").src = pokemonrival.img
  document.getElementById("nombrepokemonrival").innerHTML = pokemonrival.name
}

function volverJugar(){
  iniciarcombate()
  document.getElementById('tupokemon1').style.display='flex'
  document.getElementById('tupokemon').style.display='none'
  document.getElementById("game").style.display = 'none'
  document.getElementById("barraRival").style.backgroundColor = '#49A941'
  document.getElementById("barraTuya").style.backgroundColor = '#49A941'
  document.getElementById("numPokemon2").value = null
}

function seleccionarPokemon(valor){
  
  const arreglo=data.pokemon;
  const pokemon = buscarPokemon(valor, arreglo) 
  if (!pokemon)
  {
    alert('No se encontro el pokemon')
    return
  }

  document.getElementById('tupokemon1').style.display='none'
  document.getElementById('tupokemon').style.display='flex'

  document.getElementById("pokeTuyo").src = pokemon.img
  document.getElementById("nombrepokemonTuyo").innerHTML = pokemon.name

  const resultados=probabilidadCombate(pokemon.id,numeropokerival.id)
  
  if(resultados==1){
    document.getElementById("resultado").innerHTML = "Victoria para"
    document.getElementById("namegame").innerHTML = pokemon.name
    document.getElementById("game").style.display = 'flex'
    document.getElementById("barraRival").style.backgroundColor = 'red'
  }
  else if (resultados == 0){
    document.getElementById("resultado").innerHTML = "Empate entre"
    document.getElementById("namegame").innerHTML = pokemon.name+' y '+numeropokerival.name
    document.getElementById("game").style.display = 'flex'
  }
  else{
    document.getElementById("resultado").innerHTML = "Victoria para el rival"
    document.getElementById("namegame").innerHTML = numeropokerival.name
    document.getElementById("game").style.display = 'flex'
    document.getElementById("barraTuya").style.backgroundColor = 'red'
  }
}







