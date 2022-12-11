import React from 'react'
import classes from './Header.module.scss'

const Header = () => {

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h6>
          Realworld Blog
        </h6>
      </div>
      <div className={classes['button--group']}>
        <button className={classes['button--group__sign-in']}> Sign In</button>
        <button className={classes[`button--group__sign-up`]}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header