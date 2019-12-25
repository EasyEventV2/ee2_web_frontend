import React from 'react';

function Footer() {
  return (
    <footer className="container-fluid bg-dark text-light p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <div className="m-auto">
              <img src={require('assets/images/logo-square-128x128.png')} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <h5>Easy Event</h5>
            <p>
              Best web app for free-fast-fun events organization
            </p>
          </div>
          <div className="col-md-3">
            <h5>Development Stack</h5>
            <ul>
              <li>React</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow us</h5>
            <ul>
              <li>namdaoduy</li>
              <li>SpQuyt</li>
              <li>duypv98</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h6 className="text-muted">Copyright © 2019 Easy Event. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
