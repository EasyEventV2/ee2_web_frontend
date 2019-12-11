import { userAction } from 'constants/actions';
import Auth from 'utils/auth';

export const INITIAL_STATE = {
  loggedIn: Auth.isAuth(),
  info: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

    default:
      break;
  }
  return state;
};
