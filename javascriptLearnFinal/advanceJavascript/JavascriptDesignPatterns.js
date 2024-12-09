JavaScript design patterns are reusable solutions to common problems faced during software development. They provide a structured approach to writing clean, efficient, and maintainable code. Here are some of the most commonly used design patterns in JavaScript:

### 1. **Singleton Pattern**
   The Singleton pattern ensures that a class has only one instance and provides a global access point to that instance.

   **Use case**: Ensuring that a particular resource, like a database connection, is only created once.

   **Example**:
   ```javascript
   const Singleton = (function() {
       let instance;
       function createInstance() {
           return { name: 'Singleton Instance' };
       }
       return {
           getInstance: function() {
               if (!instance) {
                   instance = createInstance();
               }
               return instance;
           }
       };
   })();
   
   const instance1 = Singleton.getInstance();
   const instance2 = Singleton.getInstance();
   console.log(instance1 === instance2); // true
   ```

### 2. **Module Pattern**
   The Module pattern helps to create encapsulated code with private and public methods, promoting modularity and maintainability.

   **Use case**: Grouping related functionalities together.

   **Example**:
   ```javascript
   const Counter = (function() {
       let count = 0;
       return {
           increment: function() { count++; },
           decrement: function() { count--; },
           getCount: function() { return count; }
       };
   })();
   
   Counter.increment();
   console.log(Counter.getCount()); // 1
   ```

### 3. **Factory Pattern**
   The Factory pattern defines an interface for creating objects, but allows subclasses to alter the type of objects that will be created.

   **Use case**: Creating objects without specifying the exact class of object that will be created.

   **Example**:
   ```javascript
   function Car(make, model) {
       this.make = make;
       this.model = model;
   }

   function Bike(make, model) {
       this.make = make;
       this.model = model;
   }

   function VehicleFactory() {}
   VehicleFactory.prototype.createVehicle = function(type, make, model) {
       switch (type) {
           case 'car':
               return new Car(make, model);
           case 'bike':
               return new Bike(make, model);
           default:
               throw new Error('Unknown vehicle type');
       }
   };

   const factory = new VehicleFactory();
   const car = factory.createVehicle('car', 'Toyota', 'Camry');
   const bike = factory.createVehicle('bike', 'Yamaha', 'R1');
   console.log(car);
   console.log(bike);
   ```

### 4. **Observer Pattern**
   The Observer pattern defines a one-to-many dependency between objects. When one object changes state, all dependent objects are notified.

   **Use case**: Creating a subscription-based system, such as event handling.

   **Example**:
   ```javascript
   function Subject() {
       this.observers = [];
   }

   Subject.prototype.addObserver = function(observer) {
       this.observers.push(observer);
   };

   Subject.prototype.notifyObservers = function(message) {
       this.observers.forEach(observer => observer.update(message));
   };

   function Observer(name) {
       this.name = name;
   }

   Observer.prototype.update = function(message) {
       console.log(`${this.name} received message: ${message}`);
   };

   const subject = new Subject();
   const observer1 = new Observer('Observer 1');
   const observer2 = new Observer('Observer 2');

   subject.addObserver(observer1);
   subject.addObserver(observer2);

   subject.notifyObservers('Hello Observers!'); // Both observers get notified
   ```

### 5. **Decorator Pattern**
   The Decorator pattern allows you to add behavior to an object dynamically.

   **Use case**: Adding extra functionality to objects without modifying their structure.

   **Example**:
   ```javascript
   function Coffee() {
       this.cost = function() {
           return 5;
       };
   }

   function MilkDecorator(coffee) {
       const cost = coffee.cost();
       coffee.cost = function() {
           return cost + 2;
       };
   }

   function SugarDecorator(coffee) {
       const cost = coffee.cost();
       coffee.cost = function() {
           return cost + 1;
       };
   }

   const coffee = new Coffee();
   MilkDecorator(coffee);
   SugarDecorator(coffee);
   console.log(coffee.cost()); // 8
   ```

### 6. **Strategy Pattern**
   The Strategy pattern defines a family of algorithms and allows the algorithm to be selected at runtime.

   **Use case**: Changing the behavior of a class at runtime, like a sorting algorithm.

   **Example**:
   ```javascript
   function bubbleSort(arr) {
       console.log('Bubble Sorting...');
       return arr.sort((a, b) => a - b);
   }

   function quickSort(arr) {
       console.log('Quick Sorting...');
       return arr.sort((a, b) => a - b);
   }

   function SortContext(strategy) {
       this.strategy = strategy;
   }

   SortContext.prototype.sort = function(arr) {
       return this.strategy(arr);
   };

   const sorter = new SortContext(bubbleSort);
   console.log(sorter.sort([5, 2, 8, 1]));

   sorter.strategy = quickSort;
   console.log(sorter.sort([5, 2, 8, 1]));
   ```

### 7. **Command Pattern**
   The Command pattern turns a request into a stand-alone object that contains all information about the request.

   **Use case**: Implementing undo/redo functionality or request queuing.

   **Example**:
   ```javascript
   function Command(execute, undo) {
       this.execute = execute;
       this.undo = undo;
   }

   const lightOn = new Command(
       function() { console.log('Light turned on'); },
       function() { console.log('Light turned off'); }
   );

   const lightOff = new Command(
       function() { console.log('Light turned off'); },
       function() { console.log('Light turned on'); }
   );

   function RemoteControl() {
       this.history = [];
   }

   RemoteControl.prototype.pressButton = function(command) {
       command.execute();
       this.history.push(command);
   };

   const remote = new RemoteControl();
   remote.pressButton(lightOn);
   remote.pressButton(lightOff);
   ```

These are just some of the core design patterns in JavaScript. Implementing them in your projects can help improve code readability, reusability, and scalability.