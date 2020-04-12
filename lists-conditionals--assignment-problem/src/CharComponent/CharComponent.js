import React from 'react';

const charComponent = (props) =>{
    const charStyle = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
      };

    return(
        <p onClick = {props.deleteMethod} style={charStyle}>{props.char}</p>
        // <div className = 'col bg-warning mx-auto px-2'>
        //     <p>{props.char}</p>
        // </div>
    );
}

export default charComponent;