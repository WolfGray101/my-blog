import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ServiceFile from '../../service/service-file'

import classes from './Like.module.scss'
import heartOff from './heart-off.svg'
import heartOn from './heart-on.svg'

const serviceFile = new ServiceFile()

function Like({ favoritesCount, favorited, slug }) {
  const [isLike, setLike] = useState(favorited)
  const [count, setCount] = useState(favoritesCount)
  const { isLoginned, token } = useSelector((state) => state.createAcc)
  
  useEffect(() => {
    setLike(favorited)
    setCount(favoritesCount)
  }, [favoritesCount, favorited])

  const onLikeClick = () => {
    if (!isLike) {
      setCount((prev) => prev + 1)
      setLike(true)
      serviceFile.postFavorite(slug, token)
    } else {
      setLike(false)
      setCount((prev) => prev - 1)
      serviceFile.deleteFavorite(slug, token)
    }
  }

  const onSelectLike = isLike ? heartOn : heartOff

  return (
    <div className={classes.like}>
      <button className={classes.likeHeart} type="button" disabled={!isLoginned} onClick={onLikeClick}>
        <img src={onSelectLike} alt="Like" />
      </button>
      <span className={classes.likeCount}>{count}</span>
    </div>
  )
}

Like.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
  favorited: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Like
