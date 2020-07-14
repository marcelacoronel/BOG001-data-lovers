
export const buscarPokemon = (valor,arreglo) => {
//  console.log(arreglo)
  // const arreglo = data.pokemon // Guarde la data del arreglo de pokemon


  // Se define la constante pokemon para el resultado de la busqueda y luego se busca en el arreglo con la propiedad find
  const pokemon2 = arreglo.find(pokemon2 => pokemon2.name.toLowerCase() == valor.toLowerCase() || pokemon2.id == valor)
  return pokemon2
};


export const detalleEvoluciones=(nombre, arregloData) =>{
 console.log(nombre);
 
  const evolucion=arregloData.find(elemento=>elemento.name==nombre);
  console.log(evolucion);
  
  return evolucion;
  
}
// export const buscarTodos=(arregloData)=>{


// }