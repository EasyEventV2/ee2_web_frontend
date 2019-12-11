import { modalAction } from 'constants/actions';

export const showModal = (modalKey, modalProps) => ({
  type: modalAction.SHOW_MODAL,
  payload: {
    modalKey,
    modalProps,
  },
});
