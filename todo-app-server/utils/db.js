const { Pool } = require("pg");
const config = require("./config");

const pool = new Pool({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
});

module.exports = {
  async query(query, params) {
    try {
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      const currentDate = new Date();
      const timestamp = currentDate.toISOString();
      console.log(`[${timestamp}] : An error occurred executing query: ${query}; ERROR: ${error.detail}`);
    }
  }
};