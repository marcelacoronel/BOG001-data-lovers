import { buscarPokemon,randomPokemon,probabilidadCombate, detalleEvoluciones, candyPokemon, ordenarPokemon } from './data.js';
// import { verDatos } from './data.js'

// import data from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js';


//declaracion de la variable
let nombreNumeroPokemon = document.getElementById('numPokemon');

const arregloData=data.pokemon;

//declaracion del evento
document.getElementById('boton').addEventListener('click',function(){llenarFrontPokemon(nombreNumeroPokemon.value)});
document.getElementById('vistaConoceP').style.display='none';
document.getElementById('carateristicas').style.display='none';
document.getElementById('vistaEvoluciones').style.display='none';


const botonNav = document.getElementById('btnMenuNav');
botonNav.addEventListener('click', showMenu);

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
document.getElementById('backEvolution').addEventListener('click', regresarEvolution);
document.getElementById('ordenarPk').addEventListener('click', ordenarLista);
document.getElementById('btnCloseFeaturesPok').addEventListener('click', cerrarCaracteristicasPokemon);



function showMenu(){
  let menu=document.getElementById('menu');
  if(menu.classList.contains("disableMenu")){
    menu.classList.remove("disableMenu");
    menu.classList.add("enableMenu");
  }
  else{
    menu.classList.remove("enableMenu");
    menu.classList.add("disableMenu");
  }
}


function regresarEvolution(){
  document.getElementById('vistaEvoluciones').style.display='flex';
  document.getElementById('vistaDetalleEvoluciones').style.display='none';
 
  // ----------------Limpiar la data
  document.getElementById('actualPokemon').innerHTML = null;
  document.getElementById('candyEvolution').innerHTML = null;
  document.getElementById('prevEvolution').innerHTML = null;
  document.getElementById('nextEvolution').innerHTML = null;
  document.getElementsByClassName('boxPrev').innerHTML = null;
  document.getElementsByClassName('boxNext').innerHTML = null;


}


function inicio(){
  document.getElementById('vistaPpal').style.display='block';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='none';
  showMenu();
 
}

function conocerP(){
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='block';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='none';
 
  showMenu();
  
}

function evoluciones(){
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='block';
  document.getElementById('vistaCombate').style.display='none';
  showMenu();
 


  //------IMPRIMIR LISTA DE TODOS LOS POKEMON EN PANTALLA
  
    arregloData.forEach(elemento=> {
      let contenedorPpal=document.getElementById('listaPokemon');
      let containerPokemon=document.createElement("div");
      containerPokemon.classList.add('boxPokemon');
      let imprimirNum=document.createElement("p")
      imprimirNum.innerHTML=elemento.num;
      containerPokemon.appendChild(imprimirNum);
      
      let imprimirImagen=document.createElement("img");
      imprimirImagen.src=elemento.img;
      imprimirImagen.name=elemento.name; // Le agrego un atributo name para usarlo despues
      containerPokemon.appendChild(imprimirImagen);
      
      let imprimirName=document.createElement("h3");
      imprimirName.innerHTML=elemento.name;
      containerPokemon.appendChild(imprimirName);
      contenedorPpal.appendChild(containerPokemon);
    });

  const tarjeta=document.querySelector('#listaPokemon');
  tarjeta.addEventListener('click', onClick);
  //llamar la función que va a traer evolucion con containerPokemom con el AddLIsterner 

}

