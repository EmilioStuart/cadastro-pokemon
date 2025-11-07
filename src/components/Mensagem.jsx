import React from 'react';

function Mensagem({ mensagem }) {
  if (!mensagem.texto) return null;

  const classe = mensagem.tipo === 'erro' ? 'mensagem-erro' : 'mensagem-sucesso';
  return <div className={classe}>{mensagem.texto}</div>;
}

export default Mensagem;
