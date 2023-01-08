import ServiceFile from '../../service/service-file'

const serviceFile = new ServiceFile()

export const getArticle = (slug, token) => (dispatch) => {
  serviceFile
    .getArticle(slug, token)
    .then((res) => {
      dispatch(setArticle(res.article))
    })
    .catch((err) => {throw new Error(err)})
}  

export const setArticle = (article) => ({ type: 'SET_ARTICLE', payload: article })

export const clearArticle = () => ({ type: 'CLEAR_ARTICLE' })

export const setError = () => ({ type: 'IS_ERROR' })

export const setArticleList = (articles) => ({ type: 'SET_ARTICLES', payload: articles })

export const setArticlesCount = (count) => ({ type: 'SET_ARTICLES_COUNT', payload: count }) // ne nado

export const loadError = () => ({ type: 'ERROR' })

export const setPages = (num) => ({ type: 'SET_PAGES', payload: num })

export const startLoading = () => ({ type: 'START_LOADING' })
