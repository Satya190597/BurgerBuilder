import React from 'react'
import styles from './navigationitems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Burger Builder</NavigationItem>
        </ul>
    )
}
export default NavigationItems