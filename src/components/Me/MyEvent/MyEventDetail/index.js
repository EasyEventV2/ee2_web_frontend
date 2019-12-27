import React, { Component } from 'react';
import {
  Link, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import MyEventGroup from './MyEventGroup';


class MyEventDetail extends Component {
  renderSidebar = () => {
    const {
      location,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    const defaultClass = 'btn btn-light btn-block btn-lg rounded-0 text-left';
    return (
      <div className="col-lg-3 col-md-4 pr-0 border-right">
        <Link
          to={`/me/event/${eventId}`}
          role="button"
          className={`${defaultClass}${location.pathname === `/me/event/${eventId}` ? ' active font-weight-bold' : ''}`}
        >
          Thông tin sự kiện
        </Link>
        <hr className="m-0" />
        <Link
          to={`/me/event/${eventId}/groups`}
          role="button"
          className={`${defaultClass}${location.pathname === `/me/event/${eventId}/groups` ? ' active font-weight-bold' : ''}`}
        >
          Thông tin nhân sự
        </Link>
        <hr className="m-0" />
      </div>
    );
  }

  renderMain = () => {
    const {
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    return (
      <div className="col-lg-9 col-md-8">
        <Switch>
          <Route exact path="/me/event/:eventId" component={() => <div>1</div>} />
          <Route path="/me/event/:eventId/groups" component={MyEventGroup} />
          <Redirect to={`/me/event/${eventId}`} />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <div className="row flex-grow-1">
        {this.renderSidebar()}
        {this.renderMain()}
      </div>
    );
  }
}

export default withRouter(MyEventDetail);
