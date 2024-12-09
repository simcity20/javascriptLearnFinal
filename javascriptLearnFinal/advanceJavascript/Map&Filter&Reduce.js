In JavaScript, `map`, `filter`, and `reduce` are array methods that help transform, filter, and accumulate data, respectively. Here’s an explanation and examples of each:

### 1. **`map()`**
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Syntax:**
```javascript
let newArray = array.map(callback(currentValue, index, array));
```

**Example:**
```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### 2. **`filter()`**
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**
```javascript
let filteredArray = array.filter(callback(currentValue, index, array));
```

**Example:**
```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### 3. **`reduce()`**
The `reduce()` method executes a reducer function (that you provide) on each element of the array (from left to right) to reduce it to a single value. This can be used for various operations like summing values, flattening arrays, etc.

**Syntax:**
```javascript
let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

**Example:**
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Summary:
- **`map()`** is used for transforming each element of the array.
- **`filter()`** is used for selecting elements based on a condition.
- **`reduce()`** is used for accumulating values into a single result (e.g., sum, average, object).

These methods are chainable, so you can combine them for more complex operations. For example:
```javascript
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(num => num * 2).filter(num => num > 5).reduce((acc, num) => acc + num, 0);
console.log(result); // 18
```