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

app.get('/', async (req, res) => {
    const client = await pool.connect();
    const result = await client.query('SELECT * from test_table');
    const results = JSON.stringify(result.rows[0]);
    res.send(results);
});

app.listen(port, () => {
    console.log(`word api listening on port ${port}`);
})