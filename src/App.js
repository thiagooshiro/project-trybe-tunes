import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Album from './pages/Album';
import Favoritos from './pages/Favoritos';
import Profile from './pages/Profile';
import Search from './pages/Search';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
          <Switch>
            <Route path="/album:id" Component={ Album } />
            <Route path="/favoritos" Component={ Favoritos } />
            <Route exact path="/profile" Component={ Profile } />
            <Route path="/profile/edit" Component={ ProfileEdit } />
            <Route path="/search" Component={ Search } />
            <Route exact path="/" Component={ Login } />
            <Route Component={ NotFound } />
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
