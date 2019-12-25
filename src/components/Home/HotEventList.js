import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotEvents } from 'datalayer/selectors/event.selector';
import EventCard from 'components/Common/EventCard';
import Pagination from 'components/Common/Pagination';

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
    const { totalPages, currentPage } = this.props;
    return (
      <div className="container-fluid p-0">
        <div className="container-fluid py-3">
          <p className="h3 text-center font-weight-bold">Hot Events</p>
        </div>
        <div className="container p-3">
          <div className="row">
            {this.renderItem()}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              alwaysShowNavigator
            />
          </div>
        </div>
      </div>
    );
  }
}

HotEventList.defaultProps = {
  eventList: [],
};

const mapStateToProps = ({ event }) => {
  const { eventList, totalPages, currentPage } = getHotEvents(event);
  return {
    eventList,
    totalPages,
    currentPage,
  };
};

export default connect(mapStateToProps, null)(HotEventList);
