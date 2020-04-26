import React from 'react'

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
            <p>Continue to checkout</p>
        </div>
    )
}

export default OrderSummary
