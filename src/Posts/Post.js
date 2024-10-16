import React from 'react';

function Post({ username, userImg, postImg, likedBy, likesCount }) {
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
        <img src={postImg} alt="Post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
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