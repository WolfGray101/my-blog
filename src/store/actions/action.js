export const getArticles = (articlePage) => (
  {
    type: 'GET_ARTICLES',
    payload: articlePage
  }
)

export const loadError = () => ({ type: 'ERROR' })

