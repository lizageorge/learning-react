import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
//we always style for mobile first

const Toolbar = () => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                ...
            </nav>

        </header>
    )
}

export default Toolbar
