import React from 'react';
import Story from './Story';

function Stories() {
  const stories = [
    { imgSrc: '/assets/img/9gag.svg', username: '9gag' },
    { imgSrc: '/assets/img/meowed.svg', username: 'meowed' },
    { imgSrc: '/assets/img/barked.svg', username: 'barked' },
    { imgSrc: '/assets/img/nathanwpylestrangeplanet.svg', username: 'nathanwpylestrangeplanet' },
    { imgSrc: '/assets/img/wawawicomics.svg', username: 'wawawicomics' },
    { imgSrc: '/assets/img/respondeai.svg', username: 'respondeai' }, 
    { imgSrc: '/assets/img/filomoderna.svg', username: 'filomoderna' },
    { imgSrc: '/assets/img/memeriagourmet.svg', username: 'memeriagourmet' },
  ];

  return (
    <div className="stories">
      {stories.map((story) => (
        <Story key={story.username} imgSrc={story.imgSrc} username={story.username} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;