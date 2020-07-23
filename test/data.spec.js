import { buscarPokemon, detalleEvoluciones, candyPokemon, ordenarPokemon, getRandomInt, randomPokemon, probabilidadCombate } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';


const arreglo=data.pokemon;



describe('buscarPokemon', () => {
  it('es una function', () => {
    expect(typeof buscarPokemon).toBe('function');
  })

  it('25 existe en el array', () => {
    expect(buscarPokemon("25",arreglo)).toHaveProperty('name', "Pikachu");
    expect(buscarPokemon("25",arreglo)).toHaveProperty('num', "025");
  })

  it('Pikachu existe en el array', () => {
    expect(buscarPokemon("Pikachu",arreglo)).toHaveProperty('name', "Pikachu");
    expect(buscarPokemon("Pikachu",arreglo)).toHaveProperty('num', "025");
  })
  
  it('buscarPokemon retorna false para null', () => {
    expect(buscarPokemon(null,arreglo)).toBe(false);
  })

  it('buscarPokemon contiene id 100', () => {
    expect(buscarPokemon("100",arreglo)).toHaveProperty('id', 100);
  })

});

describe('detalleEvoluciones', () => {
  it('is a function', () => {
    expect(typeof detalleEvoluciones).toBe('function');
  })

  it('Pokemon numero 1 existe y es Bulbasaur', () => {
    expect(detalleEvoluciones(1,arreglo)).toHaveProperty('name', "Bulbasaur");
  })

  it('Retornar que las evoluciones de Bulbasaur son 2', () => {
    expect(detalleEvoluciones(1,arreglo).next_evolution.length).toBe(2);
  })

});

describe('ordenarPokemon', () => {
  it('is a function', () => {
    expect(typeof ordenarPokemon).toBe('function');
  })

  it('Verrificar que ordena la data, el primero pokemon del arreglo debe ser Abra', () => {
    expect(ordenarPokemon(arreglo)[0]).toHaveProperty('name', "Abra");
  })

  it('Verrificar que ordena la data, el ultimo pokemon del arreglo debe ser Zubat', () => {
    expect(ordenarPokemon(arreglo)[150]).toHaveProperty('name', "Zubat");
  })

});

describe('candyPokemon', () => {
  it('is a function', () => {
    expect(typeof candyPokemon).toBe('function');
  })

  it('Pokemon numero 12 existe y tiene como candy: Caterpie Candy', () => {
    expect(candyPokemon(arreglo, 12)).toHaveProperty('candy', "Caterpie Candy");
  })

});

describe('getRandomInt', () => {
  it('is a function', () => {
    expect(typeof getRandomInt).toBe('function');
  })

  it('Verificar que retorna un numero entre 1 y 10', () => {
    expect(getRandomInt(1, 10)).toBeGreaterThanOrEqual(1);
    expect(getRandomInt(1, 10)).toBeLessThanOrEqual(10);
  })

  it('Verificar que retorna un numero entre 255 y 1000', () => {
    expect(getRandomInt(255, 1000)).toBeGreaterThanOrEqual(255);
    expect(getRandomInt(255, 1000)).toBeLessThanOrEqual(1000);
  })

});

describe('randomPokemon', () => {
  it('is a function', () => {
    expect(typeof randomPokemon).toBe('function');
    
  })

  it('Verificar que retorna un pokemon', () => {
    expect(randomPokemon()).toHaveProperty('id');
    expect(randomPokemon()).toHaveProperty('type');
    expect(randomPokemon()).toHaveProperty('num');
    expect(randomPokemon()).toHaveProperty('img');
  })

});

describe('probabilidadCombate', () => {
  it('is a function', () => {
    expect(typeof probabilidadCombate).toBe('function');
    
  })

  it('Verificar que el pokemon del usuario gana al rival', () => {
    expect(probabilidadCombate(1, 7)).toBe(1);
  })

  it('Verificar que el pokemon del rival gana al usuario', () => {
    expect(probabilidadCombate(1, 4)).toBe(-1);
  })

  it('Verificar que ambos pokemones quedan igual', () => {
    expect(probabilidadCombate(150, 151)).toBe(0);
  })

});


