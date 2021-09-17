import React from 'react';
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

export default AlbumList;
