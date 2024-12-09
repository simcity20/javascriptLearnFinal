Developing a **RESTful API** using **Express.js** involves building an application that adheres to REST principles. Below are the steps to create a RESTful API with **Express.js**:

---

### 1. **Setup Your Project**
- Initialize a new Node.js project:
  ```bash
  mkdir restful-api && cd restful-api
  npm init -y
  ```
- Install necessary dependencies:
  ```bash
  npm install express body-parser cors dotenv
  ```

---

### 2. **Create the Basic Application Structure**
Organize your project:
```plaintext
restful-api/
│
├── package.json
├── server.js
├── .env
└── routes/
    └── exampleRoutes.js
```

---

### 3. **Configure Your Server**
Create a `server.js` file:
```javascript
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api/examples', exampleRoutes);

// Base Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the RESTful API');
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

---

### 4. **Create API Routes**
In the `routes/exampleRoutes.js` file:
```javascript
const express = require('express');
const router = express.Router();

// In-memory data store
let examples = [
    { id: 1, name: 'Example 1' },
    { id: 2, name: 'Example 2' },
];

// GET all examples
router.get('/', (req, res) => {
    res.json(examples);
});

// GET a specific example by ID
router.get('/:id', (req, res) => {
    const example = examples.find(e => e.id === parseInt(req.params.id));
    if (!example) return res.status(404).json({ message: 'Example not found' });
    res.json(example);
});

// POST a new example
router.post('/', (req, res) => {
    const newExample = {
        id: examples.length + 1,
        name: req.body.name,
    };
    examples.push(newExample);
    res.status(201).json(newExample);
});

// PUT (update) an example by ID
router.put('/:id', (req, res) => {
    const example = examples.find(e => e.id === parseInt(req.params.id));
    if (!example) return res.status(404).json({ message: 'Example not found' });

    example.name = req.body.name;
    res.json(example);
});

// DELETE an example by ID
router.delete('/:id', (req, res) => {
    examples = examples.filter(e => e.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
```

---

### 5. **Test Your API**
Run your server:
```bash
node server.js
```

Use a tool like **Postman**, **cURL**, or **browser** (for GET requests) to test the API endpoints:

| HTTP Method | Endpoint          | Description                |
|-------------|-------------------|----------------------------|
| GET         | `/api/examples`  | Get all examples           |
| GET         | `/api/examples/:id` | Get example by ID          |
| POST        | `/api/examples`  | Create a new example       |
| PUT         | `/api/examples/:id` | Update an example by ID    |
| DELETE      | `/api/examples/:id` | Delete an example by ID    |

---

### 6. **Add Environment Variables**
In the `.env` file:
```plaintext
PORT=5000
```

---

### 7. **Enhance & Deploy**
- Add **database support** (e.g., MongoDB or PostgreSQL).
- Include **validation** with libraries like **Joi**.
- Deploy to platforms like **Heroku**, **Vercel**, or **AWS**.

Let me know if you'd like more advanced features, such as integrating a database!