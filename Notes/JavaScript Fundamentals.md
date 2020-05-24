# JavaScript Fundamentals
> July 5th, 2019 + April 5, 2020
> Pluralsight course, JavaScript Fundamentals, by Mark Zamoyta

## Basic JS Features

- many of these features are Next-Gen JS features, so be sure to compile with a transpiler like Babel with presets 

### Variable Declarations
- **Constants** = use `const` = Like a variable, but the value will never change. Cannot be changed. They’re more to avoid programmer errors. It must be initialized, or it’ll give an error

- **let and var for Variable Declarations** = You can declare variables with the var keyword just like with the let keyword. But! If you define a variable with a var keyword after the use of that variable, JS won’t give an error it will only say ‘undefined’, whereas if you used the let keyword JS would give you a Reference Error
    - Also, if you use the let keyword in a code block, the variable will be contained within the code block. But if you use var, it won’t have block scoping.
    - Just use the let keyword. It’s simpler and newer. It’s like using === instead of ==.


### Rest and Spread Paramters
- **Rest Parameter**  
    - Using this allows you to define a function that can accept an argument as an array of multiple arrays multiple values
    ``` javascript
    function sendCars(...allCarIDs){
        console.log(allCarIDs.length);
    };
    sendCars(1, 5, 6);
    ``` 
    -  --> the func will create an array called allCarIDs, and this will print 3

    - If you want, you can include as many other normal parameters in the function as you want, but only one rest parameter (and the rest parameter must be the last in the list); when calling the function, just separate every value with a comma like normal. Once you’ve finished mapping the normal arguments our, the rest of them will go into the rest parameter
    - []console.log() is an example of a function that includes a rest parameter

- **Spread Syntax** 
     - The opposite of Rest parameters; define the function to accept separate arguments, but you can call the function with an array using spread syntax to automatically deconstruct it, OR call the function with an object and automatically seperate the object properties
    ``` javascript
    function sendCars(car1, car2, car3){
        console.log(car1, car2, car3;
    };
    let carIds = [100, 200, 300]
    sendCars(carIds);
    ``` 
    - --> prints 100, 200, 300
    - You can actually do the same thing replacing the array with a string; it’ll deconstruct the string into characters. (arrays and strings are called ‘iterables’). This syntax can be used outside a function too btw; you can console.log(...[arrayName]); to get each value separated out

    ``` javascript
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers];
    console.log(numbers);
    ```
    - ---> prints 1, 2, 3    
    - you can use this to make immutable copies of objects
    ``` javascript
    const person = {
        name: 'max',
        age: '48'
    }
    const person2 = {
        ...person
    };
    ```

- **Destructuring Arrays** = easily extracts specific array elements or object properties and store them in variables. The syntax looks a little weird, with prior specifications on the right of the equal sign
    ``` javascript
    const numbers = [1, 2, 3];
    [num1, , num3] = numbers;
    console.lot(num1, num3)
    ``` 
    - --> prints 1, 3

    ``` javascript
    let carIds = [1, 2, 3];
    let [car1, car2, car3] = carIds;
    console.log(car1, car2, car3);
    ```
    - --> prints 1, 2, 3. Here, in the second line you can keep the variable names on the left of the equal sign in square brackets, and the array name on the right. This is the same as just saying ‘varName = arrayName[0], varName = arrayName[1]... ‘. The array remains untouched
    - You can actually use rest parameter syntax here to store the rest of the values in remainingCars. The comma skips the first value of the array(you can skip as many as you want with more commas)

- **Destructuring Objects** = Same as destructuring arrays = assign values into variables
    ``` javascript
    let car = {id: 5000, style: 'convertible'};
    let {id, style} = car;

    console.log(id, style);
    ```
    - --> prints 5000 convertible. Here, you just replace the square brackets with curly braces. The variables ‘id’ and ‘style’ will hold the values of ‘id’ and ‘style’ in the object. The order of the key-value pairs in the object doesn’t matter
    - You might have some trouble initializing the destructuring vars later on b JS will assume you’re making a code block cause it uses {}. So put the line (except the semicolon) in ().


### Misc.

