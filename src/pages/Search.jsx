import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumList from '../components/AlbumList';

const MIN_LENGTH = 2;
const INITIAL_STATE = {
  artist: '',
  preview: '',
  loading: false,
  objSearch: [],
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(artist) {
    this.setState({
      preview: artist,
      loading: true,
    });
    const answer = await searchAlbumsAPI(artist);
    console.log(artist);
    this.setState({
      loading: false,
      objSearch: answer,
      artist: '',
    });
  }

  renderSearch() {
    const { objSearch, preview } = this.state;
    return (
      <div>
        <h2>{`Resultado de álbuns de: ${!preview ? '' : preview}`}</h2>
        { objSearch.length === 0 ? 'Nenhum álbum foi encontrado'
          : <AlbumList albumList={ objSearch } /> }
      </div>
    );
  }

  render() {
    const { artist, loading } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <form>
            <input
              name="artist"
              data-testid="search-artist-input"
              onChange={ this.handleChange }
              type="text"
              value={ artist }
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ artist.length < MIN_LENGTH }
              onClick={ () => this.handleClick(artist) }
            >
              Pesquisar
            </button>
          </form>
        </div>
        <div>
          {loading ? <Loading /> : this.renderSearch() }
        </div>
      </>
    );
  }
}

export default Search;
