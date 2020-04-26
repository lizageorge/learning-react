import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},

];

const BuildControls = (props) => {
    return (
        <div className = {styles.BuildControls}>
            <p>Current Prics: $<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key ={ctrl.label} 
                    label={ctrl.label} 
                    addHandler = {props.addHandler} //his solution was nearly identical to mine, except instead of passing down type...
                    lessHandler = {() => props.lessHandler(ctrl.type)} //he defined the function with the parameter here itself, and used only the function reference on the click listener in BuildControl 
                    type = {ctrl.type} 
                    disabledInfo = {props.disabledInfo[ctrl.type]}
                />
            ))}
            <button 
                disabled={!props.purchasable} 
                className = {styles.OrderButton} 
                onClick = {props.purchasing}
                >ORDER NOW</button>
        </div>
    )
}

export default BuildControls
