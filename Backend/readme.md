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

# /users/profile Endpoint Documentation

## Description
Endpoint to retrieve the authenticated user's profile information.

## HTTP Method
GET

## URL
/users/profile

## Headers
- **Authorization**: Bearer token required

## Responses

### Success
- **Status Code:** 200 OK
- **Body:** Returns a JSON object containing user profile data

### Example Success Response
```json
{
    "success": true,
    "data": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "2023-01-01T00:00:00.000Z"
    }
}
```

### Error Response
- **Status Code:** 401 Unauthorized
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

# /users/logout Endpoint Documentation

## Description
Endpoint to logout the currently authenticated user.

## HTTP Method
GET

## URL
/users/logout

## Headers
- **Authorization**: Bearer token required

## Responses

### Success
- **Status Code:** 200 OK
- **Body:** Returns a success message

### Example Success Response
```json
{
    "success": true,
    "message": "Logged out successfully"
}
```

### Error Response
- **Status Code:** 401 Unauthorized
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

# Captain Endpoints Documentation

# /captains/register Endpoint Documentation

## Description
Endpoint to register a new captain. Validates input for personal and vehicle information.

## HTTP Method
POST

## URL
/captains/register

## Request Body
- **fullname** (object):
  - **firstname**: string, required, minimum 3 characters
  - **lastname**: string, optional
- **email**: string, required, valid email address
- **password**: string, required, minimum 6 characters
- **vehicle** (object):
  - **color**: string, required, minimum 3 characters
  - **plate**: string, required, minimum 3 characters
  - **capacity**: number, required, minimum 1
  - **vehicleType**: string, required, must be one of: ['car', 'motorcycle', 'auto']

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code:** 201 Created
- **Body:** Returns a JSON object containing:
  - **token**: Authentication token
  - **captain**: New captain object

### Example Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.driver@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Validation Error Response
- **Status Code:** 400 Bad Request
```json
{
    "errors": [
        {
            "msg": "First name must be atleast 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Invalid vehicle type",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```