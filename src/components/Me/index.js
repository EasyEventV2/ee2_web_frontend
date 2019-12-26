import React, { Component } from 'react';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

export class Me extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="container-fluid p-0 ee-minHeightFull d-flex">
          <div className="row flex-grow-1">
            <div className="col-lg-3 col-md-4 pr-0 border-right">
              <button type="button" className="btn btn-light btn-block btn-lg rounded-0 text-left">
                Sự kiện của tôi
              </button>
              <hr className="m-0" />
              <button type="button" className="btn btn-light btn-block btn-lg rounded-0 text-left">
                Vé của tôi
              </button>
              <hr className="m-0" />
            </div>
            <div className="col-lg-9 col-md-8">
              Main
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Me;
