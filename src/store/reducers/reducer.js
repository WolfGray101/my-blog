const defaultState = {
  articles: [],
  articlesCount: 0,
  loading: true
}

function getArticlesReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        articles: [ ...action.payload.articles],
        articlesCount: action.payload.articlesCount,
        loading: false
      }

    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    default:
      return state
  }
}

export default getArticlesReducer
