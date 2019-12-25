import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import app from './app.reducer';
import user from './user.reducer';
import event from './event.reducer';
import modal from './modal.reducer';

export default combineReducers({
  app,
  user,
  event,
  modal,
  form,
});
