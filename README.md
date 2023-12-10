
# REST API for Buyers and Sellers

This repository contains a Node.js-based REST API for buyers and sellers to register, manage catalogs, create orders, and view orders. It uses a MongoDB database for data storage and provides various endpoints for different functionalities.


## Features

- Installation
- Database Configuration
- API Endpoints


## Installation
To run this project on your local machine, follow these steps:
- Clone the repository:
```bash
  git clone https://github.com/Prateek043/buyer-seller-APIs.git

```
- Change into the project directory:
```bash
  cd buyer-seller-api

```

- Install dependencies:
```bash
  npm start

```
The API will be accessible at http://localhost:5000

## Database Configuration

This project uses a MongoDB database for data storage. You need to configure your database connection. Create a .env file in the project's root directory and add the following environment variables:

env
```
PORT=5000
MONGO_URL=Your MongoDB URL
SECRET_KEY=Your Secret Key
```
Make sure to replace the placeholders with your actual database connection details.
## API Reference

#### Register Buyer/seller

```http
  POST /api/auth/register
```
Register a user (accepts username, password, type of user - buyer or seller).
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Login Buyer

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email,password`      | `string` | **Required**. email of item to fetch |

#### Buyers APIs

```http
  GET /api/buyer/list-of-sellers
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Auth`      | `string` | Get a list of all sellers. |

```http
 GET /api/buyer/seller-catalog/:seller_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `seller_id`      | `string` | Get a list of all sellers catlog. |

```http
 POST /api/buyer/create-order/:seller_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `seller_id`      | `string` | Send a list of items to create an order for the seller with id = seller_id. |


#### Seller APIs

```http
  POST /api/seller/create-catalog
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Auth`      | `string` | Send a list of items to create a catalog for a seller. |


```http
  GET /api/seller/orders
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Auth`      | `string` |Retrieve the list of orders received by a seller.|



## Usage/Examples
Once the application is up and running, you can use tools like Postman or curl to interact with the API. Here are some sample requests:
#### Register a user (buyer):
```javascript
POST http://localhost:5000/api/auth/register
Body:
{
  "username": "buyer1",
  "password": "password123",
  "type": "buyer"
}

```

#### Login and get an authentication token:
```javascript
POST http://localhost:5000/api/auth/login
Body:
{
  "username": "buyer1",
  "password": "password123"
}
```
#### Get a list of sellers:
```javascript
GET http://localhost:5000/api/buyer/list-of-sellers
```
#### Get a seller's catalog by seller_id:
```javascript
GET http://localhost:5000/api/buyer/seller-catalog/1
```

#### Create an order for a seller:
```javascript
POST http://localhost:5000/api/buyer/create-order/1
Body:
{
  "items": [
    {
      "name": "Product 1",
      "price": 10.99
    },
    {
      "name": "Product 2",
      "price": 19.99
    }
  ]
}
```
#### Create a catalog as a seller:
```javascript
POST http://localhost:5000/api/seller/create-catalog
Body:
{
  "items": [
    {
      "name": "Product A",
      "price": 5.99
    },
    {
      "name": "Product B",
      "price": 14.99
    }
  ]
}

```

#### Get a list of orders received by a seller:

```javascript
GET http://localhost:3000/api/seller/orders

```
Please make sure to replace the sample data with actual data when making requests.
## Tech Stack

**Server:** Node, Express

**DataBase:** MongoDB

