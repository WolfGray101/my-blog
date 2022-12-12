const defaultState = {
  articles: [
  // {  
  //   author: "Jhon Doe",
  //   body: 'content is here',
  //   areateAt: new Date().getDate,
  //   description: ' i snova hz',
  //   favouriteed: 1,
  //   faglist:['test', 'first page'], 
  //   slug: 'xz',
  //   title: 'Start post',
  //   updateAt: new Date().getDate
  // }
  ],
  articlesCount: 0,
}

function getArticlesReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        articlesCount: action.payload.articlesCount
      }

    // case 'SET_SEARCH_ID':
    //   return {
    //     ...state,
    //     searchId: action.payload,
    //   }

    // case 'GET_MORE_TICKETS':
    //   return {
    //     ...state,
    //     ticketsAmount: state.ticketsAmount + action.payload,
    //   }

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
