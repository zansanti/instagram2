import React, { useState } from 'react';

function Post({ username, userImg, postImg, likedBy, initialLikesCount }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikesCount || 0); // Usa o valor inicial ou 0 como padrão

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const handleLikePost = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1); // Diminui se já foi curtido
    } else {
      setLikesCount(likesCount + 1); // Aumenta se não foi curtido
    }
    setIsLiked(!isLiked); // Inverte o estado de curtida
  };

  const handleImageClick = () => {
    if (!isLiked) {
      setLikesCount(likesCount + 1); // Aumenta apenas se não foi curtido
      setIsLiked(true); // Marca como curtido
    }
  };

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImg} alt={username} />
          {username}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={postImg} alt="Post" onClick={handleImageClick} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={isLiked ? "heart" : "heart-outline"}
              style={{ color: isLiked ? "red" : "black" }}
              onClick={handleLikePost}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={isSaved ? "bookmark" : "bookmark-outline"}
              onClick={handleSavePost}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`/assets/img/${likedBy}.svg`} alt={likedBy} />
          <div className="texto">
            Curtido por <strong>{likedBy}</strong> e <strong>outras {likesCount.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;