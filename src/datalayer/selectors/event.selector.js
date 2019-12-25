export const getHotEventList = (state) => {
  if (state && state.hotEvents && state.hotEvents.listItems) {
    return state.hotEvents.listItems;
  }
  return [];
};
