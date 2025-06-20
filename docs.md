# API Documentation

## Base URL: /api/users

### GET /
Returns all users

### GET /:id
Returns a single user by ID

### POST /
Creates a user

#### Request body
```json
{
  "name": "Alice",
  "email": "alice@mail.com",
  "age": 30
}
