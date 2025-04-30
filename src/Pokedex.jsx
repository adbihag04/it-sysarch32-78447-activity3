import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon.jsx';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
      .then(res => res.json())
      .then(data => setPokemonList(data))
      .catch(err => console.error('Error fetching Pokemon:', err));
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="pokedex">
      <div className="filters">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} data={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
