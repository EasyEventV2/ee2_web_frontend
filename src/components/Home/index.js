import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotEvents } from 'datalayer/actions/event.action';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import HotEventList from 'components/Home/HotEventList';


export class Home extends Component {
  componentDidMount() {
    const { getHotEvents } = this.props;
    getHotEvents();
  }

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid p-0">
          <HotEventList />
        </div>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  getHotEvents,
};

export default connect(null, mapDispatchToProps)(Home);
