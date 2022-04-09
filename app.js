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

const corsOptions = {
    origin: 'https://spa-he-jmg.github.io/Assignment-4/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    const client = await pool.connect();
    const result = await client.query('SELECT * from test_table');
    res.json(result.rows);
});

app.listen(port, () => {
    console.log(`word api listening on port ${port}`);
})