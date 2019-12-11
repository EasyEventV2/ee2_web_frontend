import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from 'datalayer/actions/user.action';
import { ModalKey } from 'constants/modal';
import BaseModal from 'components/Common/BaseModal';

export class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      requestError: null,
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const { login, hideModal } = this.props;
    this.setState({
      requestError: null,
    });
    login({ username, password }).then(({ error }) => {
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
        id={ModalKey.LOGIN}
        isForm
        title="Login"
        primaryButtonText="LOGIN"
        onClickPrimaryButton={this.handleLogin}
      >
        {requestError && <div className="alert alert-danger" role="alert">{requestError}</div>}
        <div className="form-group">
          <label>Email or Username</label>
          <input
            type="email"
            name="username"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
      </BaseModal>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginModal);
