MongoDB শিখে একজন দক্ষ JavaScript প্রোগ্রামার হওয়ার জন্য নিচের বিষয়গুলো শিখতে
হবে। MongoDB একটি **NoSQL Database**, যা ডেটা স্টোর এবং পরিচালনা করার জন্য
**JSON-like documents** ব্যবহার করে।

---

### **MongoDB শেখার সম্পূর্ণ রোডম্যাপ**

#### **1. MongoDB Basics (ফাউন্ডেশন)**

- MongoDB কী এবং কেন ব্যবহার করা হয়।
- NoSQL ডাটাবেসের ধারণা এবং MongoDB-এর সাথে SQL-এর তুলনা।
- MongoDB Installation এবং Setup (Local বা Atlas)।
- MongoDB Compass (GUI Tool) ব্যবহার।

---

#### **2. MongoDB CRUD Operations**

- **Create:**
  - `insertOne()` এবং `insertMany()`।
- **Read:**
  - `find()` এবং `findOne()`।
  - Query Operators (`$eq`, `$ne`, `$gt`, `$lt`, `$in`, `$regex`)।
- **Update:**
  - `updateOne()`, `updateMany()`।
  - `$set`, `$inc`, `$push`, `$pull` ব্যবহার।
- **Delete:**
  - `deleteOne()` এবং `deleteMany()`।

---

#### **3. Data Modeling**

- Collections এবং Documents।
- Schema Design (Denormalization vs. Normalization)।
- Embedded Documents এবং References।
- Indexing:
  - Single Field Index।
  - Compound Index।
  - Text Indexing এবং Geospatial Indexing।

---

#### **4. Aggregation Framework**

- Aggregation Pipelines।
- `$match`, `$group`, `$project`, `$sort`।
- `$lookup` (MongoDB Joins)।
- Complex Data Transformations।

---

#### **5. MongoDB Relationships**

- One-to-One Relationship।
- One-to-Many Relationship।
- Many-to-Many Relationship।
- Embedded vs. Referenced Data।

---

#### **6. Advanced Querying**

- Array Querying (`$elemMatch`, `$all`, `$size`)।
- Full-Text Search (`$text`, `$search`)।
- Regular Expressions।

---

#### **7. MongoDB Indexing এবং Performance Optimization**

- Index Creation এবং ব্যবহারের সেরা পদ্ধতি।
- Query Optimization (Explain Plan ব্যবহার)।
- Capped Collections এবং TTL Index।

---

#### **8. MongoDB Security**

- User Authentication এবং Authorization।
- Role-Based Access Control (RBAC)।
- Data Encryption (At Rest এবং In Transit)।
- Preventing Injection Attacks।

---

#### **9. MongoDB এবং JavaScript Integration**

- MongoDB Driver ব্যবহার।
- MongoDB-কে Node.js এর সাথে সংযুক্ত করা।
- Mongoose ORM:
  - Schema এবং Model তৈরি।
  - Validators এবং Middleware।
  - Virtuals এবং Population (Joins)।
  - Query Helpers এবং Aggregations।

---

#### **10. MongoDB Atlas (Cloud Database)**

- MongoDB Atlas কী এবং কেন ব্যবহার করবেন।
- Cluster তৈরি এবং Management।
- MongoDB Atlas API ব্যবহার।
- Cloud Backups এবং Monitoring।

---

#### **11. MongoDB Transactions (Advanced)**

- ACID Transactions কীভাবে কাজ করে।
- Multi-document Transactions।
- Rollbacks এবং Savepoints।

---

#### **12. MongoDB Deployment এবং Scaling**

- Sharding এবং Horizontal Scaling।
- Replica Sets এবং High Availability।
- Backup এবং Restore।
- Performance Monitoring Tools (MongoDB Monitoring Service - MMS)।

---

#### **13. MongoDB Tools এবং Ecosystem**

- MongoDB Compass।
- Mongo Shell (CLI)।
- MongoDB Aggregation Pipeline Builder।
- Third-Party Tools (Robo 3T)।

---

### **প্র্যাকটিস করার জন্য কিছু প্রজেক্ট আইডিয়া**

1. To-Do Application (Basic CRUD)।
2. Blogging Platform (Nested Comments)।
3. E-commerce Backend (Product Catalog, Orders, এবং Inventory)।
4. Social Media Application (Relationships এবং Aggregations)।
5. Real-Time Analytics Dashboard।

---

MongoDB শেখার পর এই জ্ঞানগুলো ছোট ছোট প্রজেক্টে প্রয়োগ করো। MongoDB-এর সাথে
JavaScript Frameworks (Express.js, React.js) ব্যবহার করে তুমি আরও জটিল এবং
শক্তিশালী অ্যাপ্লিকেশন তৈরি করতে পারবে।
