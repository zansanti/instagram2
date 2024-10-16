import React from 'react';

function User({ imgSrc, username }) {
  return (
    <div className="usuario">
      <img src={imgSrc} alt={username} />
      <div className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;