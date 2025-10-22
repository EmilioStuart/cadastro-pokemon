import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [poder, setPoder] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSucesso(true);
    setNome('');
    setTipo('');
    setDescricao('');
    setPoder('');
    setTimeout(() => setSucesso(false), 2000);
  };

  return (
    <div className="container">
      <h1>Cadastro de Pokémon</h1>
      <form onSubmit={handleSubmit} className="form-pokemon">
        <label>
          Nome do Pokémon:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required
          />
        </label>

        <label>
          Tipo:
          <select 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)} 
            required
          >
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
          <textarea 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            required
          />
        </label>

        <label>
          Poder (0-100):
          <input 
            type="number" 
            value={poder} 
            min="0" 
            max="100" 
            onChange={(e) => setPoder(e.target.value)} 
            required
          />
        </label>

        <button type="submit">Cadastrar Pokémon</button>
      </form>
      {sucesso && (
        <div className="mensagem-sucesso">Pokémon cadastrado com sucesso!</div>
      )}
    </div>
  );
}

export default App;
