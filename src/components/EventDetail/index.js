import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import momment from 'moment';
import { FacebookShareButton } from 'react-share';
import { getEventDetail } from 'datalayer/actions/event.action';
import { selectEventDetail } from 'datalayer/selectors/event.selector';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import Calendar from 'components/Common/Calendar';

class EventDetail extends Component {
  componentDidMount() {
    const {
      getEventDetail,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    getEventDetail(eventId);
  }

  handleRegisterClick = () => {
    const {
      history,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    history.push(`/event/${eventId}/register`);
  }

  renderTop = () => {
    const {
      start_time, end_time, name, eventLocation,
    } = this.props;
    return (
      <>
        <img
          src="https://via.placeholder.com/400x150"
          className="w-100"
          alt=""
        />
        <div className="container-fluid p-0 bg-white border-bottom">
          <div className="container py-3">
            <div className="row">
              <div className="col-lg-8 d-flex">
                <div className="p-3">
                  <Calendar scale={1.5} dateTime={start_time} />
                </div>
                <div className="p-3 flex-grow-1">
                  <h2 className="mb-3">{name || 'Tên sự kiện'}</h2>
                  <div className="d-flex align-items-center mb-3">
                    <i className="far fa-calendar-alt" />
                    <div className="ml-3">
                      <h5 className="mb-2">
                        <span>Khởi đầu: </span>
                        <span className="h6 text-muted">{momment(start_time).format('DD/M/YYYY - h:mm A')}</span>
                      </h5>
                      <h5 className="m-0">
                        <span>Kết thúc: </span>
                        <span className="h6 text-muted">{momment(end_time).format('DD/M/YYYY - h:mm A')}</span>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-map-marker-alt" />
                    <div className="ml-3">
                      <h5 className="mb-2">{eventLocation.place}</h5>
                      <h6 className="text-muted">{eventLocation.address}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column">
                <button
                  className="btn btn-warning btn-lg mt-3"
                  onClick={this.handleRegisterClick}
                >
                  Tham gia ngay
                </button>
                <FacebookShareButton
                  url={window.location.href}
                  quote={`Easy Event - ${name}`}
                  className="btn btn-primary btn-lg mt-3"
                  style={{
                    backgroundColor: '#3C5898',
                  }}
                >
                  Chia sẻ
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  renderDescriptionCard = () => {
    const { description } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Giới thiệu</h5>
          <hr />
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    );
  }

  renderCatgories = () => {
    const { category } = this.props;
    return category.map((item, index) => (
      `${item.value}${index === category.length - 1 ? '' : ', '}`
    ));
  }

  renderInfoCard = () => {
    const {
      eventLocation, start_time, end_time, contact,
    } = this.props;
    return (
      <div className="card mb-3 sticky-top" style={{ top: 85 }}>
        <div className="card-body">
          <h5 className="card-title">Thông tin</h5>
          <hr />
          <div className="card-text">
            <div className="pb-2">
              <strong>Thể loại: </strong>
              <span>{this.renderCatgories()}</span>
            </div>
            <div className="pb-2">
              <strong>Địa điểm: </strong>
              <span>{eventLocation && eventLocation.place}</span>
            </div>
            <div className="pb-2">
              <strong>Địa chỉ: </strong>
              <span>{eventLocation && eventLocation.address}</span>
            </div>
            <div className="pb-2">
              <strong>Khởi đầu: </strong>
              <span>{momment(start_time).format('DD/M/YYYY - h:mm A')}</span>
            </div>
            <div className="pb-2">
              <strong>Kết thúc: </strong>
              <span>{momment(end_time).format('DD/M/YYYY - h:mm A')}</span>
            </div>
            <div className="pb-2">
              <strong>Liên hệ nhà tổ chức: </strong>
              <ul>
                {contact.email && (
                  <li>
                    <span>Email: </span>
                    <span>{contact.email}</span>
                  </li>
                )}
                {contact.phone_number && (
                  <li>
                    <span>Điện thoại: </span>
                    <span>{contact.phone_number}</span>
                  </li>
                )}
                {contact.facebook && (
                  <li>
                    <span>Sự kiện FB: </span>
                    <span>{contact.facebook}</span>
                  </li>
                )}
                {contact.website && (
                  <li>
                    <span>Website: </span>
                    <span>{contact.website}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <hr />
          <button
            className="btn btn-warning btn-lg btn-block"
            onClick={this.handleRegisterClick}
          >
            Tham gia ngay
          </button>
        </div>
      </div>
    );
  }

  renderTicketInfoCard = () => (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Thông tin vé</h5>
        <hr />
        <p className="card-text">
          <div className="pb-2">
            <strong>Giá vé: </strong>
            <span>MIỄN PHÍ</span>
          </div>
          <div className="pb-2">
            <strong>Loại vé: </strong>
            <span>Điện tử</span>
          </div>
        </p>
      </div>
    </div>
  )

  renderMapCard = () => {
    const { eventLocation } = this.props;
    if (!eventLocation.latitude || !eventLocation.longitude) {
      return null;
    }
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=${eventLocation.latitude},${eventLocation.longitude}`;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Bản đồ đến sự kiện</h5>
          <hr />
          <iframe
            title="Google Maps"
            className="border-0"
            width="100%"
            height="450"
            frameBorder="0"
            src={mapUrl}
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <Header />

        <div className="container-fluid p-0 ee-minHeightFull">
          {this.renderTop()}
          <div className="container-fluid p-0 bg-light">
            <div className="container py-3">
              <div className="row">
                <div className="col-md-8">
                  {this.renderDescriptionCard()}
                  {this.renderTicketInfoCard()}
                  {this.renderMapCard()}
                </div>
                <div className="col-md-4">
                  {this.renderInfoCard()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ event }) => {
  const {
    contact,
    location,
    category,
    name,
    description,
    start_time,
    end_time,
  } = selectEventDetail(event);
  return {
    contact,
    eventLocation: location,
    category,
    name,
    description,
    start_time,
    end_time,
  };
};

const mapDispatchToProps = {
  getEventDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventDetail));
