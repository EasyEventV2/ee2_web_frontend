import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from 'redux/actions/user.action';

export class Header extends Component {
  onLogin = () => {
    const { login } = this.props;
    login();
  }

  renderNotLoggedIn = () => (
    <>
      <button
        className="btn btn-light"
        onClick={this.onLogin}
      >
        Đăng nhập
      </button>
      <button className="btn btn-light ml-1">Đăng ký</button>
    </>
  );

  renderLoggedIn = () => (
    <div>Avatar</div>
  );

  render() {
    const { loggedIn } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
