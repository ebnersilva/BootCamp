import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
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
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
