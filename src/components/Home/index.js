import React, { Component } from 'react';
import Header from 'components/Common/Header';
import HomeSlider from 'components/Home/HomeSlider';


export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <HomeSlider />
        </div>
      </>
    );
  }
}

export default Home;
