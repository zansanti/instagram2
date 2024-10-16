import React from 'react';

function Suggestion({ imgSrc, username }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imgSrc} alt={username} />
        <div className="texto">
          <div className="nome">{username}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;