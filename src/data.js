import data from './data/pokemon/pokemon.js';
export const buscarPokemon = (valor,arreglo) => {
//  console.log(arreglo)
  // const arreglo = data.pokemon // Guarde la data del arreglo de pokemon


  // Se define la constante pokemon para el resultado de la busqueda y luego se busca en el arreglo con la propiedad find
  const pokemon = arreglo.find(pokemon => pokemon.name.toLowerCase() == valor.toLowerCase() || pokemon.id == valor)
  return pokemon
};


// export const buscarTodos=(arregloData)=>{


// }

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 
export const randomPokemon = () => {

    let numeroPokemon= getRandomInt(1,151)
    console.log(numeroPokemon)
   const resultados = data.pokemon.find(pokemon => pokemon.id == numeroPokemon)

   console.log(resultados) 
   return resultados

  
}


export const probabilidadCombate = (numeroPokemon,numeroPokemonRival) =>{

  const tuPokemon = buscarPokemon(numeroPokemon.toString(), data.pokemon)
  console.log(tuPokemon)

  const pokemonRival = buscarPokemon(numeroPokemonRival.toString(),data.pokemon)
  console.log(pokemonRival)
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
 console.log(total)  
 return total
}