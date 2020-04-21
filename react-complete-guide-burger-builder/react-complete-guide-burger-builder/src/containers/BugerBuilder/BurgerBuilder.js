import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    state = {
        ingredients: { //list of ingredients and their quantities
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return(
            // <> is a shortcut for React.Fragment
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </>
        );
    }
}

export default BurgerBuilder