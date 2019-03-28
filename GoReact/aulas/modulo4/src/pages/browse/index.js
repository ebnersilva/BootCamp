import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51llDmm6BBL.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51llDmm6BBL.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51llDmm6BBL.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51llDmm6BBL.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
