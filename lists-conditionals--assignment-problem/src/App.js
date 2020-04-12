import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    input: '',
    chars: []
  }

  inputChangedHandler = (event) => {
    const newInput = event.target.value;
    this.setState({ input: newInput })

    const newCharArray = [...newInput]
    const newChars = [];
    let index = 0;
    newCharArray.map(c =>{
        newChars[index] = {
          char: c,
          index: index
        }
        index++;
    })

    this.setState({
      chars: newChars
    })
  }

  charDeletedHandler = (index) => {
    let charsCopy = [...this.state.chars];
    charsCopy.splice(index, 1)

    const charArray = []
    let customIndex = 0;
    charsCopy.map(c =>{
      charArray[customIndex] = c.char
      customIndex++;
    })
    this.setState({
      chars: charsCopy,
      input:  charArray.join()
    })
  }

  render() {
    let inputLength = this.state.chars.length
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h2 className="h5">George, Liza - Assignment 2</h2>
            <p className="display-4">Lists and Conditionals</p>
            <p className="lead">April 11, 2020</p>

            <input onChange={this.inputChangedHandler}></input>
            <p> {inputLength} </p>

            <ValidationComponent length={inputLength}></ValidationComponent>

            {
              this.state.chars.map((c) =>
                <CharComponent char={c.char} deleteMethod={this.charDeletedHandler.bind(this, c.index)}></CharComponent>
              )
            }

            {/* <div className='container'>
              <p> Characters: </p>
              <div className='row'>
                {
                  this.state.charArray.map((c) => 
                    <CharComponent char={c}>test2</CharComponent>
                  )
                }
              </div>
            </div> */}


            <hr />
            <ol>
              <li>[ x ] Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
              <li>[ x ] Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
              <li>[ x ] Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
              <li>[ x ] Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
              <li>[ x ] Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
              <li>[ x ] When you click a CharComponent, it should be removed from the entered text.</li>
            </ol>
            <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

          </div>
        </div>


      </div>
    );
  }
}

export default App;
