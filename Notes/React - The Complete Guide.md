# The Bootstrap 4 Bootcamp
> April 4 - 12, May 21 -  2020
> using "React - The complete guide", by Maximilian Schwarzmuller on Udemy


## The Basics
- React is a Javascript library used to make the creation and maintanance of UIs easier. JS applications, because they run entirely on the browser, are fast.
- alternatives incl. Angular and Vue
- It's structured to be a *heirarchy of components*, which can be functional or class-based and can include repeatable HTML code. As per a single-page application, one component will have the primary to render the final html.  

- there are two kinds of applications
    - *single-page application* = there is only one HTML page, all content is (re)rendered as components, keeping all function calls in one variable (app, root, etc.) and have a sinle ReactDOM.render() calling that var
        - faster, more popular
    - *multi-page application* = multiple HTML pages, content is rerendered on the server, not all content is in React components and there is a ReactDOM.render() per widget

### Setting up a React project
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
### Using Components
- to *create a component*, create a function/class that returns the JSX code you're repeating in a new file.
    ```javascript
    import React from 'react';

    const person =  () => {
        return(
            <p> 'I\'m a person~' </p>
        );
    }

    export default person; 
    ```
    - use uppercase for file names and folders, and use uppercase for creating all components. the lowercases are reserved for JSX
- *A Bit about JSX*
    - **JSX** is a way to insert HTML markdown straight into a JS file, and is recommended by React. You can insert any JS *statements* into JSX HTML by surrrounding it in curly braces. You can make your JSX code multi-lined for readibility, so it looks like HTML, just be sure to put that in parentheses to avoid automaic semicoon insertion. JSX is also able to avoid injection attacks by escaping certain symbols like angle brackets. 

