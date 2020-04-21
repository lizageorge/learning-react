import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
import styles from './Burger.module.css'

const Burger = (props) => {

    //big brain moment coming up...
    //converting the state object passed in into an array of arrays (ingredient list, each with an array of burgeringredient objects matching in number to the values in the state)
    let transformedIngredients = Object.keys(props.ingredients) //<- creates an array of the keys of the ingredients object
        .map(igKey => { //<- creates an array of the keys (salad, cheese, etc.)
            //we want to an array for each ingredient, with the length of the quantity of that ingredient. The value of the object will provide the key for the arrays and the type.
            //the first bit creates an array of arrays, ingredients of the type of the key, of length value. Then he called map on that THAT array to create a BurgerIngredient object with the type of the original key, and with a unique key of its own ("Cheese1", Cheese2". etc.) good lord.
            return [...Array(props.ingredients[igKey])].map((_, i) =>{ 
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce( (arr, el) => { //"flattening" the array
            return arr.concat(el);
        }, []); //reduce() takes in a reducer function and an initial value to add the results of that function to. The reducer function takes in an 'accumulator' and a 'currentValue', which here is two adjacent elements of our array (the big one), and adds them up together. The initial value is an empty array. NOW if there are no ingredients, this should result in an EMPTY array of length 0!
    
    //alert for zero ingredietns
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start adding ingredients~!</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type= "bread-bottom"/>
            
            {/* initially hard=coded ingredients
            <BurgerIngredient type= "bread-top"/>
            <BurgerIngredient type= "cheese"/>
            <BurgerIngredient type= "meat"/>
            <BurgerIngredient type= "bread-bottom"/> */}

        </div>
    )
}

export default Burger
