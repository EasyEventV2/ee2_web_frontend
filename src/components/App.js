import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { getInfo } from 'datalayer/actions/user.action';

import ModalContainer from 'components/Modal';
import Home from 'components/Home';
import EventDetail from 'components/EventDetail';
import EventRegister from 'components/EventRegister';
import Me from 'components/Me';

export class App extends React.Component {
  componentDidMount() {
    const { loggedIn, getInfo } = this.props;
    if (loggedIn) {
      getInfo();
    }
  }

  componentDidUpdate(prevProps) {
    const { loggedIn, getInfo } = this.props;
    if (prevProps.loggedIn === false && loggedIn === true) {
      getInfo();
    }
  }

  renderRoutes = () => {
    const { loggedIn } = this.props;

    const publicRoutes = [
      <Route exact path="/" component={Home} key="home" />,
      <Route exact path="/event/:eventId" component={EventDetail} key="event_detail" />,
      <Route exact path="/event/:eventId/register" component={EventRegister} key="event_register" />,
    ];

    const privateRoutes = [
      <Route path="/me" component={Me} key="me" />,
    ];

    return [
      ...publicRoutes,
      ...(loggedIn ? privateRoutes : []),
      <Redirect to="/" key="redirect_home" />,
    ];
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </Router>
        <ModalContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
});

const mapDispatchToProps = {
  getInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
