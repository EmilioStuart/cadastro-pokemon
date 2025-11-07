import React, { useState, useRef } from 'react';

function PokemonForm({ onAddPokemon, setMensagem }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [poder, setPoder] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      setMensagem({ texto: 'Preencha todos os campos obrigatórios!', tipo: 'erro' });
      return;
    }

    const novoPokemon = {
      id: Date.now(),
      nome,
      tipo,
      descricao,
      poder: parseInt(poder, 10),
      dataCadastro: new Date().toLocaleDateString('pt-BR'),
    };

    onAddPokemon(novoPokemon);

    setNome('');
    setTipo('');
    setDescricao('');
    setPoder('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-pokemon" ref={formRef} noValidate>
      <label>
        Nome do Pokémon:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </label>

      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Selecione o tipo</option>
          <option value="Fogo">🔥 Fogo</option>
          <option value="Água">💧 Água</option>
          <option value="Grama">🌱 Grama</option>
          <option value="Elétrico">⚡ Elétrico</option>
          <option value="Psíquico">🧠 Psíquico</option>
          <option value="Pedra">🪨 Pedra</option>
        </select>
      </label>

      <label>
        Descrição:
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </label>

      <label>
        Poder (0–100):
        <input
          type="number"
          min="0"
          max="100"
          value={poder}
          onChange={(e) => setPoder(e.target.value)}
          required
        />
      </label>

      <button type="submit">Cadastrar Pokémon</button>
    </form>
  );
}

export default PokemonForm;
