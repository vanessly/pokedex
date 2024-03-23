// Grid.jsx
import React, { useState, useEffect } from "react";
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
    <div className="Grid">
        <div className="gallery">
            <div role="button" tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(raichu)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(raichu);
              }
            }}>
                <h3>#{raichu.id}</h3>
                <img className="mon" src={raichu.image} alt="raichu" />
                <h4>Raichu</h4>
                <div class="type-icons">
                  <img src={electric} alt="electric type" />
                </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(gengar)}
              onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(gengar);
              }
            }}>
                <h3>#{gengar.id}</h3>
                <img className="mon" src={gengar.image} alt="gengar" />
                <h4>Gengar</h4>
                <div class="type-icons">
                  <img src={ghost} alt="ghost type" />
                  <img src={poison} alt="poison type" />
                </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(snorlax)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(snorlax);
              }
            }}>
              <h3>#{snorlax.id}</h3>
              <img className="mon" src={snorlax.image} alt="Snorlax" />
              <h4>Snorlax</h4>
              <div class="type-icons">
                <img src={normal} alt="normal type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(crobat)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(crobat);
              }
            }}>
              <h3>#{crobat.id}</h3>
              <img className="mon" src={crobat.image} alt="Crobat" />
              <h4>Crobat</h4>
              <div class="type-icons">
                <img src={poison} alt="poison type" />
                <img src={flying} alt="flying type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(azumarill)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(azumarill);
              }
            }}>
              <h3>#{azumarill.id}</h3>
              <img className="mon" src={azumarill.image} alt="Azumarill" />
              <h4>Azumarill</h4>
              <div class="type-icons">
                <img src={water} alt="water type" />
                <img src={fairy} alt="fairy type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(espeon)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(espeon);
              }
            }}>
              <h3>#{espeon.id}</h3>
              <img className="mon" src={espeon.image} alt="Espeon" />
              <h4>Espeon</h4>
              <div class="type-icons">
                <img src={psychic} alt="psychic type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(umbreon)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(umbreon);
              }
            }}>
              <h3>#{umbreon.id}</h3>
              <img className="mon" src={umbreon.image} alt="Umbreon" />
              <h4>Umbreon</h4>
              <div class="type-icons">
                <img src={dark} alt="dark type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(milotic)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(milotic);
              }
            }}>
              <h3>#{milotic.id}</h3>
              <img className="mon" src={milotic.image} alt="milotic" />
              <h4>Milotic</h4>
              <div class="type-icons">
                <img src={water} alt="water type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(roserade)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(roserade);
              }
            }}>
              <h3>#{roserade.id}</h3>
              <img className="mon" src={roserade.image} alt="roserade" />
              <h4>Roserade</h4>
              <div class="type-icons">
                <img src={grass} alt="grass type" />
                <img src={poison} alt="poison type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(lucario)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(lucario);
              }
            }}>
              <h3>#{lucario.id}</h3>
              <img className="mon" src={lucario.image} alt="lucario" />
              <h4>Lucario</h4>
              <div class="type-icons">
                <img src={fighting} alt="fighting type" />
                <img src={steel} alt="steel type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(weavile)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(weavile);
              }
            }}>
              <h3>#{weavile.id}</h3>
              <img className="mon" src={weavile.image} alt="weavile" />
              <h4>Weavile</h4>
              <div class="type-icons">
                <img src={dark} alt="dark type" />
                <img src={ice} alt="ice type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(togekiss)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(togekiss);
              }
            }}>
              <h3>#{togekiss.id}</h3>
              <img className="mon" src={togekiss.image} alt="togekiss" />
              <h4>Togekiss</h4>
              <div class="type-icons">
                <img src={flying} alt="flying type" />
                <img src={fairy} alt="fairy type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(excadrill)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(excadrill);
              }
            }}>
              <h3>#{excadrill.id}</h3>
              <img className="mon" src={excadrill.image} alt="excadrill" />
              <h4>Excadrill</h4>
              <div class="type-icons">
                <img src={ground} alt="ground type" />
                <img src={steel} alt="steel type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }} className="card" onClick={() => handleCardClick(volcarona)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(volcarona);
              }
            }}>
              <h3>#{volcarona.id}</h3>
              <img className="mon" src={volcarona.image} alt="volcarona" />
              <h4>Volcarona</h4>
              <div class="type-icons">
                <img src={bug} alt="bug type" />
                <img src={fire} alt="fire type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(cinderace)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(cinderace);
              }
            }}>
              <h3>#{cinderace.id}</h3>
              <img className="mon" src={cinderace.image} alt="Cinderace" />
              <h4>Cinderace</h4>
              <div class="type-icons">
                <img src={fire} alt="fire type" />
              </div>
            </div>
            <div tabIndex="0" style={{ cursor: 'pointer' }}className="card" onClick={() => handleCardClick(dracovish)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCardClick(dracovish);
              }
            }}>
              <h3>#{dracovish.id}</h3>
              <img className="mon" src={dracovish.image} alt="Dracovish" />
              <h4>Dracovish</h4>
              <div class="type-icons">
                <img src={water} alt="water type" />
                <img src={dragon} alt="dragon type" />
              </div>
            </div>
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
                </div>
                <div className="second-half">
                  <div className="desc">
                    <p>{selectedPokemon.desc}</p>
                  </div>
                  {console.log(selectedPokemon)}
                  {<PokemonStats tabIndex="0" selectedPokemon={selectedPokemon} />}
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Grid;