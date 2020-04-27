import React from 'react'
import styles from './Logo.module.css'

import burgerLogo from '../../assests/images/burger-logo.png'
/*you can't just put your own folder structure here bc it goes to webpack*/

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img scr = {burgerLogo}/> 
        </div>
    )
}

export default Logo
