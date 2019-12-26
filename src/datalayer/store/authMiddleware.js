import { userAction } from 'constants/actions';

export default ({ dispatch }) => next => (action) => {
  if (action && action.payload && action.payload.data && action.payload.data.error) {
    const { code } = action.payload.data.error;
    if (code && code.toString().startsWith('403')) {
      dispatch({
        type: userAction.LOGOUT,
      });
    }
  }

  return next(action);
};
