import React from 'react';
import Post from './Post';

function Posts() {
  const posts = [
    {
      username: 'meowed',
      userImg: '/assets/img/meowed.svg',
      postImg: '/assets/img/gato-telefone.svg',
      likedBy: 'respondeai',
      initialLikesCount: 101523,
    },
    {
      username: 'barked',
      userImg: '/assets/img/barked.svg',
      postImg: '/assets/img/dog.svg',
      likedBy: 'adorable_animals',
      initialLikesCount: 99159,
    },
    {
        username: 'meowed',
        userImg: '/assets/img/meowed.svg',
        postImg: '/assets/img/gato-telefone.svg',
        likedBy: 'respondeai',
        initialLikesCount: 101523,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.username} {...post} />
      ))}
    </div>
  );
}

export default Posts;