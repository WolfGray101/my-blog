const defaultState = {
  articles: null,
  articlesCount: 0,
  offset: 0,
  loading: true,
  error: false,
  currentPages: 1,
};

function articlesReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case "SET_ARTICLE":
      return {
        ...state,
        loading: false,
        error: false,
        // articlesCount: action.payload.articlesCount,
        articles: action.payload,
      };
    case "CLEAR_ARTICLE":
      return { 
        ...state, 
        articles: null, 
        error: false };

    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case "SET_PAGES": {
      return {
        ...state,
        currentPages: action.payload,
      };
    }
    // case "START_LOADING": {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // }

    default:
      return state;
  }
}

export default articlesReducer;
