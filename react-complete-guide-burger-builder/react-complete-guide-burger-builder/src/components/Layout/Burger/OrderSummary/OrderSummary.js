import React from 'react'
import Button from '../../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key =>{
        return <li key={key}><span style={{textTransform:'capitalize'}}>{key}</span> : {props.ingredients[key]}</li>
    });
    return (
        <div>
            <h3>Your Order</h3>
            <p>A burger with...</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>

        </div>
    )
}

export default OrderSummary
