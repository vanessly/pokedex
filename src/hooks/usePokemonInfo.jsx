import { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

const P = new Pokedex();

const usePokemonInfo = (pokemonName) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonAndSpeciesInfo = async () => {
            if (!pokemonName) return; 

            try {
                const response = await P.getPokemonByName(pokemonName);
                const speciesResponse = await fetch(response.species.url).then(res => res.json());

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
                    weight: (Math.round(response.weight / 10 * 100) / 100).toFixed(1), // Convert to kg
                    height: (Math.round(response.height / 10 * 100) / 100).toFixed(1), // Convert to meters
                    desc: speciesResponse.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text.replace(/[\n\f]/g, ' ')
                });
            } catch (error) {
                console.error("Failed to fetch pokemon or species info:", error);
                // Handle error (e.g., set error state, notify user, etc.)
            }
        };

        fetchPokemonAndSpeciesInfo();
    }, [pokemonName]); 

    return pokemon;
};

export default usePokemonInfo;
