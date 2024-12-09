In JavaScript, `async` and `await` are used to work with asynchronous code in a more readable and manageable way, avoiding the complexity of callbacks and promise chaining. They are built on top of Promises and make asynchronous code look and behave more like synchronous code.

### `async` Keyword
- The `async` keyword is used to define a function as asynchronous.
- An `async` function always returns a Promise. If the function doesn't explicitly return a value, it returns a Promise that resolves to `undefined`.
  
#### Example:
```javascript
async function myAsyncFunction() {
  return "Hello, world!";
}

myAsyncFunction().then(result => console.log(result));  // Output: "Hello, world!"
```

In the above example, `myAsyncFunction` is asynchronous and returns a Promise. The `.then()` method is used to handle the resolved value.

### `await` Keyword
- The `await` keyword can only be used inside `async` functions.
- It pauses the execution of the `async` function until the Promise is resolved or rejected, allowing you to work with asynchronous code in a synchronous manner.

#### Example:
```javascript
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
}

fetchData().then(posts => console.log(posts));
```

### Key Points:
1. **`async` functions return a Promise.**
2. **`await` makes JavaScript wait for the Promise to resolve or reject before moving to the next line of code.**
3. **`await` can only be used inside `async` functions.**
4. **Error handling**: You can use `try`/`catch` inside `async` functions to handle errors in asynchronous code.

#### Example with `try`/`catch`:
```javascript
async function fetchDataWithErrorHandling() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchDataWithErrorHandling();
```

In this example, if there is an error during the fetch or JSON parsing, the `catch` block will handle it gracefully.

`async`/`await` makes it easier to work with asynchronous code and improves readability by avoiding deeply nested `.then()` and `.catch()` chains.