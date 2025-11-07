import React, { useState, useEffect } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';
import Mensagem from './components/Mensagem';
import './App.css';

const STORAGE_KEY = 'pokemonsCadastrados';

function App() {
  const [listaPokemons, setListaPokemons] = useState([]);
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  useEffect(() => {
    const storedPokemons = localStorage.getItem(STORAGE_KEY);
    if (storedPokemons) setListaPokemons(JSON.parse(storedPokemons));
  }, []);

  const salvarLista = (pokemons) => {
    setListaPokemons(pokemons);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemons));
  };

  const handleAddPokemon = (novoPokemon) => {
    const listaAtualizada = [...listaPokemons, novoPokemon];
    salvarLista(listaAtualizada);
    setMensagem({ texto: 'Pokémon cadastrado com sucesso!', tipo: 'sucesso' });
  };

  return (
    <div className="container">
      <h1>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/6.gif"
          alt="Charizard Shiny"
          className="charizard-gif"
        />
        Cadastro de Pokémon
      </h1>

      <PokemonForm onAddPokemon={handleAddPokemon} setMensagem={setMensagem} />
      <Mensagem mensagem={mensagem} />

      {listaPokemons.length > 0 ? (
        <PokemonList pokemons={listaPokemons} />
      ) : (
        <p className="nenhum-cadastrado">Nenhum Pokémon cadastrado ainda.</p>
      )}
    </div>
  );
}

export default App;
