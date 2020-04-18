import React from 'react';

const person =  (props) => {
    return (
        <div className="container py-2 my-3 bg-light">
            <p onClick = {props.click}> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
            <input className="form-control" type="text" onChange={props.changed} defaultValue={props.name}></input>
        </div>
    )
};

export default person;