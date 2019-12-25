export const getHotEvents = (state) => {
  let eventList = [];
  let totalPages = 1;
  let currentPage = 1;
  if (state && state.hotEvents && state.hotEvents.listItems) {
    if (state.hotEvents.listItems) {
      eventList = state.hotEvents.listItems;
    }
    if (state.hotEvents.totalPages) {
      totalPages = state.hotEvents.totalPages;
    }
    if (state.hotEvents.currentPage) {
      currentPage = state.hotEvents.currentPage;
    }
  }
  return {
    eventList,
    totalPages,
    currentPage,
  };
};
