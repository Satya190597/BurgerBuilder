import React from 'react';
import styles from './toolbar.module.css'
import Logo from '../../Logo/Logo';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <div style={{textAlign:'end'}}>LOGO</div>
            <nav>

            </nav>
        </header>
    )
}

export default Toolbar;