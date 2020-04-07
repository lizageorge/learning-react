import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props =>{
  const [personState, setPersonsState] = useState ({
    persons: [
      {name:'Liza', age: 17},
      {name: 'George', age: 45}
    ]
  });


  const changeNameHandler = () =>{ // a functions definition within a function definition
    // DON'T DO THIS this.state.persons[0].name = 'Ann';
    setPersonsState( {
      persons: [
        {name:'Ann', age: 17},
        {name: 'George', age: 45}
      ]
    });
  }

  return(
    <div>
      <Person name = {personState.persons[0].name} age = {personState.persons[0].age}> playing the flute </Person>
      <Person name = {personState.persons[1].name} age = {personState.persons[1].age}> learning Illustrator </Person>
      <button onClick={changeNameHandler}>Change Name</button>
    </div>
  ); 
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
