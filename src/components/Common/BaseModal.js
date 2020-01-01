import React, { Component } from 'react';

export class BaseModal extends Component {
  componentDidMount() {
    const { id } = this.props;
    global.$(`#${id}`).modal('show');
  }

  render() {
    const {
      children,
      id,
      closable,
      title,
      hideModal,
      primaryButtonText,
      onClickPrimaryButton,
      disablePrimaryButton,
      secondaryButtonText,
      onClickSecondaryButton,
      disableSecondaryButton,
    } = this.props;

    return (
      <div className="modal fade show" id={id} tabIndex="-1" role="dialog" aria-labelledby="modalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{title}</h5>
              {closable && (
                <button
                  onClick={hideModal}
                  type="button"
                  className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              {secondaryButtonText && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  disabled={!!disableSecondaryButton}
                  onClick={onClickSecondaryButton}
                >
                  {secondaryButtonText}
                </button>
              )}
              {primaryButtonText && (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!!disablePrimaryButton}
                  onClick={onClickPrimaryButton}
                >
                  {primaryButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BaseModal.defaultProps = {
  closable: true,
};

export default BaseModal;
