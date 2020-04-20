import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
import styles from './Burger.module.css'

const Burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type= "bread-top"/>
            <BurgerIngredient type= "cheese"/>
            <BurgerIngredient type= "meat"/>
            <BurgerIngredient type= "bread-bottom"/>

        </div>
    )
}

export default Burger
