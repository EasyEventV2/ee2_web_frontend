import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from 'datalayer/actions/user.action';
import { ModalKey } from 'constants/modal';
import BaseModal from 'components/Common/BaseModal';

export class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fullName: '',
      phoneNumber: '',
      requestError: null,
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp = () => {
    const {
      username, password, email, fullName, phoneNumber,
    } = this.state;
    const { signup, hideModal } = this.props;
    this.setState({
      requestError: null,
    });
    signup({
      username, password, email, fullName, phoneNumber,
    }).then(({ error }) => {
      if (!error) {
        hideModal();
        return;
      }
      this.setState({
        requestError: error.data.error.message,
      });
    });
  }

  render() {
    const { requestError } = this.state;
    const { hideModal } = this.props;
    return (
      <BaseModal
        hideModal={hideModal}
        id={ModalKey.SIGNUP}
        isForm
        title="Sign Up"
        primaryButtonText="SIGN UP"
        onClickPrimaryButton={this.handleSignUp}
      >
        {requestError && <div className="alert alert-danger" role="alert">{requestError}</div>}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="VD: Dao Duy Nam"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            className="form-control"
            placeholder="VD: 0123456789"
            onChange={this.onInputChange}
          />
        </div>
      </BaseModal>
    );
  }
}

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(SignUpModal);
