export const selectHotEvents = (state) => {
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

export const selectEventDetail = (state) => {
  const data = (state && state.eventDetail) ? state.eventDetail : {};
  return {
    contact: {},
    location: {},
    category: [],
    _id: null,
    name: null,
    description: null,
    start_time: 0,
    end_time: 0,
    image_url: 'https://via.placeholder.com/400x150',
    ...data,
  };
};
