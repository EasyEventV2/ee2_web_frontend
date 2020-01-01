import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStaffs, deleteStaff, addNewStaff } from 'datalayer/actions/event.action';
import { showError, showSuccess } from 'utils/toastr';
import RoleBadge from 'components/Common/RoleBadge';

class MyEventGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff_email: '',
      staffList: [],
    };
  }

  componentDidMount() {
    this.fetchStaffs();
  }

  fetchStaffs = () => {
    const {
      getStaffs,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    getStaffs(eventId).then((res) => {
      if (res.error) {
        showError();
        return;
      }
      this.setState({
        // TODO: multiple group
        staffList: res.result.data[0],
      });
    });
  }

  onInputChange = (e) => {
    this.setState({
      staff_email: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      addNewStaff,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    addNewStaff(eventId, this.state.staff_email).then((res) => {
      if (res.error) {
        showError();
        return;
      }
      showSuccess();
      this.fetchStaffs();
    });
  }

  onDelete = (e, staffId) => {
    e.preventDefault();
    const {
      deleteStaff,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    deleteStaff(eventId, staffId).then((res) => {
      if (res.error) {
        showError();
        return;
      }
      showSuccess();
      this.fetchStaffs();
    });
  }

  renderGroupList = () => {
    const { staffList } = this.state;
    const { users, name } = staffList;
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Tên nhân sự</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Chức vụ</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((item) => (
            <tr key={item._id}>
              <td>{item.full_name}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td className="text-center">
                <RoleBadge role={name} />
              </td>
              <td className="text-center">
                <button className="btn btn-danger" onClick={(e) => this.onDelete(e, item._id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="p-3">
        <h3 className="mb-3">Danh sách nhân sự trong sự kiện</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              name="staff_email"
              className="form-control"
              placeholder="Nhập email ..."
              onChange={this.onInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
              >
                Thêm staff
              </button>
            </div>
          </div>
        </form>
        {this.renderGroupList()}
      </div>
    );
  }
}

export default connect(
  null,
  {
    getStaffs,
    deleteStaff,
    addNewStaff,
  }
)(MyEventGroup);
