import React from 'react';
import Suggestion from './Suggestion';

function Suggestions() {
  const suggestions = [
    { imgSrc: '/assets/img/bad.vibes.memes.svg', username: 'bad.vibes.memes' },
    { imgSrc: '/assets/img/chibirdart.svg', username: 'chibirdart' },
    { imgSrc: '/assets/img/razoesparaacreditar.svg', username: 'razoesparaacreditar' },
    { imgSrc: '/assets/img/adorable_animals.svg', username: 'adorable_animals' },
    { imgSrc: '/assets/img/smallcutecats.svg', username: 'smallcutecats' }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} imgSrc={suggestion.imgSrc} username={suggestion.username} />
      ))}
    </div>
  );
}

export default Suggestions;