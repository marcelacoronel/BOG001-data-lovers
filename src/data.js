
export const buscarPokemon = (valor,arreglo) => {
//  console.log(arreglo)
  // const arreglo = data.pokemon // Guarde la data del arreglo de pokemon


  // Se define la constante pokemon para el resultado de la busqueda y luego se busca en el arreglo con la propiedad find
  const pokemon2 = arreglo.find(pokemon2 => pokemon2.name.toLowerCase() == valor.toLowerCase() || pokemon2.id == valor)
  return pokemon2
};


export const detalleEvoluciones = (nombre, arregloData) =>{
 
  const evolucion=arregloData.find(elemento=>elemento.name==nombre ||elemento.num==nombre ||elemento.img==nombre);
  
  return evolucion;
  
}

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



