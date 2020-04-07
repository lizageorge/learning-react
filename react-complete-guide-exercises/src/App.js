import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state = {
    persons: [
      {name:'Liza', age: 17},
      {name: 'George', age: 45}
    ]
  }

  changeNameHandler = () =>{
    // DON'T DO THIS this.state.persons[0].name = 'Ann';
    this.setState( {
      persons: [
        {name:'Ann', age: 17},
        {name: 'George', age: 45}
      ]
    } )
  }

  render() {
    return(
      <div>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}> playing the flute </Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> learning Illustrator </Person>
        <button onClick={this.changeNameHandler}>Change Name</button>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div>
//       <Person name = "Liza" age = "17"> playing the flute </Person>
//       <Person name = "George" age = "45"> learning Illustrator </Person>
//     </div>
//   );
// }

export default App;
