import React, { Component } from 'react';
import EventCard from 'components/Common/EventCard';

class HotEventList extends Component {
  navigateToEventDetail = (eventId) => {
    console.log({ eventId });
  }

  renderItem = () => {
    const { eventList } = this.props;
    return eventList.map((event) => (
      <EventCard
        onClick={() => this.navigateToEventDetail(event.id)}
      />
    ));
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="container-fluid py-3">
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
  eventList: [1, 2, 3, 4, 5],
};

export default HotEventList;
