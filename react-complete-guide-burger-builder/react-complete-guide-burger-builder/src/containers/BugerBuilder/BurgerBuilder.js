import React, { Component } from 'react'

class BurgerBuilder extends Component{
    render() {
        return(
            // <> is a shortcut for React.Fragment
            <>
                <div>Burger</div>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder