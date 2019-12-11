import { modalAction } from 'constants/actions';

export const INITIAL_STATE = {
  currentModal: null,
  modalProps: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalAction.SHOW_MODAL: {
      return {
        ...state,
        currentModal: action.payload.modalKey,
        modalProps: action.payload.modalProps || {},
      };
    }

    default:
      break;
  }
  return state;
};
