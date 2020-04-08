import React from 'react';

const person =  (props) => {
    return(
        <p onClick = {props.click}> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
    );
}

export default person;