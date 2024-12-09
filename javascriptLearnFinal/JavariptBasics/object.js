In JavaScript, an **object** is a collection of key-value pairs. The keys (or properties) are strings (or symbols), and the values can be of any type, including other objects, arrays, or functions. Objects are a fundamental data structure in JavaScript and are used to store and organize data.

### Creating an Object
1. **Using Object Literal Syntax:**
   ```javascript
   const person = {
       name: "John",
       age: 30,
       isEmployed: true,
       greet: function() {
           console.log("Hello, my name is " + this.name);
       }
   };
   ```

2. **Using the `new Object()` Constructor:**
   ```javascript
   const car = new Object();
   car.brand = "Toyota";
   car.model = "Corolla";
   car.year = 2020;
   ```

3. **Using Object.create():**
   ```javascript
   const prototypeObject = {
       greet: function() {
           console.log("Hello!");
       }
   };

   const newObject = Object.create(prototypeObject);
   newObject.name = "Alice";
   ```

### Accessing Object Properties
1. **Dot Notation:**
   ```javascript
   console.log(person.name); // Output: "John"
   ```

2. **Bracket Notation:**
   ```javascript
   console.log(person["age"]); // Output: 30
   ```

### Adding/Updating Properties
```javascript
person.location = "New York"; // Adding a new property
person.age = 31;             // Updating an existing property
```

### Deleting Properties
```javascript
delete person.isEmployed;
```

### Iterating Through an Object
1. **Using `for...in`:**
   ```javascript
   for (let key in person) {
       console.log(key + ": " + person[key]);
   }
   ```

2. **Using `Object.keys()` or `Object.entries()`:**
   ```javascript
   Object.keys(person).forEach(key => {
       console.log(key + ": " + person[key]);
   });

   Object.entries(person).forEach(([key, value]) => {
       console.log(key, value);
   });
   ```

### Common Built-in Methods
- **`Object.keys(obj)`**: Returns an array of the object's own keys.
- **`Object.values(obj)`**: Returns an array of the object's own values.
- **`Object.entries(obj)`**: Returns an array of key-value pairs.
- **`Object.assign(target, ...sources)`**: Copies properties from source objects to a target object.
- **`Object.freeze(obj)`**: Prevents adding, removing, or changing properties.
- **`Object.seal(obj)`**: Prevents adding or removing properties but allows modification of existing ones.

### Example
```javascript
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    getSummary: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getSummary()); // Output: "JavaScript: The Good Parts by Douglas Crockford"
```

Let me know if you'd like to dive deeper into any aspect of JavaScript objects!