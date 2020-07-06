import { buscarPokemon } from '../src/data.js';


describe('buscarPokemon', () => {
  it('is a function', () => {
    expect(typeof buscarPokemon).toBe('function');
  });

  it('returns `buscarPokemon`', () => {
    expect(buscarPokemon()).toBe('buscarPokemon');
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
