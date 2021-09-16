import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h2>Resultados da navegação</h2>
        </div>
      </>
    );
  }
}

export default Search;
