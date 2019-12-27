import React, { Component } from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import MyEvent from 'components/Me/MyEvent';
import NewEvent from 'components/Me/MyEvent/NewEvent';
import MyEventDetail from 'components/Me/MyEvent/MyEventDetail';
import MyTicket from 'components/Me/MyTicket';

class Me extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="container-fluid p-0 ee-minHeightFull d-flex">
          <Switch>
            <Route exact path="/me/event/new" component={NewEvent} />
            <Route path="/me/event/:eventId" component={MyEventDetail} />
            <Route path="/me/event" component={MyEvent} />
            <Route path="/me/ticket" component={MyTicket} />
            <Redirect to="/me/event" />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default withRouter(Me);
