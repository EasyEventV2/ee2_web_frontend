import { userAction } from 'constants/actions';
import Auth from 'utils/auth';

export const INITIAL_STATE = {
  loggedIn: Auth.isAuth(),
  info: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAction.SIGNUP_SUCCESS:
    case userAction.LOGIN_SUCCESS: {
      const { userId, token } = action.payload.data;
      Auth.setAccessToken(token);
      return {
        ...state,
        loggedIn: true,
        info: {
          ...state.info,
          userId,
        },
      };
    }

    case userAction.LOGOUT: {
      Auth.deleteAccessToken();
      return {
        ...INITIAL_STATE,
        loggedIn: Auth.isAuth(),
      };
    }

    case userAction.GET_INFO_SUCCESS: {
      const info = {
        ...action.payload.data,
      };
      info.userId = info._id;
      delete info._id;
      return {
        ...state,
        info,
      };
    }

    default:
      break;
  }
  return state;
};