- **typeof()** = a func where if you pass a value, you can get the type. Watch out for null, which gives an object, and NaN(not a number) which gives a number. 
``` javascript
typeOf({}) //object
typeOf(null) //object
typeOf(undefined) //undefined
typeOf(NaN); //numbber
```
- **Common Type Conversions** = Different methods to convert. Watch out; there aren’t types called int and float, but you can convert numbers or strings into ‘int’s or ‘float’s. Very similar to Java
    - If there are non number characters in the string you pass into parseInt or parseFloat, JS’ll just ignore them
    - If your string begins with a non-number character, JS’ll just give ‘NaN’
    ```javascript
    foo.toString(); //converts to string
    Number.parseInt("55"); //converts string to int
    Numberr.parseFloat("55.99"); //converts string to float
    ```

- **Ways to control Loops**
    - you can initialize the variable outside the function parameter as long as you leave the semicolon
    - `break` can skip the remainder of a loop.
        ```javascript
        let i = 0;
        for(; i <12; i++)){
            if(i == 8){
                break;
            }
        }
        console.log(i) // 8
        ```
    - ‘Continue’ can skip the iteration of the loop you’re in and move on to the rest of the iterations ([]thing abt printing out 1-100 bt skipping 50). Here, this skipped 2.
        ```javascript
        for(let i = 0; i <4; i++)){
            if(i == 2){
                continue;
            }
            console.log(i)
        }
        // 0 1 3 4
        ```
    - The break and continue keywords will work with while loops too

## Operators
- **Equality Operators ===/!== **
     - To compare two values if they’re equal or unequal
        - `===` and `!==` require the two values 
- **Unary Operators ++ --**
    - Increment by one unit 
        - `i++`, `i--` vs `++i`, `--i` ; If you’re re-assinging a variable, be sure to have the operator before the value [ (val = ++val) not (val = val++)]
        - Single ‘-’ will make a value negative
        - If you increment a variable, it’ll convert to a number if there are number characters of give NaN if non-number characters

- **Logical (Boolean) Operators && / || / !**
    - `&&`  = and
    - `||` = or
    - `!` = switches the following bool value
    - If you use && and the first expression is false, it won’t even evaluate the second expression. If you use || and the first expression is true, it won’t even evaluate the second expression
    - Be careful about precedence - && has precedence over ||
    - You can use these operators to assign to variables. 
        ```javascript
        let foo =  true;
        let bar = false;
        let someBool = foo && bar;
        console.log(someBool); // false
        ```
        - And if you use values other than just true or false…the value’s expression will be whichever value *made* it true or false (the equivalent process to above, but using truthy/falsey)
            ```javascript
            let a = 11;
            let b = 12;

            let first = a || b;  // 11 made this value true FIRST, so that's what first was assigned to
            console.log(first) // 11

            let first = a && b;  // 12 was REQUIRED to make this value true, so that's what first was assigned to
            console.log(first) // 12
        ```

- **Relational Operators <, <=, >, >=**
    - Comparing numerical values are straight-forward
    - Comparing strings will compare the first character based on aski values. (Uppercase letter > lower case letters) > (a>z)
        - You can use string.toLowerCase or .toUpperCase to work around thi

- **Conditional(ternary) Operator ?** 
    - in place of an if/else statement
    ```javascript
    // condition ? expTrue : expFalse
    var result = (foo < 5) ? true: false;
    ```
    - This is equivalent to saying ‘If foo>5, console.log(true), else console.log(false)’
    - Parentheses are optional 

- **Assignment Operators +=, -=**
    ```javascript
    var1 += 10;
    var1 -= 10;
    var1 *= 10;
    var1 /= 10;
    var1 <<= 10;
    var1 >>= 10;
    var1 >>>= 10;
	```
    - Those last operators are bit-type operators ... naaah you don’t need to know that rn lmao

- **Operator Precedence**
    - You can check this in developer.mozilla.org for the full precedence table


## Function and Scope
- **Functions Scope** 
    -Variables in a function block stay in the function block. Nested functions are in the parent function’s scope (they can use and overide parent function variables), but variables in them are restricted to the nested function scope
- **Block Scope**
    - Part of the ECMA Standard 2015 version, or ES6
    - Block = code block = inside one set of {}
    - Just like with functions, other code blocks like loops and conditionals have scopes
    - Doesn’t apply to the var keyword - so just stick to let
    ```javascript
    let message = 'Outside';
    if (true){
        let message = 'Equal';
        console.log(message);
    }
    console.log(message);
    ```
    - → Equal, Outside
- The only difference bween function and block scope only exists when using var instead of let

