import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button 
            onClick={props.clicked} 
            className={[styles.Button, styles[props.btnType]].join(' ')} //using a joined array of strings to pass in a valid string to classname that dynamically changes based on props
            >{props.children}</button>
    )
}

export default Button
