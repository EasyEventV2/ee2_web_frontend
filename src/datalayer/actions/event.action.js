import { eventAction } from 'constants/actions';
import { get, post } from 'utils/request';

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

export const registerGuest = (eventId, values, userId = null) => ({
  type: eventAction.REGISTER_GUEST,
  promise: post(`/events/${eventId}/guests`, {
    userId,
    guestInfo: {
      ...values,
    },
  }),
});
