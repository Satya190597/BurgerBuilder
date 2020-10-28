import React from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger'; 
class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad:1,
            bacon:1,
            cheese: 2,
            meat:1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        )
    }
}
export default BurgerBuilder;