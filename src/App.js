import './css/style.css';

import nineGagImage from './assets/img/9gag.svg'; 
import adorable_animals from './assets/img/adorable_animals.svg';
import bad_vibes_memes from './assets/img/bad.vibes.memes.svg';
import barked from './assets/img/barked.svg';
import catanacomics from './assets/img/catanacomics.svg';
import chibirdart from './assets/img/chibirdart.svg';
import dog from './assets/img/dog.svg';
import filomoderna from './assets/img/filomoderna.svg';
import gato_telefone from './assets/img/gato-telefone.svg';
import logo from './assets/img/logo.png';
import memeriagourmet from './assets/img/memeriagourmet.svg';
import meowed from './assets/img/meowed.svg';
import nathanwpylestrangeplanet from './assets/img/nathanwpylestrangeplanet.svg';
import razoesparaacreditar from './assets/img/razoesparaacreditar.svg';
import respondeai from './assets/img/respondeai.svg';
import smallcutecats from './assets/img/smallcutecats.svg';
import wawawicomics from './assets/img/wawawicomics.svg';


<img src={barked} alt="barked" />


function App() {
    return (
        <><div className="root">
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div className="separador"></div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div className="icones">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <div className="icones-mobile">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div className="corpo">
                <div className="esquerda">
                    <div className="stories">
                        <div className="story">
                            <div className="imagem">
                            <img src={nineGagImage} alt="9gag" />
                            </div>
                            <div className="usuario">
                                9gag
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={meowed} alt="meowed" />
                            </div>
                            <div className="usuario">
                                meowed
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={barked} alt="barked" />
                            </div>
                            <div className="usuario">
                                barked
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={nathanwpylestrangeplanet} alt="nathanwpylestrangeplanet" />
                            </div>
                            <div className="usuario">
                                nathanwpylestrangeplanet
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={wawawicomics} alt="wawawicomics" />
                            </div>
                            <div className="usuario">
                                wawawicomics
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={respondeai} alt="respondeai" />
                            </div>
                            <div className="usuario">
                                respondeai
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={filomoderna} alt="filomoderna" />
                            </div>
                            <div className="usuario">
                                filomoderna
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                            <img src={memeriagourmet} alt="memeriagourmet" />
                            </div>
                            <div className="usuario">
                                memeriagourmet
                            </div>
                        </div>

                        <div className="setinha">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>

                    <div className="posts">
                        <div className="post">
                            <div className="topo">
                                <div className="usuario">
                                <img src={meowed} alt="meowed" />
                                    meowed
                                </div>
                                <div className="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div className="conteudo">
                            <img src={gato_telefone} alt="gato_telefone" />
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
                                <img src={respondeai} alt="respondeai" />
                                    <div className="texto">
                                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post">
                            <div className="topo">
                                <div className="usuario">
                                <img src={barked} alt="barked" />
                                    barked
                                </div>
                                <div className="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div className="conteudo">
                            <img src={dog} alt="dog" />
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
                                <img src={adorable_animals} alt="adorable_animals" />
                                    <div className="texto">
                                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="usuario">
                    <img src={catanacomics} alt="catanacomics" />
                        <div className="texto">
                            <span>
                                <strong>catanacomics</strong>
                                <ion-icon name="pencil"></ion-icon>
                            </span>
                        </div>
                    </div>

                    <div className="sugestoes">
                        <div className="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                            <img src={bad_vibes_memes} alt="bad_vibes_memes" />
                                <div className="texto">
                                    <div className="nome">bad.vibes.memes</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                            <img src={chibirdart} alt="chibidart" />
                                <div className="texto">
                                    <div className="nome">chibirdart</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                            <img src={razoesparaacreditar} alt="razoesparaacreditar" />
                                <div className="texto">
                                    <div className="nome">razoesparaacreditar</div>
                                    <div className="razao">Novo no Instagram</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                            <img src={adorable_animals} alt="adorable_animals" />
                                <div className="texto">
                                    <div className="nome">adorable_animals</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                            <img src={smallcutecats} alt="smallcutecats" />
                                <div className="texto">
                                    <div className="nome">smallcutecats</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>
                    </div>

                    <div className="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div className="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div><script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script></>
    );
  }
  
  export default App;