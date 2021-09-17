import React from 'react';
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

export default AlbumCard;
