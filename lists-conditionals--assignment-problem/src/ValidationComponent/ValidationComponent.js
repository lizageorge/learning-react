import React from 'react'

const validationComponent = (props) => {
    const textLength = props.length
    //min = 5 char
    //max = 10 char

    let validation = (
        <p> Text is just fine~</p>
    );
        
    if (textLength < 5) {
        validation = (
            <p>Your input it too short! It needs to be at least 5 characters long.</p>
        )
    }

    if (textLength > 10) {
        validation = (
            <p>Your input it too long! It needs to be no more than 10 characters long.</p>
        )
    }

    return (
        <div>
            {validation}
        </div>
    )
}

export default validationComponent;