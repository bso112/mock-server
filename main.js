const express = require('express');
const app = express();
const port = 8080
app.get('/mockData', (req, res) => {
    res.json(null);
});

app.listen(port, () => {
    console.log(`server is listening at localhost: ${port}`);
});