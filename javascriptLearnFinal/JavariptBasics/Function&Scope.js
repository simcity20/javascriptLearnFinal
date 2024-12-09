### **Functions in JavaScript**
A **function** is a block of reusable code that performs a specific task. Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

---

#### **Defining Functions**
1. **Function Declaration**  
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("John")); // Output: Hello, John
```

2. **Function Expression**  
```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
console.log(greet("John")); // Output: Hello, John
```

3. **Arrow Functions** *(introduced in ES6)*  
Shorter syntax, but `this` is lexically bound.
```javascript
const greet = (name) => `Hello, ${name}`;
console.log(greet("John")); // Output: Hello, John
```

4. **Anonymous Functions**  
Functions without a name, often used as callbacks.
```javascript
setTimeout(function() {
  console.log("This is delayed.");
}, 1000);
```

5. **Immediately Invoked Function Expressions (IIFE)**  
Executed immediately after being defined.
```javascript
(function() {
  console.log("This runs immediately!");
})();
```

---

#### **Function Parameters and Arguments**
- **Default Parameters**  
Provide default values for parameters if not supplied.
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // Output: Hello, Guest
```

- **Rest Parameters** *(ES6)*  
Collects all remaining arguments into an array.
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

#### **Function Types**
1. **Pure Functions**  
Always return the same output for the same inputs, without side effects.
```javascript
function add(a, b) {
  return a + b;
}
```

2. **Higher-Order Functions**  
Accept other functions as arguments or return functions.
```javascript
function higherOrder(fn, value) {
  return fn(value);
}
console.log(higherOrder((x) => x * 2, 5)); // Output: 10
```

---

### **Scope in JavaScript**
**Scope** determines the accessibility (visibility) of variables.  

#### **Types of Scope**
1. **Global Scope**  
Variables declared outside any function or block are in the global scope.
```javascript
let globalVar = "I am global";
function testScope() {
  console.log(globalVar); // Accessible
}
```

2. **Local Scope (Function Scope)**  
Variables declared inside a function are only accessible within that function.
```javascript
function testScope() {
  let localVar = "I am local";
  console.log(localVar); // Accessible
}
// console.log(localVar); // Error: localVar is not defined
```

3. **Block Scope** *(introduced in ES6)*  
`let` and `const` have block-level scope, meaning they are limited to the block `{}` in which they are defined.
```javascript
{
  let blockScoped = "I exist only here";
}
// console.log(blockScoped); // Error: blockScoped is not defined
```

4. **Lexical Scope**  
Functions are executed in the scope where they are defined, not where they are called.
```javascript
function outer() {
  let outerVar = "Outer";
  function inner() {
    console.log(outerVar); // Lexical scope
  }
  inner();
}
outer();
```

---

#### **Special Cases**
1. **Global Variables in Browser**
   - Variables declared with `var` are added to the `window` object.
   - Variables declared with `let` or `const` are not.

2. **Hoisting**  
Function declarations and `var` variables are hoisted to the top of their scope. However, `let` and `const` are not accessible before initialization.
```javascript
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // Error
let hoistedLet = "I am not hoisted";
```

---

### **Closures**
A function that retains access to its parent scope, even after the parent function has closed.
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

Functions and scope together are the foundation of JavaScript's execution model. Understanding them is crucial for mastering the language!