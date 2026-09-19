Backend Assignment: Authentication, Authorization & Secure REST API

Build a fully functional REST API using Node.js and Express.js.

The goal of this assignment is to combine what you have learned about Express architecture, middleware, validation, authentication, authorization, security, and REST APIs into one working backend system.

Important: Do not use a real database yet. Use dummy/in-memory data (arrays) to simulate your database.

⸻

1. User Registration

Create a registration endpoint where new users can create an account.

Requirements

The registration endpoint should:

* Accept:
    * name
    * email
    * password
    * role
* Validate all incoming data.
* Ensure the email is valid.
* Ensure the email is not already registered.
* Hash passwords using bcrypt before storing them.
* Store the user in your dummy/in-memory database.
* Never return the user’s password in the response.

Password Requirements

A user’s password must:

* Be at least 6 characters long.
* Contain at least one uppercase letter.
* Contain at least one lowercase letter.
* Contain at least one number.
* Contain at least one special character.

Example of a valid password:

Peter@123

Example of an invalid password:

peter123

⸻

2. User Login

Create a login endpoint.

The login system should:

* Accept email and password.
* Check whether the user exists.
* Compare the supplied password with the hashed password using bcrypt.
* Return an appropriate error for invalid credentials.
* Generate a JWT token after successful authentication.
* Return the token to the client.

Example:

POST /api/auth/login

⸻

3. Authentication Middleware

Create an authentication middleware that protects private routes.

The middleware should:

* Check for a JWT in the request.
* Verify the token.
* Reject requests without a token.
* Reject invalid or expired tokens.
* Identify the authenticated user.
* Attach the authenticated user’s information to req.user.

Example:

Authorization: Bearer <token>

⸻

4. Role-Based Authorization

Implement role-based access control.

Your system should have at least two roles:

admin
user

Create authorization middleware that checks whether the authenticated user has the required role.

For example:

Admin → Can manage products
User  → Can only view products

A normal user attempting to perform an admin-only action should receive:

403 Forbidden

⸻

5. Product API

Create a dummy product database using an in-memory array.

Each product should contain information such as:

id
name
description
price

Create the following endpoints:

Get Products

GET /api/products

Both admin and user roles should be able to view all products.

Add Product

POST /api/products

Only an admin can add products.

Update Product

PUT /api/products/:id

Only an admin can update products.

Delete Product

DELETE /api/products/:id

Only an admin can delete products.

⸻

6. Access Control

Your API should behave like this:

Action	Admin	User
Register	✅	✅
Login	✅	✅
View products	✅	✅
Add product	✅	❌
Update product	✅	❌
Delete product	✅	❌

⸻

7. Backend Security

Make sure your backend follows basic security practices.

You should:

* Hash passwords with bcrypt.
* Never store plain-text passwords.
* Never return passwords in API responses.
* Store your JWT secret in an environment variable.
* Validate incoming user input.
* Sanitize/handle unexpected input appropriately.
* Use appropriate HTTP status codes.
* Protect private routes with authentication middleware.
* Protect admin routes with authorization middleware.
* Do not expose sensitive information in error responses.

⸻

Bonus Features ⭐

The following are optional but encouraged.

1. Rate Limiting

Add rate limiting to prevent users from sending too many requests within a short period.

Consider applying stricter rate limiting to:

POST /api/auth/login
POST /api/auth/register

⸻

2. Logger

Implement a logging system that records important API activity, such as:

HTTP method
Request URL
Status code
Timestamp

Example:

POST /api/auth/login - 200 - 19:32:10

⸻

3. Global Error Handling

Create a centralized error-handling middleware.

Instead of handling errors separately in every route, your application should be able to pass errors to one global error handler.

Example response:

{
  "success": false,
  "message": "Something went wrong"
}

The server should not expose unnecessary internal information such as stack traces or sensitive implementation details to users.

⸻

Expected Project Flow

Your final backend should roughly follow this flow:

                ┌──────────────┐
                │   Register   │
                └──────┬───────┘
                       ↓
                Validate Input
                       ↓
                 Hash Password
                       ↓
               Dummy User DB
                       │
                       ↓
                  ┌────────┐
                  │ Login  │
                  └───┬────┘
                      ↓
              Verify Credentials
                      ↓
                 Generate JWT
                      ↓
              Protected Request
                      ↓
             Authentication
                Middleware
                      ↓
              Authorization
                Middleware
                      ↓
              ┌───────┴────────┐
              ↓                ↓
            Admin             User
              ↓                ↓
       CRUD Products       View Products

Deliverables

Submit:

1. Complete backend source code.
2. Organized Express project structure.
3. Registration and login functionality.
4. Input validation.
5. Password hashing with bcrypt.
6. JWT authentication.
7. Role-based authorization.
8. Dummy users database.
9. Dummy products database.
10. Complete product CRUD API.
11. Proper HTTP status codes and API responses.
12. .env configuration for sensitive values.
13. API testing using Postman or Thunder Client.
14. A README.md explaining:

* How to install the project.
* How to configure environment variables.
* How to start the server.
* Available API endpoints.
* How to test authentication and authorization.

Bonus

* Rate limiting
* Request logging
* Global error handling

Focus: Write clean, organized, secure, and maintainable backend code. Don’t just make the endpoints work — structure the application so that another developer can easily understand and maintain it.