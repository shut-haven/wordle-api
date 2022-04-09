const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/', async (req, res) => {
    const client = await pool.connect();
    const result = await client.query('SELECT * from test_table');
    res.json(result.rows);
});

app.listen(port, () => {
    console.log(`word api listening on port ${port}`);
})