### Making an ineractive/dynamic page
- there are two ways to change the content of a page dynamically and selectively; change a prop inputted to a component, or change the state of a component. This way, React can watch the Vitrual DOM - that you can make specific changes to - find the specific area that changes, and rerenders just that bit of the DOM.
    - to output *dynamic content* from the component, use `{}` within the "html" content space to distinguish your code statement from text.  use **props** to receive parameters passed as the html-ish configs and `props.children` to access content between the tags (which can be more html-ish). You can also pass in functions if you want.
        - to achieve the equivalent of outputting "I am Liza and I am 17,..." with this...
        
        ``` javascript
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
            - We're using a button to change the contents; there's a specific list of events with corresponding methods to use. Create a method to specify what happens on the event (the naming convention here is to end the method name in "Handler"), in which you should use `setState()` to overside a property of state. Do not try and directly access and change a specific value, because it could mess with other properties. We're also using two-way binding here, connecting the input inserted on the page to the actual value in the code, by setting `value = {props.name}` in the Person definition. This allows the input field to display he right value right when the program is opened.
                ```javascript
                //App.JS
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
                //Person.js
                const person =  (props) => {
                    return (
                        <div>
                            <p onClick = {props.click}> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
                            <input className="form-control" type="text" onChange={props.changed} value={props.name}></input>
                        </div>
                    )
                };
                ``` 
            - here we're setting it up to accept input, listen for an event, and change with that event to display the inputted text. The handler method is accepting an `event` object.
            ```javascript
            //inside Person.js
            const person =  (props) => {
                return (
                    <div>
                        <p onClick = {props.click}> I'm {props.name} and I am {props.age} years old. My hobbies include {props.children}!</p>
                        <input className="form-control" type="text" onChange={props.changed} value={props.name}></input>
                    </div>
                )
            };
            //inside App.js
            nameChangedHandler = (event) =>{
                this.setState( {
                persons: [
                    {name: 'Liza', age: 17},
                    {name: event.target.value, age: 45}
                ]
                } )
            }
            /// ...
            <Person 
                name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age}
                changed={this.nameChangedHandler}> 
                learning Illustrator 
            </Person>
            ```

            - *More on events*
                -  the JS `.addEventListener()` method takes two objects; a string called type, and an EventListener object of type listener. Every html element has an EventListener, which is just an object that keeps track of all info related to possible events (mouse position, hover status, click status, etc.). When you call the method, you will include a function (can be an arrow func) into the second parameter specifying what should happen on an event. You would repeat this once for each element used for interaction. 
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
                - using an arrow function, you're basically returning the function call, which is why this is the only time you'll see the `()` inside the component (also a bit inneficient)
                ```javascript
                <button onClick={() => this.changeNameHandler('Ann (from button)')}>Change Name</button>
                ```


        - To use state on function-based components, you will have to use **react hooks**, a feature available from React 16.8
            - = react functions that allow you to add functionality to function-based components
            - import the hook `useState()` from react and use it in your main component. useState() will always return an array of two elements, first is the current state expressed as an object and the second is a funciton to update (replace!) that state. You initialize it with the starting state in the param. When you call that method, you can either include new state in the param or an arrow function, which should incl the previous state in the param and return a new state object. 
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

## Styling
- Anytime you make a new stylesheet you must link it to the corresponding JS file by importing it at the top. Webpack will automatically insert your code to the public html file in the most efficient way possible. In this workflow, you make a lot of small CSS stylesheets. This will apply globally.
- Alternatively, you could use **in-line styling**, where you include a variable with styling properties inside the JS render method, and link it to the corresponding html element in return's parameter. This method is best for when you want a style to be isolated to a small component (scoped).
    ```javascript
    render(){
        const buttonStyle = {
        backgroundColor: 'white',
        color: 'black'
        }
        return (
        <div>
            ///...
            <button style = {buttonStyle} className = "btn btn-success mt-4" onClick={() => this.changeNameHandler('Ann (from button)')}>Change Name</button>
        </div>
        ); 
    }
    ```
- If you want *dynamic styling*, include definitions for the `style` variable inside if statements/however you make the rest of the content dynamic. If you want to dynamically edit the `className`s of different components (to work with Bootstrap, for example), simply make a new variable for the list of classes (an array of strings), and replace the className value with that var name and `.join(' ')` attached to the end. Remember, everything - including the HTML and styling and React - is all JS.
- if you want to use psuedoclasses and mediaqueries with JS inline styles, you can use something called **Radium** 
    - use npm to install radium and import it to the appropriate files
    - at the bottom where you export your component, wrap it with the Radium feature (this creates *high order components*)
        ```javascript
        export default Radium(App)
        ```
    - now in your style definitions, use the following syntax for psuedoclases;
        ```javascript
        const style = {
            `:hover`:{
                color: 'red'
            }
        }
        //overriding it later
        style['hover'] = { //note that you can't acces what should be an object property with a period, bc of the string format
            color: 'green'
        }
        ```
    - for transformative selectors (like media queries), you'll have to first wrap your entire return() method contents in the root component with  `<StyleRoot></StyleRoot>`, and use the following syntax; 
        ```javascript
        const style = {
            `@media (min-width: 500px)`:{
                width: 450px
            }
        }
        ```
- alternatively, you can use the **stylecomponents** library, which uses JS's tagged ticks to transform all regular html elements to include CSS.   
    - to use styledsheet...
        - install and import styledcomponents to the applicable file
        - set up a variabele to hold styles, like before, but set it to equal the output of a method called `style.[htmlElementName``]` with CSS styles instered inbetween the ticks
            - if you want to use pseudoclasses, include an `&` before the name of the property (like `&:hover: {} `)
        - wrap the applicable render contents in a tag with the name of that var
    - styledcomponent will create html elements as you specify and create CSS files to link them to
    - if you want to make this styling dynamic, include an `alt{}` config in the HTML tag you entered earlier, with a boolean inside. Then where you define the value of the CSS properties, include JS that accepts `props` to complete the conditional statement inside `${}`

- alternatively, you can scope your CSS files to certain components using **CSS Modules**, which is a way to work with webpack to make sure that repeated class names don't clash. 
    - If you're starting a new project (without typescript) the new version of react handles the addition of css-modules. If you are using typescript, you need to use the plugin `typescript-plugin-csss-modules`. If you're changing a preexisting file, you need to eject, update your webpack configs to include `module:true` and a localIndenName to css.test. 
    - Now in your JS, change your CSS file import statement to include a name (for example, `import classes from '.\App.css'`, instead of just `import '.\App.css`), replace all CSS file className calls with `{classes.{the class name}}` (a dynamic call). 
    - If you want styles to only aply to certain componenets, include the component name in front of all the class names in the CSS file and JS component. Watch out that the newer React versions have a different syntax to work with


## Using Conditional Content and Lists
- Just remember, you can use everything that coms with JavaScript, you just need to know how to incorporate it to different components

