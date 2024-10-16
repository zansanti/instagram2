import React from 'react';
import User from './User';
import Suggestions from './Suggestions/Suggestions';

function Sidebar() {
  return (
    <div className="sidebar">
      <User imgSrc="/assets/img/catanacomics.svg" username="catanacomics" />
      <Suggestions />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>
      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}

export default Sidebar;