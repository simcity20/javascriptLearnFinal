JavaScript is a dynamically typed language, which means variables are not bound to a specific data type. Instead, the data type is determined at runtime. Here’s an overview of the main data types in JavaScript:

---

## **1. Primitive Data Types**
Primitive types are immutable and are compared by value.

### **a. Number**
Represents both integer and floating-point numbers.  
```javascript
let num = 42;    // Integer
let pi = 3.14;   // Floating-point
let notANum = NaN; // Special value representing "Not a Number"
```

### **b. String**
Represents a sequence of characters enclosed in single, double, or backticks.  
```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}`;
```

### **c. Boolean**
Represents logical values: `true` or `false`.  
```javascript
let isLoggedIn = true;
let hasAccess = false;
```

### **d. Undefined**
A variable that has been declared but not assigned a value.  
```javascript
let noValue; // undefined
```

### **e. Null**
Represents an intentional absence of any value.  
```javascript
let emptyValue = null;
```

### **f. Symbol** *(introduced in ES6)*
Represents a unique identifier, often used as keys for object properties.  
```javascript
let uniqueKey = Symbol('key');
```

### **g. BigInt** *(introduced in ES11)*
Used for representing large integers beyond the `Number` type's safe range.  
```javascript
let bigNumber = 1234567890123456789012345678901234567890n; // Ends with 'n'
```

---

## **2. Non-Primitive (Complex) Data Types**
Non-primitive types are mutable and compared by reference.

### **a. Object**
Represents a collection of key-value pairs.  
```javascript
let person = { 
  name: "John", 
  age: 30 
};
```

### **b. Array**
A special type of object used to store ordered collections of values.  
```javascript
let fruits = ['apple', 'banana', 'cherry'];
```

### **c. Function**
A reusable block of code, which is also an object.  
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

### **d. Date**
Used to represent and manipulate dates and times.  
```javascript
let currentDate = new Date();
```

---

## **3. Special Data Types**
### **a. typeof**
To check the data type of a variable:
```javascript
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (a known quirk in JavaScript)
console.log(typeof Symbol());  // "symbol"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"
```

### **b. Dynamic Typing**
Variables can change types:
```javascript
let data = 42;      // Number
data = "hello";     // String
```

Understanding these data types is key to mastering JavaScript programming!