- **IIFE’s** 
    - = Immediately Invoked Function Expression
        - Function Expression = using it
        - Immediately invoked = it’ll happen the moment it’s defined
        ```javascript
        (functionName() {
            console.log('in function');
        })(); // <-- immediately called right here
        ```
        - The function is defined, made into a statement by putting it in (), and invoked at the same time
    - Assign the IIFE to a variable and you call the function by using the variable name. You never name the function. A standard variable name to assign an IIFE is ‘app’. But only the function’s return value will be returned to the variable!
        ```javascript
        let app = (function() {
            let carId= 123;
            console.log('in function')
            return{};
        })();

        console.log(app);
        ```
        - → in function *(from the immediately invoked function)*,
            {} *(from when the variable was called, not the variable)*
    - IIFEs were an old way to organize code before modules

- **Closures** 
    - If you want the function’s scope stuffs to extend after the code runs through, have it return an object holding a variable. That variable can refer to a variable inside the function scope, since it’s still part of the function, and just that inside-function-scope-variable can be called from outside the scope
    - It’s like mimicking a class with variables and functions
        ```javascript
        let app = (function(){
            let carId = 123;
            let getId = function(){
                return carId;
            };
            return {
                getId: getId
            };
        })();
        console.log(app.getId() ); // --> 123
        ```

- **The** `this` **keyword** 
    - Refers to the *context* of a function. For example, if you had a function in an object as a property, using `this` would be the same as using the name of the object, ie. the object is the context.
    ```javascript
    let o = {
        carId: 123,
        getId = function(){
            return carId;
        }
    };

    console.log (o.getId() ); // --> 123
    ```
    - If you had a function outside of any object, then the context is just the whole *window* (which is a global object that stores all this stuff)
        ```javascript
        let fn = function() {
            console.log(this == window);
        };

        fn(); //true
        ```
    - So this is usually used to make objects with functions as properties

Call, apply and bind
There are different ways of using a function; you can invoke it [functionName](), call it or apply to change the value of this
Call:
So now the call function pushed the newCard value(which is an object with a key-value pair) into the specified function (the one with the getId key), so the this now refers to the newCar object, not the o object, and carId is 456, not 123. 
Apply:
The apply function is just like the call function, except with it you can pass in arguments as an array
 now the function accepts a parameter, prefix, and the apply function passed in the array [‘ID: ‘] into it. 
Whatever you pass in has to go in as an array, even if you only need one value go in. It’ll decunstruct the array to map to your parameters in the function
Bind:
Makes a copy of a function and assign it a new context


- **Arrow Functions** = New syntax for defining a function, where a variable directly holds the func
    - If there’s only one argument, you don’t need the parentheses surrounding it
    - supports rest parameter
    - Arrow functions do not have their own ‘this’ value, on enclosing context
    - A regular function’s `this` will have the scope of it’s caller. But an arrow function’s this is the scope of where it was defined.
    ```
    const [functionName] = ([agruments]) => {
        [functionBody]
    }
    ```
    - if you have a single statement in the body and it's just a return statement, you can make the whole function one line and leave out the curly braces and return keyword
    ```
    const [functionName] = ([agruments]) => [returnStatement - leave out the return keyword]
    }
    ```
    - you should use arrow functions anytime you create a method that will be called and includes use of the `this` keyword



Default Parameters
To give a parameter a default value

The default parameters must be listed at the right of the function parameter list
ES6 feature

## Objects and Arrays
### Constructor Function 
- Used to make new objects. When calling this function, you always need the new keyword (function:class) (var:object)
- The function name usually has a capital first letter
- The function can enter parameters
- If you use the this keyword in the code, then when you create a new object using the Constructor function and it makes a new context, which is empty until you use the function properties/methods that are defined with ‘this’. So properties and methods are stored on the this keyword. IE the ‘this’ keyword is acting almost like a placeholder while making the function that will later be replaced with the variable name.

- You can also call methods for functions defined in the constructor function
	
## Prototypes
- If you leave the above constructor function as is, then every time you create a new object you’re creating a brand new yet identical function, which takes up memory
- Still part of the function scope; you can use variables defined in the function
Instead we make the method function outside the function, on the system-built prototype property of your ‘class’. You still need to work with the function’s context, or ‘this’.

### Expanding Objects Using Prototypes
- You can create new methods using prototypes on system-defined objects(like String) too
(btw, toString just takes the name of the object and puts it in string format). Here you’re taking the predefined String object, and adding a method called hello. Once you use it on the object foo, it’ll return (‘foo’ + ‘ hello’)
- There’s a shortcut; when the key-value pair has the same name for the key and value, you can just leave the code like this
is equivalent to InverseOfPI: InverseOfPI
- Dynamic properties: it’s like the name of the key of the key value pair is held in a variable.

