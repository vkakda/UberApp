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

# Captain API Documentation

## POST /captains/register

### Request Body
```json
{
    "fullname": {
        "firstname": "John",    // required, min 3 characters
        "lastname": "Doe"       // optional
    },
    "email": "john@example.com",    // required, valid email format
    "password": "secret123",        // required, min 6 characters
    "vehicle": {
        "color": "black",           // required, min 3 characters
        "plate": "ABC123",          // required, min 3 characters
        "capacity": 4,              // required, min 1
        "vehicleType": "car"        // required, must be: car|motorcycle|auto
    }
}
```

### Success Response (201 Created)
```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "createdAt": "2023-01-01T00:00:00.000Z"
    }
}
```

## POST /captains/login

### Request Body
```json
{
    "email": "john@example.com",    // required, valid email format
    "password": "secret123"         // required, min 6 characters
}
```

### Success Response (200 OK)
```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## GET /captains/profile
Requires Authentication Token in Authorization Header

### Success Response (200 OK)
```json
{
    "success": true,
    "captain": {
        "id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "createdAt": "2023-01-01T00:00:00.000Z",
        "isAvailable": true,        // captain's current availability status
        "currentLocation": {        // captain's last known location
            "latitude": 12.9716,
            "longitude": 77.5946
        }
    }
}
```

## GET /captains/logout
Requires Authentication Token in Authorization Header

### Success Response (200 OK)
```json
{
    "success": true,
    "message": "Captain logged out successfully"
}
```

### Error Responses (Common to all endpoints)
```json
{
    "success": false,
    "errors": [
        {
            "msg": "Invalid email format",        // validation error
            "param": "email",
            "location": "body"
        }
    ]
}
```

```json
{
    "success": false,
    "message": "Unauthorized access"    // authentication error (401)
}
```

```json
{
    "success": false,
    "message": "Internal server error"  // server error (500)
}
```