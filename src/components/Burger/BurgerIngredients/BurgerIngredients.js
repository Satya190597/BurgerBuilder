import styles from './burgerIngredients.module.css';
import React from 'react'
import PropTypes from 'prop-types';

class BurgerIngredients extends React.Component{
    
    render() {
        let ingredients = null;
        switch(this.props.type) {
            case ('bread-bottm'):
                ingredients = <div className={styles.BreadBottom}>&nbsp;</div>
                break;
            case ('bread-top'):
                ingredients = (
                    <div className={styles.BreadTop}>
                        &nbsp;
                        <div className={styles.Seeds1}>&nbsp;</div>
                        <div className={styles.Seeds2}>&nbsp;</div>
                    </div>
                );
                 break;
            case ('meat'): 
                    ingredients = <div className={styles.Meat}>&nbsp;</div>
                break;
            case ('cheese'): 
                    ingredients = <div className={styles.Cheese}>&nbsp;</div>
                break;
            case ('bacon'): 
                    ingredients = <div className={styles.Bacon}>&nbsp;</div>
                break;
            case ('salad'): 
                    ingredients = <div className={styles.Salad}>&nbsp;</div>
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients