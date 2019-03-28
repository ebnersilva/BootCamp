import React from 'react';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="http://localhost:3000">Navegar</a>
        </li>
        <li>
          <a href="http://localhost:3000">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="http://localhost:3000">Seu Daily Mix</a>
        </li>
        <li>
          <a href="http://localhost:3000">Tocados recentemente</a>
        </li>
        <li>
          <a href="http://localhost:3000">Músicas</a>
        </li>
        <li>
          <a href="http://localhost:3000">Albuns</a>
        </li>
        <li>
          <a href="http://localhost:3000">Artistas</a>
        </li>
        <li>
          <a href="http://localhost:3000">Estações</a>
        </li>
        <li>
          <a href="http://localhost:3000">Arquivos locais</a>
        </li>
        <li>
          <a href="http://localhost:3000">Videos</a>
        </li>
        <li>
          <a href="http://localhost:3000">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="http://localhost:3000">Melhores do rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
