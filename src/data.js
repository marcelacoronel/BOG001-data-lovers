import data from './data/pokemon/pokemon.js';
export const buscarPokemon = (valor,arreglo) => {
  if (!valor)
    return false

  // Se define la constante pokemon para el resultado de la busqueda y luego se busca en el arreglo con la propiedad find
  const pokemon2 = arreglo.find(pokemon2 => pokemon2.name.toLowerCase() == valor.toLowerCase() || pokemon2.id == valor)
  return pokemon2
};


// ----Función para consultar las evoluciones de un pokemon
export const detalleEvoluciones = (nombre, arregloData) =>{
  const evolucion=arregloData.find(elemento=>elemento.name==nombre ||elemento.num==nombre);
  return evolucion;
}

// ----Función para consultar los candy por evoluciones de un pokemon
export const candyPokemon = (arregloData,numero)=>{
  const candy=arregloData.find(elemento=>elemento.num==numero)
  return candy;
}

// --------FUNCIÓN PARA ORDENAR LISTA DE POKEMON----FUNCIONA
export const ordenarPokemon = (arregloData)=>{
  const ordenarData=arregloData.sort((prev,next) => {
    const ordenar = prev.name > next.name ? 1: -1;
    return ordenar;
  });
  return ordenarData;
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const randomPokemon = () => {

    let numeroPokemon= getRandomInt(1,151)
    // console.log(numeroPokemon)
   const resultados = data.pokemon.find(pokemon => pokemon.id == numeroPokemon)

   return resultados
}


export const probabilidadCombate = (numeroPokemon,numeroPokemonRival) =>{
  const tuPokemon = buscarPokemon(numeroPokemon.toString(), data.pokemon)
  const pokemonRival = buscarPokemon(numeroPokemonRival.toString(),data.pokemon)
  let total=0
  // estos for comparan las fortalezas de tu pokemon con las debilidades del rival en caso de conseguirla
  // suman 1
  for (let index = 0; index < tuPokemon.type.length; index++) {
    for (let index2 = 0; index2 < pokemonRival.weaknesses.length; index2++) {
      if (tuPokemon.type[index]==pokemonRival.weaknesses[index2]) {
        total++
        
      }
      
    }
    
  }
  //  estos for comparan las fortalezas de tu pokemon con las debilidades del rival en caso de conseguirla
  // resta -1
  for (let index = 0; index < tuPokemon.weaknesses.length; index++) {
    for (let index2 = 0; index2 < pokemonRival.type.length; index2++) {
      if (tuPokemon.weaknesses[index]==pokemonRival.type[index2]) {
        total--
        
      }
      
    }
    
  }
//  console.log(total)  
 return total
}
