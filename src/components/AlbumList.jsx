import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumList extends React.Component {
  render() {
    const { albumList } = this.props;
    return (
      <div>
        {
          albumList.map((album) => (<AlbumCard
            album={ album.collectionName }
            artist={ album.artistName }
            image={ album.artworkUrl100 }
            albumId={ album.collectionId }
            key={ album.collectionId }
          />))
        }
      </div>
    );
  }
}

AlbumList.propTypes = {
  albumList: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumId: PropTypes.number.isRequired,
  })).isRequired,
};

export default AlbumList;
