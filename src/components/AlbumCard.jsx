import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { image, artist, album, albumId } = this.props;
    return (
      <div>
        <img src={ image } alt="album" />
        <h3>{ album }</h3>
        <h4>{ artist }</h4>
        <Link
          data-testid={ `link-to-album-${albumId}` }
          to={ `/album/${albumId}` }
        >
          Visitar Album
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  albumId: PropTypes.number.isRequired,
};

export default AlbumCard;
