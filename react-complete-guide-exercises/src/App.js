import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state  = {
    persons: [
      {name:'Liza', age: 17, id: 'key1'},
      {name: 'George', age: 45, id: 'key2'}
    ],
    showPersons:false
  }


  changeNameHandler = (newName) =>{ // a functions definition within a function definition
    // DON'T DO THIS this.state.persons[0].name = 'Ann';
    this.setState( {
      persons: [
        {name: newName, age: 17},
        {name: 'George', age: 45}
      ]
    } )
  }

  showPersonHandler = () => {
    this.setState(
      {
        showPersons: (!this.state.showPersons)
      }
      
    )
  }

  deletePersonHandler = (index) =>{
    let newPersons = [...this.state.persons] // create deep copy
    newPersons.splice(index, 1);
    this.setState({
      persons:newPersons
    })
  }

  render(){
    const buttonStyle = {
      backgroundColor: 'white',
      color: 'black'
    }

    let persons = null;
      if (this.state.showPersons){
          persons = (
            <div>
              { this.state.persons.map( (p, index) => 
                <Person 
                  name = {p.name} 
                  age = {p.age}
                  click = {() => this.deletePersonHandler(index)}
                  key={p.id}
                ></Person>)}
            </div>
          )
      }

    return (
      <div>
        <h1> React Complete Guide Exercises</h1>
        <button style = {buttonStyle} className = "btn btn-success mt-4" onClick={() => this.changeNameHandler('Ann (from button)')}>Change Name</button>
        <button style = {buttonStyle} className = "btn btn-warning mt-4" onClick={this.showPersonHandler}>Show Person</button>
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
