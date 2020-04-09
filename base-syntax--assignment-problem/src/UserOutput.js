import React from 'react';

const userOutput = (props) =>{
    return(
        <div>
            <p> {props.userName} <br/> {props.paraText} </p>
        </div>
    );
}

export default userOutput;
