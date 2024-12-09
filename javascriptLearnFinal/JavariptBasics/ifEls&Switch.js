Conditional statements in JavaScript allow you to perform different actions based on conditions. Here's an overview of commonly used conditional statements:

---

## **1. If-Else Statement**

### Syntax:
```javascript
if (condition) {
    // Code to execute if the condition is true
} else if (anotherCondition) {
    // Code to execute if the first condition is false and anotherCondition is true
} else {
    // Code to execute if none of the conditions are true
}
```

### Example:
```javascript
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
```

---

## **2. Switch-Case Statement**

The `switch` statement is used to perform different actions based on multiple conditions. It is particularly useful when checking a single variable against several values.

### Syntax:
```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no case matches
}
```

### Example:
```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
```

---

## **3. Ternary Operator**

For simple conditions, you can use the ternary operator (`condition ? valueIfTrue : valueIfFalse`).

### Syntax:
```javascript
let result = condition ? valueIfTrue : valueIfFalse;
```

### Example:
```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Output: Adult
```

---

## Key Points:
1. Use **if-else** for conditions that are not simple comparisons or require logical operators.
2. Use **switch-case** for checking a single variable against multiple exact values.
3. Use the **ternary operator** for simple, concise conditional assignments.

Let me know if you'd like to see more examples or edge cases!