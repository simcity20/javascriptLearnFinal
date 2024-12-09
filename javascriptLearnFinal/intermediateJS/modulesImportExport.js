In JavaScript, **modules** allow you to break up your code into separate files, making it easier to maintain, test, and reuse code. There are two common ways to manage modules in JavaScript: **ES6 Modules** (also known as ECMAScript modules or ESM) and **CommonJS modules**.

### 1. **ES6 Modules (ECMAScript Modules)**
ES6 introduced a native module system, allowing you to import and export functionality between files.

#### **Exporting in ES6:**
You can export variables, functions, or classes from a module.

```javascript
// myModule.js
export const myVar = 10;

export function myFunction() {
    console.log("Hello from myFunction");
}

export class MyClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
```

#### **Importing in ES6:**
You can import the exports from another module into your current file.

```javascript
// main.js
import { myVar, myFunction, MyClass } from './myModule.js';

console.log(myVar); // 10
myFunction(); // "Hello from myFunction"
const obj = new MyClass('John');
obj.greet(); // "Hello, John"
```

#### **Default Export:**
You can also export a single value or object as the default export.

```javascript
// myModule.js
export default function myFunction() {
    console.log("This is the default export function");
}
```

```javascript
// main.js
import myFunction from './myModule.js'; // You don't need curly braces for default exports
myFunction(); // "This is the default export function"
```

#### **Exporting All:**
You can also export everything in one go at the end of a module.

```javascript
// myModule.js
const a = 10;
const b = 20;

export { a, b };
```

```javascript
// main.js
import * as myModule from './myModule.js';
console.log(myModule.a); // 10
console.log(myModule.b); // 20
```

### 2. **CommonJS Modules**
CommonJS is mainly used in Node.js. It uses `module.exports` and `require` to export and import code.

#### **Exporting in CommonJS:**
```javascript
// myModule.js
const myVar = 10;
const myFunction = () => console.log("Hello from myFunction");

module.exports = { myVar, myFunction };
```

#### **Importing in CommonJS:**
```javascript
// main.js
const { myVar, myFunction } = require('./myModule.js');

console.log(myVar); // 10
myFunction(); // "Hello from myFunction"
```

### **Differences between ES6 Modules and CommonJS**
- **Syntax**: ES6 uses `import` and `export`, while CommonJS uses `require` and `module.exports`.
- **Asynchronous Loading**: ES6 modules are statically analyzed and can be imported asynchronously, while CommonJS is synchronous.
- **Environment**: ES6 modules are used in both browsers and Node.js (with specific setup in Node), while CommonJS is primarily used in Node.js.

### **Using Modules in Browsers**
To use ES6 modules in the browser, ensure your script tags include the `type="module"` attribute.

```html
<script type="module" src="main.js"></script>
```

With this setup, you can use `import` and `export` directly in the browser.

### **Summary**
- **ES6 Modules**: More modern, and the preferred approach for most applications. They work in both browsers and Node.js.
- **CommonJS Modules**: Mainly used in Node.js and older systems, where `require` and `module.exports` are used for importing and exporting.

Let me know if you need further details or examples!