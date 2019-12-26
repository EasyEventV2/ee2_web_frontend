import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import ModalContainer from 'components/Modal';
import Home from 'components/Home';
import EventDetail from 'components/EventDetail';
import EventRegister from 'components/EventRegister';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/event/:eventId" component={EventDetail} />
            <Route exact path="/event/:eventId/register" component={EventRegister} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <ModalContainer />
      </div>
    );
  }
}

export default App;
