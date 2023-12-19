const Pool = require('pg').Pool
const pool = new Pool({
user: 'admin',
host: 'localhost',
database: 'favlinks',
password: 'admin',
port: 5432,
})

const getLinks = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM favlinks ORDER BY id ASC');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const createLink = async (req, res) => {
    const { name, url } = req.body;
    try {
      const result = await pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *', [name, url]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  module.exports = {
    getLinks,
    createLink,
  };
  