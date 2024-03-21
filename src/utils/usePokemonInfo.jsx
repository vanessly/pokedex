// usePokemonInfo.js
import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

const P = new Pokedex();

const usePokemonInfo = (pokemonName) => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        if (!pokemonName) return; // Ensure pokemonName is provided
        P.getPokemonByName(pokemonName)
        .then((response) => {
            setPokemon({
                id: response.id,
                name: response.name,
                image: response.sprites.other['official-artwork'].front_default,
                stats: response.stats.map(stat => ({
                    name: stat.stat.name,
                    value: stat.base_stat
                })),
                types: response.types.map(type => type.type.name),
                abilities: response.abilities.map(ability => ability.ability.name),
                weight: response.weight
            });
        });
    }, [pokemonName]); 
    return pokemon;
};

export default usePokemonInfo;
