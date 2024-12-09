In JavaScript, a higher-order function is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

Higher-order functions are widely used for tasks such as callbacks, functional programming, and composition. They allow for more abstract, reusable, and concise code.

### Example 1: Function that accepts another function as an argument

```javascript
function applyFunction(arr, func) {
  return arr.map(func);
}

const nums = [1, 2, 3, 4];
const doubled = applyFunction(nums, (num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

In this example, `applyFunction` is a higher-order function because it takes another function (`func`) as an argument and applies it to each element in the array.

### Example 2: Function that returns another function

```javascript
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10
```

Here, `multiplyBy` is a higher-order function because it returns a new function that multiplies its argument by `x`.

### Common Higher-Order Functions in JavaScript

- `map()`: Transforms elements of an array.
- `filter()`: Filters elements of an array based on a condition.
- `reduce()`: Reduces an array to a single value based on a callback function.
- `forEach()`: Iterates over an array and applies a function to each element.

These functions are all higher-order functions because they accept callbacks or return functions.

Higher-order functions are a core part of functional programming in JavaScript and help to make code more flexible and reusable.