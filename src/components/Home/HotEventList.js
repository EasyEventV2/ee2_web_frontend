import React, { Component } from 'react';
import EventCard from 'components/Common/EventCard';

class HotEventList extends Component {
  renderItem = () => {
    const { eventList } = this.props;
    return eventList.map(() => (
      <EventCard />
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container p-2">
          <p className="h3 text-center font-weight-bold">Hot Events</p>
        </div>
        <div className="container p-3">
          <div className="row">
            {this.renderItem()}
          </div>
        </div>
      </div>
    );
  }
}

HotEventList.defaultProps = {
  eventList: [1, 2, 3],
};

export default HotEventList;