```
console.log(obj.mystery) → undefined
console .log(obj.answer) → 42
```



### JSON- JavaScript Object Notation
- Can send objects over APIs in a specified text format. (JSON is another global method)
- Use the methods JSON.stringify() 
notice how even the key names are in quotes
or the method JSON.parse() 
 → would print the array JS-style, in square brackets

## Array Iteration
- You can use a for loop, but there are other methods
- Here, accepts a function as a parameter. These functions are defined as arrow functions! The first argument is the iterator value (i)
### forEach
- Like a for loop going through the array
```
let carIds = [
    { carId: 123, styel: "sedan"},
    { carId: 456, styel: "suv"},
    { carId: 789, styel: "convertabile"}
];

carIds.forEach ( car => console.log(car));

carIds.forEach ((car, index) => console.log(car, index));

```

### filter 
- Will go through every item in the array (for loop) and check a conditional (the boolean-return type arrow function in the parameter) against every object (the param of the arrow function), and return a new array with those objects that returned true to the arrow function.

```
let carIds = [
    { carId: 123, styel: "sedan"},
    { carId: 456, styel: "suv"},
    { carId: 789, styel: "convertabile"}
];

let convertibles = carIds.filter( car => car.style === "convertible");
```

### every 
- Will go through every item in the array (for loop) and check if every object’s specified key-value exists, and return true. If even one object has a falsey in that value, this function will return false. 
```
let carIds = [
    { carId: 123, styel: "sedan"},
    { carId: 456, styel: "suv"},
    { carId: 789, styel: "convertabile"}
];

let result = carIds.every( car => car.carID > 0);
```

### Find
- Will go through every item in the array (for loop) and check a conditional against every object’s specified key-value. The *first object* that returns true will be stored in a variable (parameter) and the loop will break. Similarily, findINdex will find the index of the specified element

```
let carIds = [
    { carId: 123, styel: "sedan"},
    { carId: 456, styel: "suv"},
    { carId: 789, styel: "convertabile"}
];

let myCar = carIds.find( car => car.carID > 500);
```

### Map
- Will go through every item in the array, and accepts an arrow function (with a single aray elem as the param) and run that function for each item
```
let carIds = [
    { carId: 123, styel: "sedan"},
    { carId: 456, styel: "suv"},
    { carId: 789, styel: "convertabile"}
];

carIds.map(car => console.log("This is a " + car.style + " !"));
```

- (More on mozilla development network)

