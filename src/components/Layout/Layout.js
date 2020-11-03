import React from 'react';
import Aux from '../../HOC/Auxiliary';
import styles from'./layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar/>
                <main className={styles.content}>
                    {props.children}
                </main>
            </div>
        </Aux>
    )
}

export default Layout;