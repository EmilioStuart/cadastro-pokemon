import React from 'react';

function PokemonList({ pokemons }) {
  return (
    <div className="lista-container">
      <h2>Pokémons Cadastrados ({pokemons.length})</h2>
      <ul className="lista-pokemons">
        {pokemons.map((p) => {
          const tipoNormalizado = p.tipo.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '');
          const tipoClass = `tipo-${tipoNormalizado}`;

          return (
            <li key={p.id} className={`pokemon-card ${tipoClass}`}>
              <div className="pokemon-info">
                <strong>{p.nome}</strong>
                <span>Tipo: {p.tipo}</span>
                <span>Poder: {p.poder}</span>
                <p className="descricao">{p.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
