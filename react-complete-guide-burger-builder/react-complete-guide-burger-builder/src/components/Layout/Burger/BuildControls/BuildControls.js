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
            {controls.map(ctrl => (
                <BuildControl key ={ctrl.label} label={ctrl.label} addHandler = {props.addHandler} lessHandler = {props.lessHandler} type = {ctrl.type} />
            ))}
        </div>
    )
}

export default BuildControls
