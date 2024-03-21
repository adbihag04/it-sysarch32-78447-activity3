import React, { useState, useEffect } from 'react';

const Pokemon = ({ data, language }) => {
    const { id, name, type, base, image } = data;
    const pokemonName = name[language];
  
    return (
      <div className="pokemon">
        < img className="image" img src={image} alt={pokemonName} />
        <div>[ID] {id}</div>
        <div>Name: {pokemonName}</div>
        <div className="type-container">
  {type.map((item, index) => (
    <div key={index} className="type">{item}</div>
  ))}
</div>

<div class="stat-groups">
<div class="stat-group">
        <div class="stat">HP: {base.HP}</div>
        <div class="stat">Attck: {base.Attack}</div>
        <div class="stat">Def: {base.Defense}</div>
</div>
<div class="stat-group">
        <div class="stat">Speed: {base.Speed}</div>
        <div class="stat">Sp. Attck: {base['Sp. Attack']}</div>
        <div class="stat">Sp. Def: {base['Sp. Defense']}</div>
        
</div>
</div>

        
      </div>
    );
  };

export default Pokemon;