## Classes and Modules
- **Classes** 
    - Use the class keyword, and name it with a capital first letter
    ``` javascript
    class Person {
        constuctor(name){
            this.name = name;   
        }
        printMyName(){
            console.log(`Name: ${this.name}`);
        }
    }

    const person = new Person(BobbyBoy);
    person.printMyName();
    ```
    - Constructor is the function (always names construcor) that will be executed when an instance of a class is created. It’s where you can keep the logic for a class. Properties are automatically assigned in the constructor. These can be called from outside the object. Be sure to use the this keyword
    - Methods = a function defined within a class. Don’t use the function keyword here. (a string with ` backtick quotes and the ${} will hold a statement in it, along with spaces = string interpolation)

    - there is a new syntax (ES6) to define properties and methods, where the constructor is optional and you use arrow functions;
    ``` javascript
    class Person {
        name = 'name'
        printMyName = () => {console.log(`Name: ${this.name}`);}
    }
    let p = new Person();
    p.name = "BobbyBoy"
    p.printMyName();
    ```

    - Inheritance = A way to organize code into classes and superclass - that way you don’t have to repeat the common methods of several classes, to save memory. 
        - A super class is created just like any other class ([] Vehicle). To make a class that is part of/extends this super class, use the key word `extend` ([]car, train, etc.).
        - New classes don’t always need another constructor. But when it does, if there are any properties defined in the superclass constructor that you want to use, use the `super` keyword. You can only use it once per constructor, but you can put in it all the arguments the superclass constructor will be expecting in the right order. It’s basically a shortcut to calling the parent class’s parent class’s constructor method.

    - ** a lot of this is very similar to Java - thank you, APCS :pensive: :fist: here's hoping to a 5 letsgoo

- **Modules**
     - Organize code (including classes) into modules
     - You can make more folders outside our script folder in a project, and keep files in there (these files are called models). These files can contain anything, like maybe all the definings of your classes
     - At the beginning of every block of code in the second file that you want you use in index.js, use the keyword export. The module is the set of related classes that you’re exporting and using in another file(model). Then at the beginning of your main file, write in the importing code. Include the import keyword, name of the object, and the path to the file. 
        - the export statement will include the name of what you're exporting and the value
            ``` javascript
            // inside utility.js
            const baseData = 0;
            export baseData;

            //inside app.js
            import baseData from /.utility.js; 
            ```
        - if you only have one export value from a file, you can use `default` instead of a specific name in the export statement, and use any name you want in the input statement
        - if you are importing multiple values from another file, you can use `import * as [bundleName] from /.[fileName]` to bundle them all together, and access them later as `[bundleName].[value]`

     - You can have dozens of models, all neatly organized and interdependent

## Programming the BOM and the DOM
Browser Object Model - the stores that allow you to navigate the browser using JS
Document Object Model - the stores that allow JS to change/interact with the browser

The Window object 
‘Window’ is a global window on JS
It has several properties (document, console, location), Methods (alert(), back()) and Events (not common lol). You can find more on developer.mozilla
Unless you have other classes imported into your file/working with modules, you have to prefix your window properties (except console) with.window

Timers 
Fires asynchronounsly
setTimeOut() and setInterval() are  global functions

The clearTimeout/Interval functions will cancel the timers when called upon

The Location Object 
Part of the BOM that gives information on the url the browser is pointing to
Properties(href, hostname, port, pathname, search - all properties of the url), Methods(assign(), reload()), Events (not common)

The Document Object 
Properties (body - html body, forms, links - lists of forms and links), Methods (createEvent(), getElementById()), Events (onload, on=click)
Selecting DOM Objects 

Modifying DOM Objects
Select the element first
Then ..

Look here for more on interacting with html using this

## Promises and Error Handling
Normally, an error stops the whole programs from running, one an interpreted language like JS you only find as it runs. In a compiling language, you catch errors before running. 
Try and Catch -
 the program can continue even after an error occurs. (more)
Finally - always executes whether or not an error occurs

Developer defined errors
You can throw your own errors, other than the one JS sends

This throws a string, but you can also throw error objects
More common when you’re making libraries for other developers to use
Promises
- designed to work with asynchronous JS. A placeholder to get a value or error back to 
Built into ECMA script 2015
Defining function takes a function that takes two other functions. It’ll take time (or some other asynchronous). That will return a resolve or reject to the variable you use (here, ‘promise’). The code you wanna execute will go where ‘setTimeout’ is right now.

That setTimeout line is a hardcode of what would normally contain an if/else statement to conditionally return resolve or reject	
To settle the promise, use the method [variable].then() and pass into two functions; one for if the returned value is a resolve or reject (a resolve will trigger the first argument entered, so the first function should be the one for a success) (they’re arrow functions)

FOR EXAMPLE: the space with ‘settimeout’ might instead contain an api for some data from a url. That code will contain some error handling; it will return ‘resolve(error)’ or ‘resolve(data)’. That return value will trigger the promise.then(...) funcion. 
You don’t normally define the promise; the function will usually have promise handling and will return resolve or reject
[]
The .then() syntax is actually quite old, and could require to nest functions when you have multiple async functions (aka ones you need to wait for). Instead, you can use the await keyword (just remember to label the highest function with the async keyword. 
Both the fetchData and json() functions are async, but this is how you can wait for both using the modern syntax.

## Form
Anytime a user enters text into a textbox, uses <form></form>, etc. (input of type text, check box….(??), submit) and buttons for the text to be sent to a server. 
That form data can be sent to a js file to validate it and format it. This indirect also avoids the html page automatically refreshing the page with a submit button. (event.preventDefault();)

## Security and Building for Production
The code is visible from Chrome Developer Tools, so
Don’t store sensitive info in the code
Don;t store global vars
Assume hackers can read your JS and all data sent to server
Don’t use Java’s eval() function. Just, don’t.
Man-in-the-Middle attack = when html file is interrupted bween browser and server to include a script tag. Use ssl, end--to-end security
Cross-site scripting attack (XXS) - if a third party server is involved in your code but it compromised, it can send an eViL JS file. Use CSP (Content-Security Policy) or CORS (Cross Origin Resource Sharing) HTTP headers. 
Building for production: once you’re ready and done building, you should -minimize, -use the webpack through terminal  to get the ‘dist’ folder