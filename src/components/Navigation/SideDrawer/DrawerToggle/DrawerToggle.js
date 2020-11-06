import React from 'react';
import styles from './drawertoggle.module.css';

const DrawerToggle = (props) => {
    return ( 
        <div className={styles.DrawerToggle} onClick={props.sideDrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle;