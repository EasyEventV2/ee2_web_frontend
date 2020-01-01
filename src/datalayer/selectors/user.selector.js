export const selectUserId = (state) => (
  (state && state.info && state.info.userId) ? state.info.userId : null
);

export const selectUserInfo = (state) => (
  (state && state.info) ? state.info : {}
);
