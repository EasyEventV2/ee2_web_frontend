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

export const signup = ({
  username, password, email, fullName, phoneNumber,
}) => ({
  type: userAction.SIGNUP,
  promise: post('/auth/signup', {
    username,
    password,
    email,
    full_name: fullName,
    phone_number: phoneNumber,
  }),
});
