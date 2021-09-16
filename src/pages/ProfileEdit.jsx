import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          <h2>Pagina pra editar o perfil</h2>
        </div>
      </>
    );
  }
}

export default ProfileEdit;
