import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalKey } from 'constants/modal';
import { showModal } from 'datalayer/actions/modal.action';
import LoginModal from './Login';
import SignUpModal from './SignUp';

const modalMapping = {
  [ModalKey.LOGIN]: LoginModal,
  [ModalKey.SIGNUP]: SignUpModal,
};

export class ModalContainer extends Component {
  hideModal = () => {
    const { currentModal, showModal } = this.props;
    global.$(`#${currentModal}`).modal('hide');
    showModal(null);
  }

  render() {
    const { currentModal, modalProps } = this.props;
    const CurrentModal = modalMapping[currentModal];
    if (!currentModal || !CurrentModal) {
      return null;
    }
    return (
      <CurrentModal
        hideModal={this.hideModal}
        {...modalProps}
      />
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  currentModal: modal.currentModal,
  modalProps: modal.modalProps,
});

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
