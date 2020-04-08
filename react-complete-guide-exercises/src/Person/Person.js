import React from 'react';

const person =  (props) => {
    return (
        <div>
            <p onClick = {props.click}> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
            <input className="form-control" type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;