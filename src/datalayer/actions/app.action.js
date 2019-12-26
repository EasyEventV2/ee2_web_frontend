import { appAction } from 'constants/actions';
import { put } from 'utils/request';

export const verifyGuest = (eventId, guestId) => ({
  type: appAction.VERIFY_GUEST,
  promise: put(`/events/${eventId}/guests/${guestId}`, {
    action: 'verify',
  }),
});
