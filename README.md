# Payment Gateway Backend

This is the backend repository for the Payment Gateway project. It handles authentication, transaction management, and interaction with the MongoDB database.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript on the server side.
- **Express.js**: Web application framework for Node.js, used for building web servers and APIs.
- **Mongoose**: ODM library for MongoDB and Node.js, providing a schema-based solution to model application data.
- **jsonwebtoken**: Library to work with JSON Web Tokens (JWT) for authentication and information exchange.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **body-parser**: Middleware for parsing incoming request bodies in a middleware.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **Zod**: TypeScript-first schema declaration and validation library for data validation.

## Project Setup

Follow these steps to get the backend server up and running:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ankush5608/Payment_Gateway_Backend.git
   cd Payment_Gateway_Backend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the application**  
   ```bash
   node index.js
   ```

4. The server should now be running on the specified `PORT` (default is 3000).

## Environment Variables

Create a `.env` file in the root directory of the project. Below is a sample template for the environment variables required:

```env
PORT=3000
SECRET_KEY="your_secret_key_here"
MONGO_DB_URL="your_mongodb_connection_string_here"
```

- **PORT**: The port on which the server will run.
- **SECRET_KEY**: Secret key used for signing JWT tokens.
- **MONGO_DB_URL**: MongoDB connection string for connecting to the database.
