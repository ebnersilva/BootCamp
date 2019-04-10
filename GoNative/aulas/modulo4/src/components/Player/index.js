import React from 'react';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControllButton,
  ControllIcon,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover2.png' }} />

    <EpisodeInfo>
      <Title>Papercut</Title>
      <Author>Linkin Park</Author>
    </EpisodeInfo>
    <Controls>
      <ControllButton onPress={() => {}}>
        <ControllIcon name="skip-previous" />
      </ControllButton>
      <ControllButton onPress={() => {}}>
        <ControllIcon name="play-circle-filled" />
      </ControllButton>
      <ControllButton onPress={() => {}}>
        <ControllIcon name="skip-next" />
      </ControllButton>
    </Controls>
  </Container>
);

export default Player;
