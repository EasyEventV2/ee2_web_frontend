import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEventDetail, registerGuest } from 'datalayer/actions/event.action';
import { selectEventDetail } from 'datalayer/selectors/event.selector';
import { selectUserId } from 'datalayer/selectors/user.selector';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import RegisterForm from 'components/EventRegister/RegisterForm';

class EventRegister extends Component {
  componentDidMount() {
    const { getEventDetail } = this.props;
    const {
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    getEventDetail(eventId);
  }

  handleSubmit = (values) => {
    const {
      userId,
      registerGuest,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    registerGuest(eventId, values, userId).then(response => {
      console.log(response);
    });
  }

  renderEventInfo = () => {
    const {
      contact,
      name,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    return (
      <div>
        <h5 className="card-title">Thông tin sự kiện</h5>
        <p className="card-text">
          <span>Tên sự kiện: </span>
          <span>{name}</span>
        </p>
        <p className="card-text">
          <span>Link sự kiện: </span>
          <Link
            to={`/event/${eventId}`}
            target="_blank"
          >
            {`${window.location.origin}/event/${eventId}`}
          </Link>
        </p>
        <p className="card-text">
          <span>Liên hệ nhà tổ chức: </span>
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
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid p-0 ee-minHeightFull bg-dark">
          <div className="container py-5">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Form đăng ký tham gia sự kiện</h4>
                <h6 className="card-subtitle text-muted font-weight-light">Vui lòng điền đầy đủ các thông tin để Ban tổ chức có thể xét duyệt yêu cầu đăng ký vé của bạn.</h6>
              </div>
              <div className="card-body">
                {this.renderEventInfo()}
                <hr />
                <RegisterForm
                  onSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ event, user }) => {
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
    userId: selectUserId(user),
    contact,
    location,
    category,
    name,
    description,
    start_time,
    end_time,
  };
};

const mapDispatchToProps = {
  getEventDetail,
  registerGuest,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventRegister);