### Rendering Content Conditionally
- Within your return/render method itself, you can include ternary operators within curly braces
    - here, we check for the state property showPersons; if it's true, the JSX for rendering the Persons elements will pass, if not then nothing ('`null`') will happen. The togglePersonsHandler method will make sure the state switches correctly
    ``` javascript
    render(
        return(
            <buton
            onClick = (this.togglePersonsHandler})>
            /// ...
            {
                this.state.showPersons ? /// (aka this.state.showPersons === true ?)
                <div>
                    ///<Person/>...
                </div> : null
            }
        )   
    );
    ```
- alternatively, you can include a variable definition and if statement outside the return method but inside the render mehod. Because render() will be called everytime React checks to see if the content needs to be updated.
    ```javascript
    render(
        let persons = null;
        if (this.state.showPersons){
            persons = (
                // <Person/> ...
            )
        }
        return{(
            <div>
                ///...
                {persons}
            </div>
        )}
    )

### Working with Lists
- you can use regular JS list features and funcs in your render method, as long as it's all contained within curly braces
    - here, the `map()` func taken in an array as an implicit parameter and a func to use on the elements of that array as an explicit parameter. If you want access to the index of an elelment in the arrow func, you can add index as a second explicit parameter.It will map every element in the first array to a "new array".
    ```javascript
    <div>
        { this.state.persons.map( (p) => <Person name = {p.name} age = {p.age}></Person>)}
    </div>
    ```
- every element JS works with has a `key` property. By assigning something unique to certain elements, you can make sure that React only renders things that have changed and need to be rerendered. 
    ```javascript
    { this.state.persons.map( (p, index) => 
        <Person 
            name = {p.name} 
            age = {p.age}
            click = {() => this.deletePersonHandler(index)}
            key={p.id}
            changed = {(event) => this.nameChangedHandler(event, key)}
        ></Person>)}
    ```


## Debugging React Apps
- The error messages are usually clear and give the line number of the offending command. They're pretty :thumbs-up:
    - You can add your own errors (standard JS feature), but you can also create a new class-based component (**Error-Boundaries**) that will handle your errors, and wrap you root component (or anything more specific) with that component (now a higher-order component). Now when you run your code on build mode, an error will be caught, and a custom error message can be shown instead of the whole page being replaced with DevTool's error message. It's recommended to only use this where you can predict a possible error, not wrap all of your code in them.  
- To find logic errors (run-time errors that the compiler won't point out), use the Chromium Developer Tools of the browser, and under the sources tab you can find all of *your* source code, and use the debugger. Or, you can add the React Developer Tools extension to find Components and Profiler in the Chromium DevTools. 


## Diving Deeper into Componenets and React Internals
### A good Project Structure
- each component should have a single, unique purpose, and be 'granular' (small)
- use function-based components for visual elements that don't involve state, and class-based components to use state
- container components/the rendering component shoudln't have much UI specifiying. For example, it's better practice to have a component for Person, a component for PersonList/Persons, and include just the Persons component in the render() method
    ```javascript
    //Persons.js
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

    //App.js
    persons = (
            <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler} //passing in method references
            changed={this.nameChangedHandler}
            />
        )
    ```
- A recommended folder structure is to have folders for Components, Assests(images, etc.), and Containers in the src folder. Of course, add extra folders inside those for convenience.
    - The container component ([]App.js) only includes the state, the handler methods, and the render method
    - You can create a 'cockpit' component to hold the displaying for the header, the logic associated with that (incl. for styling) etc.

### More on Statefull vs. Stateless components
- statefull components were traditionally class based componenets bc react hooks, which allow use of state in function-based componenets are new
- in react, *data flows down*; neither parent nor child component needs to know if another component is function/class or statefull/staeless. State is encapsulated, so it cannot be accessed by any component other than the one that owns/defines it. However, state can be passed down as props to child components, creating a top-down data flow.
- it's still best practice to restrict the number of satefull componenets, so most of them are presentational/dumb. This keeps the app managable and easy to find logic errors in(they're more likely to be in the statefull components); the flow of data is more predictable

### More on Class-based and functional components
- class-based components 
    - ``` class XY extends Component {} ``
    - can...
        - access state
        - use lifecycle
    - access state and props via `this`
    - use if you need to manage state (w/o hooks) or access lifecycle

