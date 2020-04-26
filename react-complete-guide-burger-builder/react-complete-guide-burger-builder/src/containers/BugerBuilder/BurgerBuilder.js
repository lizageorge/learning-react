import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary';

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
        price: 1.0,
        purchasable : false,
        purchasing: false
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }
    
    purchaseContinueHandler = () =>{
        alert('You continue');
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients).map(key => ingredients[key]).reduce((sum, el) => sum+el, 0); //high-key overcomplicating this...just getting a sum of all the ingredients' quantities
        let myPurchasable = sum>0
        this.setState(
            {purchasable: myPurchasable}
        )
    }

    addHandler = (type) =>{
        let myIngredients = {...this.state.ingredients};
        myIngredients[type]++;
        let myPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: myIngredients,
            price: myPrice
        })
        this.updatePurchaseState(myIngredients);
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
        this.updatePurchaseState(myIngredients);
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.price}
                        ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price= {this.state.price} 
                    addHandler = {this.addHandler} 
                    lessHandler = {this.lessHandler} 
                    disabledInfo = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    purchasing = {this.purchaseHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder