import React, { Component } from 'react';
import Header from 'components/Common/Header';
import HotEventList from 'components/Home/HotEventList';


export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid p-0">
          <HotEventList />
        </div>
      </>
    );
  }
}

export default Home;
