import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    const { albumObj } = props;
    this.state = {
      checkbox: false,
      albumObj,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange({ target }) {
    const { type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    const { albumObj } = this.state; // será que preciso de uma chave dinamica pra cada checkbox?
    this.setState({
      checkbox: value,
      loading: true,
    });
    const { musicName } = this.props;
    const qualMusica = albumObj.find(((album) => album.trackName === musicName));
    if (target.checked) await addSong(qualMusica);
    if (!target.checked) await removeSong(qualMusica);
    this.setState({
      loading: false,
    });
  }

  renderInput() {
    const { checkbox, loading } = this.state;
    const { trackId } = this.props;
    if (loading) return (<h2>Carregando...</h2>);
    return (<input
      type="checkbox"
      id={ trackId }
      name="checkbox"
      onChange={ this.handleChange }
      checked={ checkbox }
    />
    );
  }

  render() {
    const { musicName, previewUrl, trackId } = this.props;
    return (
      <div>
        <h4>{ musicName }</h4>
        <label data-testid={ `checkbox-music-${trackId}` } htmlFor={ trackId }>
          Favorita
          {this.renderInput()}
        </label>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento.
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumObj: PropTypes.shape({
    musicName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
