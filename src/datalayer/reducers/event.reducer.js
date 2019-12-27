import { eventAction } from 'constants/actions';

export const INITIAL_STATE = {
  hotEvents: null,
  eventDetail: null,
  categories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case eventAction.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        hotEvents: action.payload.data,
      };
    }

    case eventAction.GET_EVENT_DETAIL_SUCCESS: {
      return {
        ...state,
        eventDetail: action.payload.data,
      };
    }

    case eventAction.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload.data,
      };
    }

    default:
      break;
  }
  return state;
};
