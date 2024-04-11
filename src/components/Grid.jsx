// Grid.jsx
import React, { useState, useEffect } from "react";
import About from './About'
import { FaTimes } from 'react-icons/fa';
import '../assets/styles/Grid.css';
import PokemonStats from '../components/PokemonStats';
import usePokemonInfo from '../hooks/usePokemonInfo';
import bug from '../assets/images/bug.png';
import dark from '../assets/images/dark.png';
import dragon from '../assets/images/dragon.png';
import electric from '../assets/images/electric.png';
import fairy from '../assets/images/fairy.png';
import fighting from '../assets/images/fighting.png';
import fire from '../assets/images/fire.png';
import flying from '../assets/images/flying.png';
import ghost from '../assets/images/ghost.png';
import grass from '../assets/images/grass.png';
import ground from '../assets/images/ground.png';
import ice from '../assets/images/ice.png';
import normal from '../assets/images/normal.png';
import poison from '../assets/images/poison.png';
import psychic from '../assets/images/psychic.png';
import steel from '../assets/images/steel.png';
import water from '../assets/images/water.png';
import bug_icon from '../assets/images/Bug_icon_SwSh.png'
import dark_icon from '../assets/images/Dark_icon_SwSh.png'
import dragon_icon from '../assets/images/Dragon_icon_SwSh.png'
import electric_icon from '../assets/images/Electric_icon_SwSh.png'
import fairy_icon from '../assets/images/Fairy_icon_SwSh.png'
import fighting_icon from '../assets/images/Fighting_icon_SwSh.png'
import fire_icon from '../assets/images/Fire_icon_SwSh.png'
import flying_icon from '../assets/images/Flying_icon_SwSh.png'
import ghost_icon from '../assets/images/Ghost_icon_SwSh.png'
import grass_icon from '../assets/images/Grass_icon_SwSh.png'
import ground_icon from '../assets/images/Ground_icon_SwSh.png'
import ice_icon from '../assets/images/Ice_icon_SwSh.png'
import normal_icon from '../assets/images/Normal_icon_SwSh.png'
import poison_icon from '../assets/images/Poison_icon_SwSh.png'
import psychic_icon from '../assets/images/Psychic_icon_SwSh.png'
import steel_icon from '../assets/images/Steel_icon_SwSh.png'
import water_icon from '../assets/images/Water_icon_SwSh.png'

function Grid() {
  // Get info about each pokemon
  const milotic = usePokemonInfo('milotic');
  const cinderace = usePokemonInfo('cinderace');
  const snorlax = usePokemonInfo('snorlax');
  const lucario = usePokemonInfo('lucario');
  const roserade = usePokemonInfo('roserade');
  const crobat = usePokemonInfo('crobat');
  const togekiss = usePokemonInfo('togekiss');
  const espeon = usePokemonInfo('espeon');
  const weavile = usePokemonInfo('weavile');
  const raichu = usePokemonInfo('raichu');
  const azumarill = usePokemonInfo('azumarill');
  const umbreon = usePokemonInfo('umbreon');
  const gengar = usePokemonInfo('gengar');
  const volcarona = usePokemonInfo('volcarona');
  const excadrill = usePokemonInfo('excadrill');
  const dracovish = usePokemonInfo('dracovish');
  const type_mappings = {
    "bug": [bug, bug_icon],
    "dark": [dark, dark_icon],
    "dragon": [dragon, dragon_icon],
    "electric": [electric, electric_icon],
    "fairy": [fairy, fairy_icon],
    "fighting": [fighting, fighting_icon],
    "fire": [fire, fire_icon],
    "flying": [flying, flying_icon],
    "ghost": [ghost, ghost_icon],
    "grass": [grass, grass_icon],
    "ground": [ground, ground_icon],
    "ice": [ice, ice_icon],
    "normal": [normal, normal_icon],
    "poison": [poison, poison_icon],
    "psychic": [psychic, psychic_icon],
    "steel": [steel, steel_icon],
    "water": [water, water_icon]
  }
  const pokemonGallery = [raichu, gengar, snorlax, crobat, azumarill, espeon, umbreon, milotic, roserade, lucario, weavile, togekiss, excadrill, volcarona, cinderace, dracovish];

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const focusableElements = document.querySelectorAll('.card, .container');

  const handleCardClick = pokemon => {
    focusableElements.forEach((element) => {
      element.tabIndex = -1;
    });
    setSelectedPokemon(pokemon);
    document.body.classList.add('no-scroll');
  };


  const closeModal = () => {
    setSelectedPokemon(null);
    document.body.classList.remove('no-scroll');
    focusableElements.forEach((element) => {
      element.tabIndex = 0;
    });
  };


  if (!milotic || !cinderace || !snorlax || !lucario || !roserade || 
    !crobat || !togekiss || !espeon || !weavile || !raichu || !azumarill
    || !umbreon || !gengar || !volcarona || !excadrill || !dracovish) {
    return <div className="loading"></div>; // Show a loading message or spinner
  }
  
  return (
    <div className="Grid active">
        <About />
        <div id="main" className="gallery">
            {pokemonGallery.map(currPokemon => (
              <div role="button" tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(currPokemon)} 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCardClick(currPokemon);
                    }
                  }}>
                  <h3>#{currPokemon.id}</h3>
                  <img className="mon" src={currPokemon.image} alt={currPokemon.name} />
                  <h4>{currPokemon.name}</h4>
                  <div class="type-icons">
                    {currPokemon.types.map(type => (
                      <img src={type_mappings[type][0]} alt={type} />
                    ))}
                  </div>
              </div>
            ))}
        </div>

        {selectedPokemon && (
          <div className="modal-overlay" onClick={closeModal}>
            <div tabIndex="0" className="modal-content" onClick={e => e.stopPropagation()}>
              <span tabIndex="0" className="close-modal" onKeyDown={(e) => {
              if (e.key === 'Enter') {
                closeModal();
              }
            }}onClick={closeModal}><FaTimes /></span>
              <div className="info-card">
                <div className="first-half">
                  <h4 id="card-title">{selectedPokemon.name}</h4>
                  <img src={selectedPokemon.image} alt={selectedPokemon.name} />
                  <div className="type-icons">
                    {selectedPokemon.types.map(type => (
                      <div tabIndex="0" className="icons">
                        <img className="type" src={type_mappings[type][1]} alt={type} />
                        <div className="tooltip">
                          <span className="tooltip-text">{type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="dimensions">
                    <p><b>Height:</b> {selectedPokemon.height} m</p>
                    <p><b>Weight:</b> {selectedPokemon.weight} kg</p>
                  </div>
                  <h3>Abilities</h3>
                  <ul className="abilities">
                    {selectedPokemon.abilities.map(ability => (
                      <li>{ability}</li>
                    ))}
                  </ul>
                </div>
                <div className="second-half">
                  <h3>About</h3>
                  <div className="desc">
                    <p>{selectedPokemon.desc.replace(/\\f/g, '')}</p>
                  </div>
                  <h3>Base Stats</h3>
                  {<PokemonStats selectedPokemon={selectedPokemon} />}
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Grid;