# REST API with Node.js, Mongoose, TypeScript & JWT

### Replace your own Public and Private Key

## Concepts

- REST API principals
  - CRUD
  - HTTP methods
- [JWT & refresh tokens]{
  ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
  # Don't add passphrase
  openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
  cat jwtRS256.key
  cat jwtRS256.key.pub
  }
- Request validation

## Technologies

- Node.js
- MongoDB with Mongoose
- TypeScript
- Express.js & Express.js middleware
- Zod validation

## Data flow

![](./diagrams/data-flow.png)

## Access & refresh token flow

![](./diagrams/refresh-token-flow.png)
