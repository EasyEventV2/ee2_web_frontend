import { userAction } from 'constants/actions';
import { get, post } from 'utils/request';

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
  promise: post('/users', {
    username,
    password,
    email,
    full_name: fullName,
    phone_number: phoneNumber,
  }),
});

export const getInfo = () => ({
  type: userAction.GET_INFO,
  promise: get('/users/me'),
});

export const getMyEvents = (page = 1) => ({
  type: userAction.GET_MY_EVENTS,
  promise: get(`/users/me/events?p=${page}`),
});
