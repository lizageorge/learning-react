import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state  = {
    persons: [
      {name:'Liza', age: 17},
      {name: 'George', age: 45}
    ]
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

  nameChangedHandler = (event) =>{
    this.setState( {
      persons: [
        {name: 'Liza', age: 17},
        {name: event.target.value, age: 45}
      ]
    } )
  }

  render(){
    return (
      <div>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.changeNameHandler.bind(this, 'Ann (from para)')}
          > 
          playing the flute 
          </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed={this.nameChangedHandler}> 
          learning Illustrator 
        </Person>
        <button className = "btn btn-success mt-4" onClick={() => this.changeNameHandler('Ann (from button)')}>Change Name</button>
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
