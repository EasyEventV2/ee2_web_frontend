import { userAction } from 'constants/actions';
import { post } from 'utils/request';

export const login = ({ username, password }) => ({
  type: userAction.LOGIN,
  promise: post('/auth/login', {
    username,
    password,
  }),
});

export const logout = () => ({
  type: userAction.LOGOUT,
});
