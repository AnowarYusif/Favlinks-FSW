const Pool = require('pg').Pool
const pool = new Pool({
user: 'admin',
host: 'localhost',
database: 'favlinks',
password: 'admin',
port: 5432,
})