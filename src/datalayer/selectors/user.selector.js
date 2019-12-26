export const selectUserId = (state) => (
  (state && state.info && state.info.userId) ? state.info.userId : null
);
