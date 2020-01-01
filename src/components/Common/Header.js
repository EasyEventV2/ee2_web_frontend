/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { ModalKey } from 'constants/modal';
import { showModal } from 'datalayer/actions/modal.action';
import { logout } from 'datalayer/actions/user.action';

export class Header extends Component {
  onLogin = () => {
    const { showModal } = this.props;
    showModal(ModalKey.LOGIN);
  }

  onLogout = () => {
    const { logout } = this.props;
    logout();
  }

  onSignUp = () => {
    const { showModal } = this.props;
    showModal(ModalKey.SIGNUP);
  }

  onGoToMyEvents = () => {
    const { history } = this.props;
    history.push('/me/event');
  }

  renderNotLoggedIn = () => (
    <>
      <button
        className="btn btn-light"
        onClick={this.onLogin}
      >
        Đăng nhập
      </button>
      <button
        className="btn btn-light ml-1"
        onClick={this.onSignUp}
      >
        Đăng ký
      </button>
    </>
  );

  renderLoggedIn = () => (
    <>
      <div className="nav-item dropdown d-inline-block mr-3">
        <a
          className="nav-link dropdown-toggle"
          style={{ cursor: 'pointer' }}
          id="dropdown-me"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Quản lý sự kiện
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdown-me">
          <Link className="dropdown-item" to="/me/event/new">Tạo sự kiện mới</Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/me/event">Sự kiện của tôi</Link>
          <Link className="dropdown-item" to="/me/ticket">Vé của tôi</Link>
        </div>
      </div>
      <div className="d-inline-block dropdown">
        <button
          className="btn p-0"
          type="button"
          id="dropdown-user"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-user-circle h2 m-0" style={{ lineHeight: '1em' }} />
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user">
          <a
            role="button"
            className="dropdown-item"
            onClick={this.onLogout}
            style={{ cursor: 'pointer' }}
          >
            Log out
          </a>
        </div>
      </div>
    </>
  );

  render() {
    const { loggedIn } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom">
        <a className="navbar-brand" href="/">
          <img className="ee-headerLogo" src={require('assets/images/logo-fit-256x177.png')} alt="" />
        </a>
        <div className="ee-headerSearch input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên sự kiện ..."
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-outline-secondary">Tìm kiếm</button>
          </div>
        </div>
        <div className="ml-auto">
          {loggedIn ? this.renderLoggedIn() : this.renderNotLoggedIn()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
});

const mapDispatchToProps = {
  showModal,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
