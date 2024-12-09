In JavaScript, variables are used to store data that can be used and manipulated throughout your program. Here’s an overview of how variables work in JavaScript:

---

### **Declaring Variables**
JavaScript provides three main keywords to declare variables: `var`, `let`, and `const`.

#### 1. **`var`**
- **Scope**: Function-scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
- **Usage**: Used in older JavaScript code but generally avoided in modern code.

```javascript
var name = "Alice";
console.log(name); // Alice
```

---

#### 2. **`let`**
- **Scope**: Block-scoped.
- **Re-declaration**: Cannot be redeclared in the same scope.
- **Usage**: Recommended for variables whose values might change.

```javascript
let age = 25;
age = 26; // Reassigning is allowed
console.log(age); // 26
```

---

#### 3. **`const`**
- **Scope**: Block-scoped.
- **Re-declaration**: Cannot be redeclared or reassigned.
- **Usage**: Recommended for variables with constant values.

```javascript
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.1415; // Error: Assignment to constant variable
```

---

### **Variable Naming Rules**
1. Must start with a letter, underscore (`_`), or dollar sign (`$`).
2. Cannot start with a number.
3. Case-sensitive (`age` and `Age` are different).
4. Cannot be a reserved keyword (e.g., `class`, `return`).

---

### **Variable Types**
JavaScript is dynamically typed, so a variable can hold any data type and its type can change during execution.

```javascript
let value = 42;    // Number
value = "Hello";   // String
value = true;      // Boolean
```

---

### **Best Practices**
1. Use `const` by default unless the variable needs to change.
2. Use `let` for variables that are reassigned.
3. Avoid using `var` in modern code.
4. Use descriptive and meaningful variable names.

---

### **Examples**
```javascript
const firstName = "John";  // String
let age = 30;             // Number
var isMarried = false;    // Boolean

console.log(`${firstName} is ${age} years old.`); // Template literals
```

Would you like a deeper dive into any of these concepts?