import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Liza', age: 17, id: 'key1' },
      { name: 'George', age: 45, id: 'key2' }
    ],
    showPersons: false
  }

  changeNameHandler = (newName) => { // a functions definition within a function definition
    // DON'T DO THIS this.state.persons[0].name = 'Ann';
    this.setState({
      persons: [
        { name: newName, age: 17 },
        { name: 'George', age: 45 }
      ]
    })
  }

  nameChangedHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === key;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons })
  }

  showPersonHandler = () => {
    this.setState(
      {
        showPersons: (!this.state.showPersons)
      }
    )
  }

  deletePersonHandler = (index) => {
    let newPersons = [...this.state.persons] // create deep copy
    newPersons.splice(index, 1);
    this.setState({
      persons: newPersons
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler} //passing in method references
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div>
        <Cockpit
          changed = {this.changeNameHandler}
          showPersons = {this.showPersonHandler}
        />
        {persons}
      </div>
    );
  }
};


// function App() {
//   return (
//     <div>
//       <Person name = "Liza" age = "17"> playing the flute </Person>
//       <Person name = "George" age = "45"> learning Illustrator </Person>
//     </div>
//   );
// }

export default App;
