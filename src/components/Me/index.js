import React, { Component } from 'react';
import {
  Link, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import MyEvent from 'components/Me/MyEvent';
import MyTicket from 'components/Me/MyTicket';

class Me extends Component {
  renderSidebar = () => {
    const { location } = this.props;
    const defaultClass = 'btn btn-light btn-block btn-lg rounded-0 text-left';
    return (
      <div className="col-lg-3 col-md-4 pr-0 border-right">
        <Link
          to="/me/event"
          role="button"
          className={`${defaultClass}${location.pathname === '/me/event' ? ' active font-weight-bold' : ''}`}
        >
          Sự kiện của tôi
        </Link>
        <hr className="m-0" />
        <Link
          to="/me/ticket"
          role="button"
          className={`${defaultClass}${location.pathname === '/me/ticket' ? ' active font-weight-bold' : ''}`}
        >
          Vé của tôi
        </Link>
        <hr className="m-0" />
      </div>
    );
  }

  renderMain = () => (
    <div className="col-12">
      <Switch>
        <Route path="/me/event" component={MyEvent} />
        <Route path="/me/ticket" component={MyTicket} />
        <Redirect to="/me/event" />
      </Switch>
    </div>
  )

  render() {
    return (
      <>
        <Header />

        <div className="container-fluid p-0 ee-minHeightFull d-flex">
          <div className="row flex-grow-1">
            {this.renderMain()}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default withRouter(Me);