const onClick= (e) =>{
  // ----------------Limpiar la data
  document.getElementById('actualPokemon').innerHTML = null;
  document.getElementById('candyEvolution').innerHTML = null;
  document.getElementById('prevEvolution').innerHTML = null;
  document.getElementById('nextEvolution').innerHTML = null;
  document.getElementsByClassName('boxPrev').innerHTML = null;
  document.getElementsByClassName('boxNext').innerHTML = null;


// -----------Cargar datos de evolución del pokemon
  // console.log(e.target.getAttribute('name'))
  let nombre = e.target.textContent;
  // Al presionar la imagen no se obtiene el nombre del Pokemon, solo al presionar nombre o numero, por lo que aqui lo tomamos de otro lado
  if (!nombre)
  {
    nombre = e.target.getAttribute('name')
  }


  // console.log(nombre);
  document.getElementById('vistaEvoluciones').style.display='none';
  const rtaEvolucion = detalleEvoluciones(nombre, arregloData);
  // console.log(rtaEvolucion);
  document.getElementById('vistaDetalleEvoluciones').style.display='flex';

  let NumPokemonActual=document.createElement("p");
  NumPokemonActual.innerHTML="No. "+ rtaEvolucion.num;
  document.getElementById("actualPokemon").appendChild(NumPokemonActual);
  let ImagenPokemonActual=document.createElement("img");
  ImagenPokemonActual.src=rtaEvolucion.img;
  document.getElementById("actualPokemon").appendChild(ImagenPokemonActual);
  let NamePokemonActual=document.createElement("p");
  NamePokemonActual.innerHTML=rtaEvolucion.name;
  document.getElementById("actualPokemon").appendChild(NamePokemonActual);


  let CandyPokemonActual=document.createElement("p");
  CandyPokemonActual.innerHTML= "Candy: " + rtaEvolucion.candy;
  document.getElementById('candyEvolution').appendChild(CandyPokemonActual);

  if ( rtaEvolucion.candy_count!=null){
    let cantidadCandyActual=document.createElement("p");
    cantidadCandyActual.innerHTML= "Cantidad Actual: "+rtaEvolucion.candy_count;
    document.getElementById('candyEvolution').appendChild(cantidadCandyActual);
  }
  
 
  if(rtaEvolucion.prev_evolution == null){
    document.getElementById('containerPrev').style.display='none';
  }

  if (rtaEvolucion.prev_evolution != null){
    document.getElementById('containerPrev').style.display='flex';
    rtaEvolucion.prev_evolution.forEach(elemento=>{
    
    let containerPrevEvolution=document.getElementById('prevEvolution');
    let containerPokemonPrev=document.createElement("div");
    containerPokemonPrev.classList.add('boxPrev');
    
    let imprimirNumEvolucion=document.createElement("p")
    imprimirNumEvolucion.innerHTML=elemento.num;
    let numero=elemento.num;
    containerPokemonPrev.appendChild(imprimirNumEvolucion);
    
    let rtaCandyPrev=candyPokemon(arregloData,numero);

    let ImagenPokemonPrev=document.createElement("img");
    ImagenPokemonPrev.src=rtaCandyPrev.img;
    containerPokemonPrev.appendChild(ImagenPokemonPrev);

    let imprimirNameEvolucion=document.createElement("p")
    imprimirNameEvolucion.innerHTML=elemento.name;
    containerPokemonPrev.appendChild( imprimirNameEvolucion);
    containerPrevEvolution.appendChild(containerPokemonPrev);

    if ( rtaCandyPrev.candy_count!=null){
      let cantidadCandyPrev=document.createElement("p");
      cantidadCandyPrev.innerHTML= "Cantidad Prev: "+rtaCandyPrev.candy_count;
      document.getElementById('candyEvolution').appendChild(cantidadCandyPrev);
    }

  });
 } 
 
 if(rtaEvolucion.next_evolution == null){
  document.getElementById('containerNext').style.display='none';
}
 
 if (rtaEvolucion.next_evolution != null) {
  document.getElementById('containerNext').style.display='flex';
    rtaEvolucion.next_evolution.forEach(elemento=>{

    let containerNextEvolution=document.getElementById('nextEvolution');
    let containerPokemonNext=document.createElement("div");
    containerPokemonNext.classList.add('boxNext');
    
    let imprimirNumEvolucion=document.createElement("p")
    imprimirNumEvolucion.innerHTML=elemento.num;
    let numero=elemento.num;
    containerPokemonNext.appendChild(imprimirNumEvolucion);
    
    let rtaCandyNext=candyPokemon(arregloData,numero);

    let ImagenPokemonNext=document.createElement("img");
    ImagenPokemonNext.src=rtaCandyNext.img;
    containerPokemonNext.appendChild(ImagenPokemonNext);

    let imprimirNameEvolucion=document.createElement("p")
    imprimirNameEvolucion.innerHTML=elemento.name;
    containerPokemonNext.appendChild( imprimirNameEvolucion);
    containerNextEvolution.appendChild(containerPokemonNext);

    if ( rtaCandyNext.candy_count!=null){
      let cantidadCandyNext=document.createElement("p");
      cantidadCandyNext.innerHTML= "Cantidad Next: "+ rtaCandyNext.candy_count;
      document.getElementById('candyEvolution').appendChild(cantidadCandyNext);
    }

    });

  }

}


// ----------FUNCIÓN PARA ORDENAR LISTA DE POKEMON
function ordenarLista(){
  document.getElementById('listaPokemon').innerHTML = null;
  const listaOrdenada= ordenarPokemon(arregloData);
  evoluciones(listaOrdenada);
  showMenu();
}


// ------FUNCIÓN HISTORIA COMBATE
function combate(){
  document.getElementById('vistaPpal').style.display='none';
  document.getElementById('vistaConoceP').style.display='none';
  document.getElementById('vistaEvoluciones').style.display='none';
  document.getElementById('vistaCombate').style.display='flex';
  // listaMenu.style.display = 'none';
  // document.getElementById('vistaCombate').style.display='block';
  showMenu();
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


  // ------------FUNCIÓN PARA HISTORIA CONOCE TU POKEMON LLENA VISTA CON DATOS DEL POKEMON
function llenarFrontPokemon(valor){
  document.getElementById('vistaDetalleEvoluciones').style.display='none';
  const arreglo=data.pokemon;
  const pokemon = buscarPokemon(valor,arreglo);
  
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

}

function cerrarCaracteristicasPokemon(){
  document.getElementById('carateristicas').style.display='none';
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







