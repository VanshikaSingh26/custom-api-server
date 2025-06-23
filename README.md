# Custom API Server with Frontend

This project is a custom-built API server using Node.js, Express, and PostgreSQL, along with an optional React frontend to interact with the APIs.

---

## 🔧 APIs Created and Their Functionality

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | /api/users           | Fetch all users        |
| GET    | /api/users/:id       | Fetch a user by ID     |
| POST   | /api/users           | Create a new user      |
| PUT    | /api/users/:id       | Update a user by ID    |
| DELETE | /api/users/:id       | Delete a user by ID    |

---

## 🗄️ Database Used and Integration

**Database:** PostgreSQL  
**Table Name:** `users`

Schema:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);
```
--------------

## Integration:
The database is connected using the pg module in Node.js. Credentials are stored securely in a .env file and accessed using the dotenv package. A connection pool is created using the Pool class from pg.

Example (in db.js):
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

------------------

## ▶️ How to Run Your Server
 ### 1. Navigate to the backend folder:
bash: 
cd custom-api-server

#### 2.Create a .env file with the following content:
ini:
DB_USER=your_pg_username
DB_HOST=localhost
DB_NAME=apidb
DB_PASS=your_pg_password
DB_PORT=5432
PORT=5000

### 3.Install dependencies:
bash:
npm install

### 4.Start the server:
bash:
npm start

The server will run on http://localhost:5000.

----------------

## 💻 How to Run the Frontend Locally (Optional)
### 1.Install the frontend needs by running (in bash): npm install

### 2.Navigate to the frontend folder:
bash:
cd frontend

### 3.Install dependencies:
bash:
npm install

### 4.Start the frontend app:
bash:
npm start

It will open at http://localhost:3000.

### 5.Run tests:
bash:
npm test
#(For coverage:)
npm run test:coverage

-------------------

## 📡 How to Interact with the API
Sample Requests Using curl
### 1.GET all users
bash:
curl http://localhost:5000/api/users

### 2.GET user by ID
bash:
curl http://localhost:5000/api/users/1

### 3.POST create new user
bash:
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com","age":25}' http://localhost:5000/api/users

### 4.PUT update user
bash:
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice B","email":"aliceb@example.com","age":26}' http://localhost:5000/api/users/1

### 5.DELETE user
bash:
curl -X DELETE http://localhost:5000/api/users/1

-------------------

## Testing

- **Unit tests:** Located in `tests/unit/`
- **Integration tests:** Located in `tests/integration/`
- **API tests:** Located in `tests/api/`
- **Testing tools:** Jest, Supertest

------------------

## 📸 Screenshots of API Tests and Server Output

A folder named `Screenshots of running servers and outputs/` has been included in this repository.  
It contains:

- Postman screenshots of all API endpoints (GET, POST, PUT, DELETE)
- Terminal output showing backend server running
- Sample `curl` command results
- Frontend view screenshots
- Screenshot of result of test coverage report

These screenshots serve as visual proof of successful API execution and server setup.

---

## 📦 Technologies Used
### Backend: Node.js, Express.js
### Database: PostgreSQL
### Frontend (Optional): React.js
### API Testing: Postman, curl
### API, Unit and Integration Testing: Jest

------------------------

## 📁 Folder Structure

custom-api-server/
├── server.js
├── db.js
├── routes/
│   └── users.js
├── .env
├── README.md
└── frontend/ (optional React UI)
└──Screenshots of running servers and outputs
└──tests/
│   └──api/
│     └──userApi.test.js
│   └──integration/
│     └──userRoutes.test.js
│   └──unit/
│     └──validateUser.test.js
└──utils/
│   └──validateUser.js

----------------------

## 👩‍💻 Author
### Vanshika Singh
### B.Tech CSE – KIIT University
