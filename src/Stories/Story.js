import React from 'react';

function Story({ imgSrc, username }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={imgSrc} alt={username} />
      </div>
      <div className="usuario">
        {username}
      </div>
    </div>
  );
}

export default Story;