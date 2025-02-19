# Backend API Documentation

# /users/register Endpoint Documentation

## Description
Endpoint to register a new user. Validates the input for email, first name, and password.

## HTTP Method
POST

## URL
/users/register

## Request Body
- **fullname** (object):
  - **firstname**: string, required, minimum 3 characters.
  - **lastname**: string, optional, minimum 3 characters if provided.
- **email**: string, required, valid email address.
- **password**: string, required, minimum 6 characters.

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Responses

### Success
- **Status Code:** 201 Created  
- **Body:** Returns a JSON object containing:
  - **token**: Authentication token.
  - **user**: New user object.

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.
### Example Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "secret123"
    }
}
```

### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

# /users/login Endpoint Documentation

## Description
Endpoint to authenticate an existing user. Validates the input for email and password.

## HTTP Method
POST

## URL
/users/login

## Request Body
- **email**: string, required, valid email address.
- **password**: string, required, minimum 6 characters.

### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Responses

### Success
- **Status Code:** 200 OK  
- **Body:** Returns a JSON object containing:
  - **token**: Authentication token.
  - **user**: Logged in user object.

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.

### Example Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email or password",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email or password",
            "param": "password",
            "location": "body"
        }
    ]
}
```