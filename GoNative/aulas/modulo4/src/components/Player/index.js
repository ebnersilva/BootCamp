import React from 'react';

import { connect } from 'react-redux';

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

const Player = ({ player, currentEpisode }) => player.current && (
<Container>
  <CoverBackground source={{ uri: currentEpisode.artwork }} />

  <EpisodeInfo>
    <Title>{currentEpisode.title}</Title>
    <Author>{currentEpisode.artist}</Author>
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

const mapStateToProps = state => ({
  player: state.player,
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(episode => episode.id === state.player.current)
    : null,
});

export default connect(
  mapStateToProps,
  null,
)(Player);
