const initState = {
  items: [],
  item: {},
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return {
        ...state,
        items: action.payload,
      };
    case "FETCH_PROJECT":
      return {
        ...state,
        item: action.payload,
      };
    case "NEW_PROJECT":
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
