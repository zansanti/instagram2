import React, { useState } from 'react';

function User({ imgSrc, initialUsername }) {
  const [username, setUsername] = useState(initialUsername);
  const [profileImage, setProfileImage] = useState(imgSrc); // Estado para a imagem de perfil

  const handleEditUsername = () => {
    const newUsername = prompt('Digite o novo nome de usuário:');
    if (newUsername && newUsername.trim() !== '') {
      setUsername(newUsername);
    }
  };

  const handleChangeProfileImage = () => {
    const newImage = prompt('Insira o novo link da imagem:');
    if (newImage && newImage.trim() !== '') {
      setProfileImage(newImage);
    }
  };

  return (
    <div className="usuario">
      <img 
        src={profileImage} 
        alt={username} 
        onClick={handleChangeProfileImage} 
      />
      <div className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon name="pencil" onClick={handleEditUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;