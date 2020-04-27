import React from 'react'
import styles from './Logo.module.css'

import burgerLogo from '../../assests/images/burger-logo.png'
/*you can't just put your own folder structure here bc it goes to webpack*/

const Logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default Logo
