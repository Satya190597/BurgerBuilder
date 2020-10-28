import React from 'react';
import Aux from '../../HOC/Auxiliary';
import styles from'./layout.module.css';

const Layout = (props) => {
    return (
        <Aux>
            <div>
                <div>NAV BAR,TOOL BAR, SIDE BAR</div>
                <main className={styles.content}>
                    {props.children}
                </main>
            </div>
        </Aux>
    )
}

export default Layout;