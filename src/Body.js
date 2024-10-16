import React from 'react';
import Stories from './Stories/Stories';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar';

function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Body;