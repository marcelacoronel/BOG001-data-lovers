import { buscarPokemon } from '../src/data.js';
import pokemon from '../src/data/pokemon/pokemon.js';

const arreglo =pokemon;


describe('buscarPokemon', () => {
  it('is a function', () => {
    expect(typeof buscarPokemon).toBe('function');
  });

  it('return pokemon ', () => {
    expect(buscarPokemon(pokemon).toBe(true));
  });

  it('25 existe en el array', () => {
      expect(buscarPokemon("25",arreglo)).toContain(25);
  });
  
  it('buscarPokemon retorna false para " "', () => {
      expect(buscarPokemon("")).toBe(false);
  });

  it.only('buscarPokemon contiene id 25', () => {
    expect(buscarPokemon(25,arreglo)).toHaveProperty('id');
});

});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
