In JavaScript, `let` and `const` are used to declare variables, but they have different behaviors. Here's a breakdown of their key differences:

### 1. **`let`**: 
- **Allows Re-assignment**: A variable declared with `let` can be reassigned new values.
- **Block-scoped**: It is scoped to the block (curly braces `{}`) where it is declared, such as inside a loop, an `if` statement, or a function.
- **Hoisting**: Variables declared with `let` are **hoisted** to the top of their block scope, but they are not initialized until the code execution reaches the declaration. Accessing a `let` variable before declaration leads to a **ReferenceError**.

#### Example:
```javascript
let x = 10;
x = 20; // Reassigning is allowed
console.log(x); // Output: 20

if (true) {
    let y = 30; // 'y' is scoped to this block
    console.log(y); // Output: 30
}

console.log(y); // ReferenceError: y is not defined
```

### 2. **`const`**:
- **No Re-assignment**: A variable declared with `const` cannot be reassigned after it is initialized. Once a `const` variable is assigned a value, it is **immutable** in terms of re-assignment.
- **Block-scoped**: Like `let`, `const` is also scoped to the block in which it is declared.
- **Hoisting**: Similar to `let`, `const` is hoisted but remains uninitialized until the code execution reaches the declaration, and accessing it before declaration results in a **ReferenceError**.

#### Example:
```javascript
const a = 10;
a = 20; // TypeError: Assignment to constant variable.
console.log(a); // Output: 10

if (true) {
    const b = 50;
    console.log(b); // Output: 50
}

console.log(b); // ReferenceError: b is not defined
```

### Key Differences:

| Feature               | `let`                         | `const`                    |
|-----------------------|-------------------------------|----------------------------|
| Reassignable          | Yes                           | No (immutable after assignment) |
| Block Scoped          | Yes                           | Yes                        |
| Hoisting Behavior     | Hoisted but uninitialized     | Hoisted but uninitialized  |
| Usage                 | Variable whose value may change | Constant value that doesn't change |

### When to Use `let` vs `const`:
- Use `**let**` when you expect the variable's value to change during the program execution, for example, in loops or conditional logic.
- Use `**const**` when the variable's value should not change after initialization, like for constant values, function expressions, or objects/arrays where the reference itself doesn't change (though the contents can change).

#### Example of using `const` with objects:
```javascript
const person = { name: "Alice" };
person.name = "Bob"; // This is allowed, as the contents of the object can be modified
console.log(person.name); // Output: Bob

person = { name: "Charlie" }; // Error: Assignment to constant variable.
```

Let me know if you'd like further clarification!