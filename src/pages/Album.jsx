import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
// import Loading from '../components/Loading';

class Album extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props;
    this.state = {
      idAlbum: match.params.id,
      objAns: [],
      // loading: false,
    };
    this.fetchMusic = this.fetchMusic.bind(this);
    this.arrayRender = this.arrayRender.bind(this);
  }

  componentDidMount() {
    const { idAlbum } = this.state;
    this.fetchMusic(idAlbum);
  }

  async fetchMusic(idAlbum) {
    if (idAlbum) {
      const answer = await getMusics(idAlbum);
      this.setState({
        objAns: answer,
      });
    }
  }

  arrayRender() {
    const { objAns } = this.state;
    return (
      objAns.map((valor, index) => {
        if (index === 0) {
          return (
            <div key={ valor.collectionId }>
              <h2 data-testid="artist-name">{valor.artistName}</h2>
              <h4 data-testid="album-name">{valor.collectionName}</h4>
            </div>
          );
        }
        return (
          <MusicCard
            key={ valor.trackId }
            musicName={ valor.trackName }
            previewUrl={ valor.previewUrl }
            trackId={ valor.trackId }
            albumObj={ objAns }
          />
        );
      }));
  }

  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album">
          {this.arrayRender()}
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
