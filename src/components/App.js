import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { testPromiseFailure, testPromiseSuccess } from 'datalayer/actions/app.action';

import ModalContainer from 'components/Modal';
import Home from 'components/Home';
import EventDetail from 'components/EventDetail';

export class App extends React.Component {
  getSuccess = () => {
    const { testPromiseSuccess } = this.props;
    testPromiseSuccess()
      .then((res) => {
        if (res.success) {
          console.log('OK', res);
        } else {
          console.log('NOT OK', res);
        }
      });
  }

  getFailure = () => {
    const { testPromiseFailure } = this.props;
    testPromiseFailure()
      .then((res) => {
        if (res.success) {
          console.log('OK', res);
        } else {
          console.log('NOT OK', res);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/event/:eventId" component={EventDetail} />
            <Route path="/about" component={null} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <ModalContainer />
      </div>
    );
  }
}

App.propTypes = {
  testPromiseSuccess: PropTypes.func,
  testPromiseFailure: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = {
  testPromiseFailure,
  testPromiseSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
