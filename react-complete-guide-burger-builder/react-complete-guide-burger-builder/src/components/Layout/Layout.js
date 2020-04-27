import React from 'react';
import styles from './Layout.module.css'; //we're using CSS-modules and the matching naming convention here, as per the new build system's requirements 
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    // Using React.Fragments is a shorter solution to the multiple-element problem than making an hoc.
    <React.Fragment> 
        <div>
            <Toolbar></Toolbar>
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default Layout