import React from 'react';

const userInput = (props) =>{
    return(
        <div>
            <input type='text' onChange={props.nameChangeMethod} value={props.userName}></input>
        </div>
    )
};

export default userInput;
