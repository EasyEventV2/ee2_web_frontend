import React, { Component } from 'react';

export class Header extends Component {
  render() {
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
          <button className="btn btn-light">Đăng nhập</button>
          <button className="btn btn-light ml-1">Đăng ký</button>
        </div>
      </nav>
    );
  }
}

export default Header;
