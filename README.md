
# Contract Management System

A real-time contract management system with WebSocket integration for live updates.

## Live Demo
- Frontend: https://tractuslabs.vercel.app
- Backend: https://27-march-roan.vercel.app

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: PostgreSQL (Neon)
- **Real-time**: Socket.IO
- **ORM**: Knex.js

## Features

- CRUD operations for contracts
- Real-time updates using Socket.IO
- Pagination and filtering
- Status tracking (pending, finalized, canceled)
- PostgreSQL database integration

## API Endpoints

### Contracts

- `GET /api/contracts` - Get all contracts with pagination and filtering
  - Query params:
    - `status`: Filter by status (pending, finalized, canceled)
    - `client_name`: Search by client name
    - `contract_id`: Filter by contract ID
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 10)

- `POST /api/contracts` - Create a new contract
  - Body:
    ```json
    {
      "client_name": "string",
      "contract_id": "string",
      "status": "pending"
    }
    ```

- `PUT /api/contracts/:id` - Update contract status
  - Body:
    ```json
    {
      "status": "pending",
      "client_name": "string"
    }
    ```

- `DELETE /api/contracts/:id` - Delete a contract

## WebSocket Events

- `connection` - New client connected
- `contractUpdated` - Contract update notification
- `disconnect` - Client disconnected

## Environment Variables

Create a `.env` file with:

```env
# Database Configuration
DATABASE_HOST=your-neon-db-host
DATABASE_PORT=5432
DATABASE_USER=your-username
DATABASE_PASSWORD=your-password
DATABASE_NAME=your-db-name
DATABASE_URL=your-connection-string
```
