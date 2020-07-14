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

  it.only('25 existe en el array', () => {
      expect(buscarPokemon("25",arreglo)).toBe('25');
  });
  
  it('buscarPokemon retorna false para " "', () => {
      expect(buscarPokemon("")).toBe(false);
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
