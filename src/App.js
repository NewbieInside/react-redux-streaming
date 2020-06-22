import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StreamCreate from './components/StreamCreate/StreamCreate';
import StreamDelete from './components/StreamDelete/StreamDelete';
import StreamEdit from './components/StreamEdit/StreamEdit';
import StreamList from './components/StreamList/StreamList';
import StreamShow from './components/StreamShow/StreamShow';
import Header from './components/Header/Header';

 class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Router>
      </Fragment>
    )
  }
}

export default App

