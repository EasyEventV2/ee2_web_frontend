import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showError } from 'utils/toastr';
import { getMyEvents } from 'datalayer/actions/user.action';
import Pagination from 'components/Common/Pagination';

class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      paging: {},
    };
  }

  componentDidMount() {
    const { getMyEvents } = this.props;
    getMyEvents().then((res) => {
      if (res.error) {
        showError();
        return;
      }
      const { data } = res.result;
      this.setState({
        eventList: data.itemsList,
        paging: {
          totalPages: data.totalPages,
          currentPage: data.currentPage,
        },
      });
    });
  }

  renderEventList = () => {
    const { eventList } = this.state;
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Tên sự kiện</th>
            <th scope="col">Người tạo</th>
            <th scope="col">Vai trò của bạn</th>
          </tr>
        </thead>
        <tbody>
          {eventList.map(() => (
            <tr key="">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { paging } = this.state;
    return (
      <div className="container py-5">
        <h3 className="mb-3">Sự kiện của tôi</h3>
        {this.renderEventList()}
        {paging.totalPages && (
          <Pagination
            totalPages={paging.totalPages}
            currentPage={paging.currentPage}
            alwaysShowNavigator
          />
        )}
      </div>
    );
  }
}

export default connect(null, { getMyEvents })(MyEvent);
