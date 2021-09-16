import React from 'react';
import Header from '../components/Header';

const MIN_LENGTH = 2;

class Search extends React.Component {
  constructor(){
    super();
    this.state ={
      artist: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    const {name , value} = target;
    this.setState({
      [name]:value,
    })
  }


  render() {
    const { artist } = this.state
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
              disabled={ artist.length < MIN_LENGTH }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
