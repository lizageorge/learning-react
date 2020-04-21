import React from 'react'
import styles from './BuildControl.module.css'

const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className = {styles.Label} >{props.label}</div>
            <button className = {styles.Less} >Less</button>
            <button className = {styles.More} onClick = {props.addHandler()}>More</button>

        </div>
    )
}

export default BuildControl
