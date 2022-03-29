const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('wordle api index');
});

app.listen(port, () => {
    console.log(`word api listening on port ${port}`);
})