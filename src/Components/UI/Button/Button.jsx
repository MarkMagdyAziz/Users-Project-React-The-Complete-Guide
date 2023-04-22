import React from 'react'
import styles from './Button.module.css'
 const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.className}`} type={props.type || 'button'} onClick={props.clickHandler}>
    {props.children}
    </button>
  )
}
export default Button