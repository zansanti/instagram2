import React from 'react';
import Post from './Post';

function Posts() {
  const posts = [
    {
      username: 'meowed',
      userImg: '/assets/img/meowed.svg',
      postImg: '/assets/img/gato-telefone.svg',
      likedBy: 'respondeai',
      likesCount: 101523
    },
    {
      username: 'barked',
      userImg: '/assets/img/barked.svg',
      postImg: '/assets/img/dog.svg',
      likedBy: 'adorable_animals',
      likesCount: 99159
    }
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Posts;