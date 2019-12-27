import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getEventDetail, registerGuest } from 'datalayer/actions/event.action';
import { selectEventDetail } from 'datalayer/selectors/event.selector';
import { selectUserInfo } from 'datalayer/selectors/user.selector';
import { showError, showSuccess } from 'utils/toastr';
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
      history,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    registerGuest(eventId, values, userId).then(response => {
      if (response.error) {
        showError(response.error.data && response.error.data.error.message);
        return;
      }
      showSuccess('Đăng ký thành công!', 'Vui lòng kiểm tra email chúng tôi mới gửi cho bạn!');
      history.push(`/event/${eventId}`);
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
    const {
      full_name,
      email,
    } = this.props;
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
                  initialValues={{
                    full_name,
                    email,
                  }}
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
  const {
    userId,
    full_name,
    email,
  } = selectUserInfo(user);
  return {
    // from user
    userId,
    full_name,
    email,
    // from event
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventRegister));
