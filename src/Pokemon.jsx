import React, { useState } from 'react';

const Pokemon = ({ data, language }) => {
  const { id, name, type, base } = data;
  const pokemonName = name[language.toLowerCase()] || name["english"];
  
  // Construct the image URL
  const imageUrl = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${String(id).padStart(3, '0')}.png`;
  
  // State to manage loading state of the image
  const [imageError, setImageError] = useState(false);

  // Fallback image URL in case the main image fails to load
  const fallbackImageUrl = 'https://via.placeholder.com/150?text=No+Image';

  // Function to handle image error
  const handleImageError = () => {
    setImageError(true); // Set imageError to true if the image fails to load
  };

  return (
    <div className="pokemon">
      <img
        className="image"
        src={imageError ? fallbackImageUrl : imageUrl}
        alt={pokemonName}
        onError={handleImageError} // Trigger the fallback on image error
      />
      <div>[ID] {id}</div>
      <div>Name: {pokemonName}</div>

      <div className="type-container">
        {type.map((item, index) => (
          <div key={index} className="type">{item}</div>
        ))}
      </div>

      <div className="stat-groups">
        <div className="stat-group">
          <div className="stat">HP: {base.HP}</div>
          <div className="stat">Attack: {base.Attack}</div>
          <div className="stat">Defense: {base.Defense}</div>
        </div>
        <div className="stat-group">
          <div className="stat">Speed: {base.Speed}</div>
          <div className="stat">Sp. Attack: {base["Sp. Attack"]}</div>
          <div className="stat">Sp. Defense: {base["Sp. Defense"]}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
