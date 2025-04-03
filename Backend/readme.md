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


# /maps/get-coordinates Endpoint Documentation

## Description
The `/maps/get-coordinates` endpoint is used to get the coordinates (latitude and longitude) of a given address. This endpoint requires the user to be authenticated.

## HTTP Method
GET

## URL
/maps/get-coordinates

## Authentication
This endpoint requires a Bearer token for authentication. The token should be included in the `Authorization` header of the request.

### Headers
- **Authorization**: Bearer token required

#### Example Header
```
Authorization: Bearer <your_token_here>
```

## Query Parameters
- **address**: string, required, minimum 3 characters.

### Example Query Parameters
```
/maps/get-coordinates?address=562/11-A
```

## Responses

### Success
- **Status Code:** 200 OK  
- **Body:** Returns a JSON object containing the coordinates of the address.

#### Example Success Response
```json
{
    "ltd": 12.9716,
    "lng": 77.5946
}
```

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.

#### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid address",
            "param": "address",
            "location": "query"
        }
    ]
}
```

### Unauthorized Error
- **Status Code:** 401 Unauthorized  
- **Body:** Returns a JSON object indicating that the user is not authenticated.

#### Example Unauthorized Error Response
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

### Internal Server Error
- **Status Code:** 500 Internal Server Error  
- **Body:** Returns a JSON object indicating that an internal server error occurred.

#### Example Internal Server Error Response
```json
{
    "success": false,
    "message": "Internal server error"
}
```

# /maps/get-distance-time Endpoint Documentation

## Description
The `/maps/get-distance-time` endpoint is used to get the distance and time between two locations. This endpoint requires the user to be authenticated.

## HTTP Method
GET

## URL
/maps/get-distance-time

## Authentication
This endpoint requires a Bearer token for authentication. The token should be included in the `Authorization` header of the request.

### Headers
- **Authorization**: Bearer token required

#### Example Header
```
Authorization: Bearer <your_token_here>
```

## Query Parameters
- **origin**: string, required, minimum 3 characters.
- **destination**: string, required, minimum 3 characters.

### Example Query Parameters
```
/maps/get-distance-time?origin=562/11-A&destination=Kochipukur
```

## Responses

### Success
- **Status Code:** 200 OK  
- **Body:** Returns a JSON object containing the distance and time between the origin and destination.

#### Example Success Response
```json
{
    "distance": {
        "text": "4.5 km",
        "value": 4500
    },
    "duration": {
        "text": "15 mins",
        "value": 900
    }
}
```

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.

#### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid origin address",
            "param": "origin",
            "location": "query"
        },
        {
            "msg": "Invalid destination address",
            "param": "destination",
            "location": "query"
        }
    ]
}
```

### Unauthorized Error
- **Status Code:** 401 Unauthorized  
- **Body:** Returns a JSON object indicating that the user is not authenticated.

#### Example Unauthorized Error Response
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

### Internal Server Error
- **Status Code:** 500 Internal Server Error  
- **Body:** Returns a JSON object indicating that an internal server error occurred.

#### Example Internal Server Error Response
```json
{
    "success": false,
    "message": "Internal server error"
}
```

# /maps/get-suggestions Endpoint Documentation

## Description
The `/maps/get-suggestions` endpoint is used to get autocomplete suggestions for a given input. This endpoint requires the user to be authenticated.

## HTTP Method
GET

## URL
/maps/get-suggestions

## Authentication
This endpoint requires a Bearer token for authentication. The token should be included in the `Authorization` header of the request.

### Headers
- **Authorization**: Bearer token required

#### Example Header
```
Authorization: Bearer <your_token_here>
```

## Query Parameters
- **input**: string, required, minimum 3 characters.

### Example Query Parameters
```
/maps/get-suggestions?input=Kochi
```

## Responses

### Success
- **Status Code:** 200 OK  
- **Body:** Returns a JSON object containing the autocomplete suggestions.

#### Example Success Response
```json
[
    {
        "description": "Kochi, Kerala, India",
        "place_id": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw"
    },
    {
        "description": "Kochi, Japan",
        "place_id": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw"
    }
]
```

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.

#### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid input",
            "param": "input",
            "location": "query"
        }
    ]
}
```

### Unauthorized Error
- **Status Code:** 401 Unauthorized  
- **Body:** Returns a JSON object indicating that the user is not authenticated.

#### Example Unauthorized Error Response
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

### Internal Server Error
- **Status Code:** 500 Internal Server Error  
- **Body:** Returns a JSON object indicating that an internal server error occurred.

#### Example Internal Server Error Response
```json
{
    "success": false,
    "message": "Internal server error"
}
```



# /rides/get-fare Endpoint Documentation

## Description
The `/rides/get-fare` endpoint is used to calculate the fare for a ride based on the provided pickup and destination locations. This endpoint requires the user to be authenticated.

## HTTP Method
GET

## URL
/rides/get-fare

## Authentication
This endpoint requires a Bearer token for authentication. The token should be included in the `Authorization` header of the request.

### Headers
- **Authorization**: Bearer token required

#### Example Header
```
Authorization: Bearer <your_token_here>
```

## Query Parameters
- **pickup**: string, required, minimum 3 characters.
- **destination**: string, required, minimum 3 characters.

### Example Query Parameters
```
/rides/get-fare?pickup=562/11-A&destination=Kochipukur
```

## Responses

### Success
- **Status Code:** 200 OK  
- **Body:** Returns a JSON object containing the fare for different vehicle types.

#### Example Success Response
```json
{
    "auto": 109.30,
    "car": 193.30,
    "moto": 65.17
}
```

### Validation Error
- **Status Code:** 400 Bad Request  
- **Body:** Returns a JSON object with an `errors` array describing validation issues.

#### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid pickup address",
            "param": "pickup",
            "location": "query"
        },
        {
            "msg": "Invalid destination address",
            "param": "destination",
            "location": "query"
        }
    ]
}
```

### Unauthorized Error
- **Status Code:** 401 Unauthorized  
- **Body:** Returns a JSON object indicating that the user is not authenticated.

#### Example Unauthorized Error Response
```json
{
    "success": false,
    "message": "Not authenticated"
}
```

### Internal Server Error
- **Status Code:** 500 Internal Server Error  
- **Body:** Returns a JSON object indicating that an internal server error occurred.

#### Example Internal Server Error Response
```json
{
    "success": false,
    "message": "Internal server error"
}
``` 