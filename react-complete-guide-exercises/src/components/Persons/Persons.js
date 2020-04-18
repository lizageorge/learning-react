import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((p, index) =>
    <Person
        name={p.name}
        age={p.age}
        click={() => props.click(index)} //calling that method
        key={p.id}
        changed={(event) => props.changed(event, p.id)}
    ></Person>);

export default persons;