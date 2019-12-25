import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotEventList } from 'datalayer/selectors/event.selector';
import EventCard from 'components/Common/EventCard';

class HotEventList extends Component {
  navigateToEventDetail = (eventId) => {
    console.log({ eventId });
  }

  renderItem = () => {
    const { eventList } = this.props;
    return eventList.map((event) => (
      <EventCard
        event={event}
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
  eventList: [],
};

const mapStateToProps = ({ event }) => ({
  eventList: getHotEventList(event),
});

export default connect(mapStateToProps, null)(HotEventList);
