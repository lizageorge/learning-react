# The Bootstrap 4 Bootcamp
> April 4, 6 2020
> using "React - The complete guide", by Maximilian Schwarzmuller on Udemy


## The Basics
- React is a Javascript library used to make the creation and maintanance of UIs easier. JS applications, because they run entirely on the browser, are fast.
- alternatives incl. Angular and Vue
- It's structured to be a *heirarchy of components*, which can be function-based or class-based and can include repeatable HTML code. As per a single-page application, one component will have the primary to render the final html.  

- there are two kinds of applications
    - *single-page application* = there is only one HTML page, all content is (re)rendered as components, keeping all function calls in one variable (app, root, etc.) and have a sinle ReactDOM.render() calling that var
        - faster, more popular
    -*multi-page application* = multiple HTML pages, content is rerendered on the server, not all content is in React components and there is a ReactDOM.render() per widget

- Setting up a React project
     - you can use NPM or yarn to use create-react-app and download all the necessary files and organizes the package.json and the public and src folders
     - you will work out of the src folder, where you can see that the index.js file automatically has a single ReactDOM.render() call, and App.js is your main file to work out of
     - the App.js file *must have a function/class named App with a return()/render(); method. The content will be put into that render method*.
     - The content within the return()/render() method is written is **JSX**, which is a way to write "html" into a .js file. That "html" will be compiled  into `React.createElement({element}, {configurations}, {content})` calls
        - while the "html" is very similar syntactically to actual html, there are a few differences; for example, `class` is replaced with `className`. Also, you can't return more than one top-level elements, so you must wrap everything into one div element. (imagine the equivalent two React.createElement calls instead of one with two children).
        - the following are equivalent:
        ``` javascript
        return (
            <div className="App">
            <h1>Hello There!</h1>
            </div>
        );
        ```
        ``` javascript
        return (
            React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello there!'))
        );
        ```
- Using Components
    - to *create a component*, create a function that returns the JSX code you're repeating in a new file.
        ```javascript
        import React from 'react';

        const person =  () => {
            return(
                <p> 'I\'m a person~' </p>
            );
        }

        export default person; 
        ```
        - use uppercase for file names and folders, but use lowercase for creating classes. the lowercases are reserved for JSX "html-ish" syntax
    - there are two ways to change the content of a page dynamically and selectively; change a prop inputted to a component, or change the state of a component. This way, React can watch the Vitrual DOM - that you can make specific changes to - find the specific area that changes, and rerenders just that bit of the DOM.
        - to output *dynamic content* from the component, use `{}` within the "html" content space to distinguish your code statement from text.  use **props** to receive parameters passed as the html-ish configs and `props.children` to access content between the tags (which can be more html-ish). You can also pass in functions if you want.
                - to achieve the equivalent of outputting "I am Liza and I am 17,..." with this...
                ```javascript
                <div>
                    <Person name = "Liza" age = "17"> playing the flute </Person>
                    <Person name = "George" age = "45"> learning Illustrator </Person>
                </div> 
                ``` 
                - do this...
                ```javascript
                //in Person.js's function definition...
                return(
                    <p> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
                );
                ```
        - to dynamically change a page according to component data, you need to use the `state` property in the final App class. State is a way to actvely update selective parts of a page because re-rendering a component (or parts of a component) is triggered when the methods meant to update that state are called
            - This is only possible on **class-based components** (as opposed to **function-based components**, which is what we've been using so far), which requires the extension of Component and the importing of Component too. 
                - Set the contents of the `state` property to something to be changed, and use `this.state` in your render method to access that; if anything in state is changed, it will *automatically tell React to update the DOM re-render the page*
                - We're using a button to change the contents; there's a specific list of events with corresponding methods to use. Create a method to specify what happens on the event (the naming convention here is to end the method name in "Handler"), in which you should use `setState()` to overside a property of state. Do not try and directly access and change a specific value, because it could mess with other properties. 
                ```javascript
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
                ``` 
                - now, the page will smoothly change the displayed name from Liza to Ann once the button is clicked without having to reload the whole page~!
                - if you want to *pass in parameters to the functions called inside a component, incl when you're passing as props*, you either use the bind() method or an arrow function
                    - using `.bind()`, you have to pass in the `this` keyword in front of whatever parameters you're including
                    ```javascript
                    changeNameHandler = (newName) =>{ //the modified function now accepts a parameter
                        this.setState( {
                        persons: [
                            {name: newName, age: 17},
                            {name: 'George', age: 45}
                        ]
                        } )
                    }
                    /// ... inside the render function...
                    <button onClick={this.changeNameHandler.bind(this, 'Ann (from button)')}>Change Name</button>
                    ```
                    - using an arrow function, you're basically returning the function call, which is why this is the only time you'll see the `()` insice the component
                    ```javascript
                    <button onClick={() => this.changeNameHandler('Ann (from button)')}>Change Name</button>
                    ```


            - To use state on function-based components, you will have to use **react hooks**, a feature available from React 16.8
                - = react functions that allow you to add functionality to function-based components
                - import the hook `useState()` from react and use it in your main component. useState() will always return an array of two elements, first is the current state expressed as an object and the second is a funciton to update (replace!) that state . The best way to use useState() is to call it multiple times to update the state alongside the replacing method it comes with.
                    ```javascript
                    const App = props =>{
                        const [personState, setPersonsState] = useState ({
                            persons: [
                            {name:'Liza', age: 17},
                            {name: 'George', age: 45}
                            ]
                        });


                        const changeNameHandler = () =>{ // a functions definition within a function definition
                            // DON'T DO THIS this.state.persons[0].name = 'Ann';
                            setPersonsState( 
                                {
                                persons: [
                                    {name:'Ann', age: 17},
                                    {name: 'George', age: 45}
                                ]
                                }
                            );
                        }

                        return(
                            <div>
                            <Person name = {personState.persons[0].name} age = {personState.persons[0].age}> playing the flute </Person>
                            <Person name = {personState.persons[1].name} age = {personState.persons[1].age}> learning Illustrator </Person>
                            <button onClick={changeNameHandler}>Change Name</button>
                            </div>
                        ); 
                    };
                    ```

            - whether you use func or class-based components, a component can be **statefull** (aka container/smart components) or **stateless** (or presentational/dumb components) depending on whether or not it uses state. It's best practice to use as few statefull components and more statefull components as possible.

