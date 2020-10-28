import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styles from './Burger';
const Burger = (props) => {

    const transformIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,index) => {
            return <BurgerIngredients type={key} key={key+index} />
        })
    })
    return (
        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformIngredients}
            <BurgerIngredients type="bread-bottm"/>
        </div>
    )
}
export default Burger