- functional components 
    - ``` const XY = (props) => {} ``
    - can..
        - access state (using react hook useState(), a new feature that the majority of projects don't use)
        - use props via function props
    - use in all other cases

### Component Lifecycle
-  = React will call a certain few methods at certain stages, with automatic cleanup. The lifecyle is those stages combined. In class-based components, we can use these methods to specify additional instructions to React for those stages.
- *at the creation of every component, the following happens...*
    - React calls a default `constructor(props)` method ( if you modify your constructor, use `super(props)` - don't include sideeffects)
    - then the react hook `static getDerivedStateFromProps(props, state)` can be called
    - then the `render()` method is called
        - everytime this is called, the internal React DOM is re-rendered, not the actual DOM
    - then any child componenets are created
    - then the `componentDidMount()` hook is called to signal the end of creation - here you can cause side-effects, but don't call state. (edit `componentWillUnmount()`)
- *at the update of any component (whether that's the component's props passed out or content passed in), the following happens...*
    - the react hook `static getDerivedStateFromProps(props, state)` is called - very rarely use this
    - then the bool funct `shouldComponentUpdate(nextProps, nextState)` can be called - you can block an update from happening to optimize performance. You can shallow compare the next state to the currect state
    - then the `render()` method is called, then any child componenets are created
    - then any child componenets are created
    - then `getSnapshotBeforeUpdate(prevProps, prevState)` can be called for last-minute DOM access ([] to get the last scrolling posision of a user)
    - then `componentDidUpdate()` can be called - here you can cause side-effects, but don't call state. This i sprobably what you'll use the most often

- there are a few older lifecycle hooks that aren't used anymore and will  eventually be removed from reach ([] copmonentWillRecieveProps, etc.). They technically can be used, but it's not recommended and again will be removed 

- you can only access and edit these lifecycle hooks from class-based componenets. But with React hooks, the equivalent to use when you want to edit what happens at different stages is `useEffect()`. 
    - If you pass in a function, it will pass that function anytime the corresponding component is rerendered in the React DOM. 
    - A second argument passed should be an array of elements to watch - now the function will only pass when that element changes. If you pass an empty array, it will run only when the component is first created. 
    - if you want something to execute right when the component is gotten rid of/unmounted, include it in the return() of the specified method passed in the first argument and pass an empty array in the second argument (the equivalent of using componentWillUnmount() on class components)
    - You can have as many useEffect() calls as you want. 
    - **In later versions of React, a function-based component must have a capitalized name to be recognized as a function component for this to work*

- **Optimizing re-rendering**
    - Use `shouldComponentUpdate` with class components. 
    - if you change your export line to `export defualt memo([componentName])`, React will memoize/store a snapshot of this component. Now, you can tell whenever the component actually changes and rerendering is necessary. This is the equivalent of optimization using `shouldComponentUpdate` with class components. 
    - Still, you shouldn't just wrap every single component export with this bc there are componenets that has to update every time the parent updates - the code to use shouldComponentUpdate() works the same way too. (*"There's a thing called premature optimization - don't do it"*)
    - an alternative to using shouldComponentUpdate is to extend `PureComponent` instead of `Component`, because it automatically comes with a shouldComponentUpdate reference that checks for any changes in the props nicely

### Rendering adjacent top-level JSX element
- if you remember, you normally can only have one top-level JSX element in the return/render methods. There's a few ways to get around this...
- you can put your elements into an array, with each having a unique key
- you can create a component to use purely as a wrapper around the top-level elements in your og component. Every element should be an attribute, and they will be called as props.children. 
    ```javascript
    const foo = (props) => props.children;
    export default from Foo;
    ```
- similarily, you can use React.Fragment, which does the same thing.

### Higher Order Components
- = components that only wrap other components, and don't contain logic or purpose of its own
    - []<div> that we used to wrap the content of our return methods, or the foo/React.Fragment components from ^
    - it's convention to use `With[name]` for the name of these components, and place within a folder called "hoc".
- you can either create a component to wrap all of your JSX in...
    ```javascript
    //WithClass.js
    import React from 'react';

    const WithClass = (props) => {
        <div>props.children</div>
    }

    export default from WithClass;

    //App.js
    //...
    return(
        <WithClass>
            //all JSX
        <WithClass/>
    )
    ```
- or you create a function that returns a React component to act as a wrapper component
    ```javascript
    //withClass.js
    import React from 'react';

    const withClass = (WrappedComponent, anyAdditionalProps) => { //props for if you want to use it
        return props =>{
            <div> <WrappedComponent {...props}/> </div> //this spreading will allow the props from the wrapped class to be successfully passed to it's component file
        }
    }

    //App.js
    return(
        <anyWrapperClass>
            //all JSX
        <anyWrapperClass/>
    )
     export default withClass(App, classes.App);
     ```
- wrapper classes like this can help add styling, additional html structure, or error handling

### Using setState() correctly
- if you ever need to change state in a way that depends on what state was before, don't just call this.state like this, because there could be delays among simultaneous setState calls throughout the code and there's no guarantee this will work;
    ```javascript
    this.setState({
        changeCounter: this.state.changeCounter + 1;
    })
    ```
- instead, do this;
   ```javascript
    this.setState( (prevState, props) => { //props if you need them
        changeCounter: prevState.changeCounter + 1; //one-line return statement
    })
    ```

### Using propTypes
- improve the way props are used; when working with a team, it's good to make it clearer what each prop accepts, and send alerts when an incorrect type is passed
- import `propTypes`, an additional/optional React library. Now after your component definition in the file, call 
    ```javascript 
    anotherComponent.propTypes = {
        propN: PropTypes.[dataType],
        name: PropTypes.string
        changed: PropTypes.func
    }
    ```
    - now, if someone tries to pass an int into name, for example, the compiler will return a clear error saying so
- this is, of course, builtin to TypeScript
### Using the Context API
- whenever you have data that you have to pass from Component A to Component D while Componenets B and C doesn't care about that data, you either have to forward it through each component in props (imagine passing authentication info from App >> Persons >> Person), or you can use Context
- a Context is a JS object that can be made globally available. In your container component, wrap all the components that require access to the information. In your "consuming" component, wrap the elements that will use that info.

```javascript
//authcontext.js
import React from 'react'

const AuthContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;

//App.js
return(
    //..
    <AuthContext.Provider value = { {authenticated: this.state.authenticated, login: this.loginHandler} }>
    </AuthContent.Provider>
)

//Person.js
render(){
    return(
        <AuthContext.Consumer>
        { (context) => context.authenticated? <p>Authenticated!</p> : <p>Please Log in!</p>}
        </AuthContext.Consumer>
    )
}
```
- there is an alternative way to use context in class-based components that will give you access to context info outside just the JSX, starting from React 16.6
    ```javascript
    class Person extends Component{
        //...
        static contextType = AuthContext; //the name has to be contextType

        componentDidMount(){
            console.log(this.context.authenticated)
        }
    }
    render(){
        return(
            //...
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in!</p>}
        )
    }
    ```
- for functional components, you have to use the React hook `useContext()`
    ```javascript
    const cockpit = props =>{
        const authContext = useContext(AuthContext);

        console.log(authContext.authenticated)

        return(
            //...
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in!</p>}
        )
    }
    ```
- there's another way to pass data around, called Redux, but that's for another day. 

### Using refs
- in class based components, you can add the `ref` keyword to the attributes of any JSX element to very easily access that element later on. Here, the last input element will be focused...
    - older approach...
        ```javascript
        componentDidMount(){
            this.inputElement.focus();
        }
        //...
        render(){
            //...
            <input
                //..
                ref = { (inputEl)) => this.inputElement = inputEl}
            >
        }
        ```
    - newer approach...
        ```javascript
        contructor(props){
            super(props),
            this.inputElementRef = React.createRef()
        }
        //...
        render(){
            //...
            <input
                //..
                ref = {this.inputElementRef}
            >
        }
        ```
- in a functional component, you replace React.createRef() with the hook `useRef()`. Here, the button will be clicked every time the page reloads.
```javascript
    const toggleBtnRef = useRef(null);
    useEffect( () =>{
        toggleBtnRef.current.click();
    })
    //...
    return(
        //...
        <button
            //..
            ref = {toggleBtnRef}
        >
    )
```

## Building a project - Burger Builder

### Planning a React app
- Step 1: Plan the Component Tree (initial version)
    - start with a full UI (usually provided by the designer), and make an app component with a root/wrapper layout component and pick out all the components necessary for that ([] if the UI includes a navbar, the layout component will have a navbar comp., with logo, navbar toggle and nav-items comp.s)
- Step 2: Plan application state/data
    - decide what data the application needs, and the component to manage that state ( [] the BurgerBuilder comp. should manage a state with an array of ingredients, total price, etc.)
- Step 3: Plan which components should be stateless/statefull, what should the containers look like?

### Building Process 
- always design your styling to be mobie-first, and use media queries to handle for larger sizes
- if you're not working just by yourself, add PropTypes to all your props (or just use Typsescript lmao)
- to avoid uncessary rerenders, watch out for using extra pure components, be careful where and when you change state, and use lifecycle methods (esp shouldComponentUpdate()) if necessary
- remember to use a granular structure, outsource code o reusable components