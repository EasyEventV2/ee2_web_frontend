import { eventAction } from 'constants/actions';
import { get } from 'utils/request';

export const getHotEvents = (page = 1) => ({
  type: eventAction.GET_EVENTS,
  promise: get('/events', {
    p: page,
  }),
});

export const getEventDetail = (eventId) => ({
  type: eventAction.GET_EVENT_DETAIL,
  promise: get(`/events/${eventId}`),
});
