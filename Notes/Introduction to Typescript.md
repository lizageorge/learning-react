# Introduction to Typescript
> May 21, 2020
> Typescript docs + Understanding Typescript by Maximilian Schwarzmuller on Udemy

- Typescript is basically just an alternative way to code JS where the type of each variable can be included to allow for easier code editing and provides clearer errors. When you compile a .ts file, the browser will still jst compile the translated .js fil. You can use it like so;
```Typescript
function greeter(name: string){
    return "hi " + name;
}

let person = "Liza";
let greeting = greeter(person);
```
- The type is included after the `: `, and the variable type of person is checked against the parameter type of greeter.
- If I were to try the following, I would be given a proper compile-time error informing me of the incorrect type ("Argument of type 'number' is not assignable to parameter of type 'string'").
```Typescript
function greeter(name: string){
    return "hi " + name;
}

let person = 105;
let greeting = greeter(person);
```

- You can also implement interfaces here, because you can define a new "type", or class, with the keyword interface, and use it as a type of other vars
```Typescript
interface People {
    name: string;
    age: number;
}

function greeter(person: People){
    return "hi " + person.name + ", you are " + person.age + " years old.";
}

let person = {name: "Liza", age: 17};
let greeting = greeter(person);
```