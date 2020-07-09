
export const buscarPokemon = (valor,arreglo) => {
//  console.log(arreglo)
  // const arreglo = data.pokemon // Guarde la data del arreglo de pokemon


  // Se define la constante pokemon para el resultado de la busqueda y luego se busca en el arreglo con la propiedad find
  const pokemon = arreglo.find(pokemon => pokemon.name.toLowerCase() == valor.toLowerCase() || pokemon.id == valor)
  return pokemon
};


// export const buscarTodos=(arregloData)=>{


// }