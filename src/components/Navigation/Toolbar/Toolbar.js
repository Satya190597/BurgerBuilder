import React from 'react';
import styles from './toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar;