import React, { Component } from 'react';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

export class Me extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="container-fluid p-0 ee-minHeightFull">
          Me
        </div>

        <Footer />
      </>
    );
  }
}

export default Me;
