import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  state = {
    username: 'liza'
  }

  nameChangeHandler = (nameChangedEvent) =>{
    this.setState({
      username: nameChangedEvent.target.value
    })
  }

  render() {
    const userNameBoth = this.state.username
    return (
      <div className="App">

        <div className="container">
          <div className="jumbotron">
            <h2 className="h5">George, Liza - Assignment 1</h2>
            <p className="display-4">Basic React Syntax</p>
            <p className="lead">April 8 (+ 9th, after midnight), 2020</p>

            <UserInput className='my-3' userName={userNameBoth} nameChangeMethod={this.nameChangeHandler}> </UserInput>
            <UserOutput className='my-3' userName= {userNameBoth} paraText='Para 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ></UserOutput>
            <UserOutput paraText='Para 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ></UserOutput>

            <hr/>

            <ol>
              <li>[ ] Create TWO new components: UserInput and UserOutput</li>
              <li>[ ] UserInput should hold an input element, UserOutput two paragraphs</li>
              <li>[ ] Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
              <li>[ ] Pass a username (of your choice) to UserOutput via props and display it there</li>
              <li>[ ] Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
              <li>[ ] Add a method to manipulate the state (=> an event-handler method)</li>
              <li>[ ] Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
              <li>[ ] Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
              <li>[ ] Add two-way-binding to your input (in UserInput) to also display the starting username</li>
              <li>[ ] Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
            </ol>

          </div>
        </div>
      </div>
    );
  }
}

export default App;


/*
Excerice Results
- I didn' put the components into seperate folders, which is best practice
- I accidentally forgot to created two paras in one UserOutput element
- I chose to use Bootstrap for styling instead of using a style property and inline styles or a custom stylesheet
*/
