### Closures in JavaScript

A **closure** is a function that "remembers" its lexical scope, even when the function is executed outside that scope. In simpler terms, a closure allows a function to access variables from its outer (enclosing) function after the outer function has finished execution.

### How Closures Work

A closure is created when a function is defined within another function, and the inner function references variables from the outer function. Even if the outer function has already executed, the inner function retains access to the outer function's variables.

Example:

```javascript
function outerFunction() {
  let outerVar = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction executes, returning innerFunction
closureFunc(); // Logs: 'I am from the outer function'
```

In the above example:
1. `outerFunction` executes and returns `innerFunction`.
2. Even though `outerFunction` has finished execution, `closureFunc` (the reference to `innerFunction`) can still access `outerVar` due to the closure.

### Lexical Scope in JavaScript

**Lexical scope** refers to the scope of variables that is determined by the physical placement of functions and blocks of code in the source code. In JavaScript, the lexical scope is defined at the time the function is written, not when it is executed.

When a function is called, it looks for variables first in its own scope. If it doesn't find them there, it looks in the scope in which it was defined (the lexical scope). This is how JavaScript determines variable lookup.

Example:

```javascript
let x = 10;

function outerFunction() {
  let y = 20;

  function innerFunction() {
    console.log(x, y); // Looks up x from the global scope and y from outerFunction scope
  }

  innerFunction();
}

outerFunction(); // Logs: 10 20
```

In this example:
1. `innerFunction` is defined inside `outerFunction`, and its lexical scope includes both the global scope (where `x` is defined) and the local scope of `outerFunction` (where `y` is defined).
2. When `innerFunction` executes, it can access both `x` (from the global scope) and `y` (from the enclosing `outerFunction` scope).

### Key Points:
- **Closures** allow a function to access variables from its outer function even after the outer function has finished execution.
- **Lexical scope** refers to the scope that is determined by the position of functions and variables in the code, dictating where a variable can be accessed.

Closures are fundamental for features like data privacy, function factories, and callback functions. They are often used in asynchronous code, event handlers, and when implementing module patterns in JavaScript.