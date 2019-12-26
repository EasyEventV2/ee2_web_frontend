import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';
import { verifyGuest } from 'datalayer/actions/app.action';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import Spinner from 'components/Common/Spinner';

const Phase = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: Phase.LOADING,
    };
  }

  componentDidMount() {
    const { eventId, guestId } = QueryString.parse(this.props.location.search);
    if (!eventId || !guestId) {
      this.setState({
        phase: Phase.FAILURE,
      });
      return;
    }
    const { verifyGuest } = this.props;
    verifyGuest(eventId, guestId).then((res) => {
      if (res.error) {
        this.setState({
          phase: Phase.FAILURE,
        });
        return;
      }
      this.setState({
        phase: Phase.SUCCESS,
      });
    });
  }

  handleBackHomeButton = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { phase } = this.state;
    return (
      <>
        <Header />
        <div className="container-fluid p-0 ee-minHeightFull">
          <div className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
            {phase === Phase.LOADING && (
              <Spinner />
            )}
            {phase !== Phase.LOADING && (
              <>
                <img
                  className="mb-3"
                  src={require('assets/images/logo-square-256x256.png')}
                  style={
                    phase === Phase.FAILURE
                      ? {
                        filter: 'grayscale(1)',
                        opacity: '0.5',
                      }
                      : {}
                  }
                  alt=""
                />
                <h3 className="text-center mb-5">
                  {phase === Phase.FAILURE ? 'Xác thực thất bại ...' : 'Xác thực thành công!'}
                </h3>
                <button
                  className="btn btn-warning btn-lg"
                  onClick={this.handleBackHomeButton}
                >
                  Quay về trang chủ
                </button>
              </>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  {
    verifyGuest,
  }
)(withRouter(Verify));
