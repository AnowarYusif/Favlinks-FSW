const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'linksapi',
  password: 'admin',
  port: 5432,
});

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

const updateLink = async (req, res) => {
  const { id } = req.params;
  const { name, url } = req.body;
  try {
    const result = await pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3 RETURNING *', [name, url, id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteLink = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM favlinks WHERE id = $1 RETURNING *', [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getLinks,
  createLink,
  updateLink,
  deleteLink,
};
