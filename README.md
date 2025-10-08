# Stock Price Tracker API

A Node.js API for fetching real-time stock prices.

## Features

*   Fetches real-time stock prices from a financial data provider.
*   User authentication with JWT.
*   API endpoints for registering, logging in, and retrieving stock prices.

## Technologies Used

*   Node.js
*   Express.js
*   JSON Web Token (JWT)
*   Axios (for making HTTP requests to the financial data provider)
*   dotenv (for managing environment variables)
*   bcrypt (for password hashing)
*   jsonwebtoken (for JWT generation)
*   mongoose (for MongoDB interaction)

## Folder Structure


├── server.js
├── routes
│   ├── auth.js
│   └── stocks.js
├── controllers
│   ├── authController.js
│   └── stockController.js
├── models
│   └── User.js
├── middlewares
│   └── authMiddleware.js
├── utils
│   └── apiFeatures.js
├── .env
└── package.json


## Setup

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Create a `.env` file and configure the necessary environment variables (see `.env.example`).
4.  Start the server: `npm start`

## Endpoints

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Log in an existing user.
*   `GET /api/stocks/:symbol`: Get the real-time price for a given stock symbol (requires authentication).

## Environment Variables

*   `PORT`: The port the server will run on (default: 3000).
*   `JWT_SECRET`: A secret key for signing JWTs.
*   `FINANCIAL_DATA_API_KEY`: API key for accessing the financial data provider.
*   `FINANCIAL_DATA_API_URL`: URL of the financial data provider API.
*   `MONGO_URI`: MongoDB connection string.

## Note

Replace `FINANCIAL_DATA_API_KEY` and `FINANCIAL_DATA_API_URL` with the actual credentials and URL for your chosen financial data provider.
