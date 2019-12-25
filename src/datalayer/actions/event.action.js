import { eventAction } from 'constants/actions';
import { get } from 'utils/request';

export const getHotEvents = (page = 1) => ({
  type: eventAction.GET_EVENTS,
  promise: get('/events', {
    p: page,
  }),
});
