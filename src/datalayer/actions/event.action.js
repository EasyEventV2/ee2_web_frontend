import { eventAction } from 'constants/actions';
import { get, post, del } from 'utils/request';

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

export const getCategories = () => ({
  type: eventAction.GET_CATEGORIES,
  promise: get('/categories'),
});

export const addNewEvent = (data) => ({
  type: eventAction.ADD_NEW_EVENT,
  promise: post('/events', {
    ...data,
  }),
});

export const getStaffs = (eventId) => ({
  type: eventAction.GET_STAFFS,
  promise: get(`/events/${eventId}/staffs`),
});

export const addNewStaff = (eventId, email) => ({
  type: eventAction.ADD_NEW_STAFF,
  promise: post(`/events/${eventId}/staffs`, {
    email,
  }),
});

export const deleteStaff = (eventId, staffId) => ({
  type: eventAction.ADD_NEW_STAFF,
  promise: del(`/events/${eventId}/staffs/${staffId}`),
});
