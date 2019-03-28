import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img src="http://www.softshoe-slim.com/covers2/b/berry09.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist href="">
        <img src="http://www.softshoe-slim.com/covers2/b/berry09.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist href="">
        <img src="http://www.softshoe-slim.com/covers2/b/berry09.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
      <Playlist href="">
        <img src="http://www.softshoe-slim.com/covers2/b/berry09.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do Rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default browse;
