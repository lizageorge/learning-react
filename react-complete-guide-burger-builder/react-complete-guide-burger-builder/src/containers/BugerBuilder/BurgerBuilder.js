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

    addHandler = (type) =>{
        let myIngredients = {...this.state.ingredients};
        myIngredients[type]++;

        this.setState({
            ingredients: myIngredients
        })
    }
    lessHandler = (type) =>{
        let myIngredients = {...this.state.ingredients};
        if(myIngredients[type] > 0){
            myIngredients[type]--;
        }
        this.setState({
            ingredients: myIngredients
        })
    }

    render() {
        return(
            // <> is a shortcut for React.Fragment
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addHandler = {this.addHandler} lessHandler = {this.lessHandler}/>
            </>
        );
    }
}

export default BurgerBuilder