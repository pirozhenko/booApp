import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './containers/Books/Books';
import Book from './containers/Book/Book';
import Authors from './containers/Authors/Authors';
import AuthorPage from './containers/Author/Author';
import Genre from './containers/Genre/Genre';
import Favorites from './containers/Favorites/Favorites';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Logo from './components/Logo/Logo';

class App extends Component {
  render () {
    return (
      <Layout>
        <Logo />
        <Menu />
        <Switch>
          <Route path="/book:id" component={Book} />
          <Route path="/author:id" component={AuthorPage} />
          <Route path="/genre" component={Genre} />
          <Route path="/list-authors" component={Authors} />
          <Route path="/favorites" component={Favorites} />

          <Route path="/" exact component={Books} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
