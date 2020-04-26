import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop = (props) => (
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}> </div> : null
);
//you could add this to App.js, or Layout.js, or in BurgerBuilder.js. We're choosing modal.js

export default Backdrop
