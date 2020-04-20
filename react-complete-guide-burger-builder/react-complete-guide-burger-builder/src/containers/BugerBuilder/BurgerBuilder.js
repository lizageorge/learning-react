import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger';

class BurgerBuilder extends Component{
    render() {
        return(
            // <> is a shortcut for React.Fragment
            <>
                <Burger/>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder