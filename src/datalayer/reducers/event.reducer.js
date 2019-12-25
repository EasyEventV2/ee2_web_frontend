import { eventAction } from 'constants/actions';

export const INITIAL_STATE = {
  hotEvents: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case eventAction.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        hotEvents: action.payload.data,
      };
    }

    default:
      break;
  }
  return state;
};
