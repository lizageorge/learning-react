import React, { useEffect } from 'react'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] rerendered useEffect');
    }, []);


    const buttonStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <div>
            <h1> React Complete Guide Exercises</h1>
            <button style={buttonStyle} className="btn btn-success mt-4" onClick={() => props.changed('Ann (from button)')}>Change Name</button>
            <button style={buttonStyle} className="btn btn-warning mt-4" onClick={props.showPersons}>Show Person</button>
        </div>
    )
}


export default Cockpit;