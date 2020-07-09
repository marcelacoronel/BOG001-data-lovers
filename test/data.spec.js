import { buscarPokemon } from '../src/data.js';
import pokemon from '../src/data/pokemon/pokemon.js';


describe('buscarPokemon', () => {
  it('is a function', () => {
    expect(typeof buscarPokemon).toBe('function');
  });

  it('return pokemon ', () => {
    expect(buscarPokemon(pokemon([])).toBe(pokemon));
  });

    it('Pikachu existe en el array', () => {
        expect(buscarPokemon('25',pokemon)).toContain('25');
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
