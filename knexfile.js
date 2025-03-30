const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database: 'neondb',
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
