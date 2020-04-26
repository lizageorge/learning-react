import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.0,
    cheese: 0.5,
    bacon:0.5
};
class BurgerBuilder extends Component{
    state = {
        ingredients: { //list of ingredients and their quantities
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 1.0
    }

    addHandler = (type) =>{
        let myIngredients = {...this.state.ingredients};
        myIngredients[type]++;
        let myPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: myIngredients,
            price: myPrice
        })
    }
    lessHandler = (type) =>{
        let myIngredients = {...this.state.ingredients};
        let myPrice = this.state.price
        if(myIngredients[type] > 0){
            myIngredients[type]--;
            myPrice = this.state.price - INGREDIENT_PRICES[type]
        }
        
        this.setState({
            ingredients: myIngredients,
            price: myPrice
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            // <> is a shortcut for React.Fragment
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price= {this.state.price} addHandler = {this.addHandler} lessHandler = {this.lessHandler} disabledInfo = {disabledInfo}/>
            </>
        );
    }
}

export default BurgerBuilder