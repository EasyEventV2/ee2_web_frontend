import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showError } from 'utils/toastr';
import { getMyEvents } from 'datalayer/actions/user.action';
import { Role } from 'constants/common';
import Pagination from 'components/Common/Pagination';
import Spinner from 'components/Common/Spinner';

class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
        loading: false,
        eventList: data.itemsList,
        paging: {
          totalPages: data.totalPages,
          currentPage: data.currentPage,
        },
      });
    });
  }

  renderRole = (role) => {
    if (role === Role.ADMIN) {
      return <span className="badge badge-primary">ADMIN</span>;
    }
    if (role === Role.STAFF) {
      return <span className="badge badge-secondary">STAFF</span>;
    }
    if (role === Role.OPERATOR) {
      return <span className="badge badge-success">OPERATOR</span>;
    }
    return null;
  }

  renderEventList = () => {
    const { eventList } = this.state;
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Tên sự kiện</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Vai trò của bạn</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {eventList.map((item) => (
            <tr key={item.event._id}>
              <td>
                <Link target="_blank" to={`/event/${item.event._id}`}>{item.event.name}</Link>
              </td>
              <td>{`${moment(item.event.start_time).format('DD/M/YYYY')} - ${moment(item.event.end_time).format('DD/M/YYYY')}`}</td>
              <td className="text-center">{this.renderRole(item.name)}</td>
              <td><Link target="_blank" to={`/event/${item.event._id}`}>Chỉnh sửa</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { paging, loading } = this.state;
    return (
      <div className="container py-5 h-100">
        <h3 className="mb-3">Sự kiện của tôi</h3>
        {
          loading
            ? (
              <Spinner />
            ) : (
              <>
                {this.renderEventList()}
                {paging.totalPages && (
                  <Pagination
                    totalPages={paging.totalPages}
                    currentPage={paging.currentPage}
                    alwaysShowNavigator
                    className="float-right"
                  />
                )}
              </>
            )
        }
      </div>
    );
  }
}

export default connect(null, { getMyEvents })(MyEvent);
