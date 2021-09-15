import React from 'react';
import { Router, Route , Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Album from '../pages/Album';
import Favoritos from '../pages/Favoritos';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/album:id" Component={ Album } />
        <Route path="/favoritos" Component={ Favoritos } />
        <Route path="/profile" Component={ Profile } />
        <Route path="/profile/edit" Component={ ProfileEdit } />
        <Route path="/search" Component={ Search } />
        <Route exact path="/" Component={ Login } />
        <Route Component={ NotFound } />
      </Switch>
    );
  }
}

export default Routes;
