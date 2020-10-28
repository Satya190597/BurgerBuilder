import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styles from './burger.module.css';
import BuildControls from './BuildControls/BuildControls';
const Burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,index) => {
            return <BurgerIngredients type={key} key={key+index} />
        })
    }).reduce((accumulator,ele) => {
        return accumulator.concat(ele)
    },[])

    transformIngredients = transformIngredients.length<=0 ? <p>Please Start Adding Ingredients</p> : transformIngredients;

    return (
        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformIngredients}
            <BurgerIngredients type="bread-bottm"/>
            <BuildControls/>
        </div>
    )
}
export default Burger