
## API Endpoints

### Contracts

- `GET /contracts` - Get all contracts with pagination and filtering
  - Query params:
    - `status`: Filter by status (pending, finalized, canceled)
    - `client_name`: Search by client name
    - `contract_id`: Filter by contract ID
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 10)

- `POST /contracts` - Create a new contract
  - Body:
    ```json
    {
      "client_name": "string",
      "contract_id": "string",
      "status": "pending" // or "finalized" or "canceled"
    }
    ```

- `PUT /contracts/:id` - Update contract status
  - Body:
    ```json
    {
      "status": "pending" // or "finalized" or "canceled"
    }
    ```

- `DELETE /contracts/:id` - Delete a contract

## Real-time Updates

The API uses Socket.IO for real-time updates. When a contract is updated, all connected clients receive a `contractUpdated` event with the updated contract data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Run migrations:
```bash
npx knex migrate:latest
```

4. Run seeds:
```bash
npx knex seed:run
```

5. Start the server:
```bash
npm run dev
```

## Contract Management API

A RESTful API for managing contracts with real-time updates using Socket.IO.

## Features

- CRUD operations for contracts
- Real-time updates using Socket.IO
- Pagination and filtering
- Status tracking (pending, finalized, canceled)
- PostgreSQL database integration

## Tech Stack

- Express.js
- PostgreSQL
- Knex.js (ORM)
- Socket.IO
- Node.js

## Project Structure

```
.
├── DB
│   └── DB.js
├── migrations
│   └── 20250327041526_create_contracts_table.js
├── README.md
├── Router
│   └── Contracts.Route.js
├── seeds
│   └── initial_contracts.js
├── Controller
│   └── Contracts.js
├── Middleware
│   └── AsycHandler.js
├── .env
├── knexfile.js
├── index.js
└── package.json
```

## License
ISC
