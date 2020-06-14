const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Guys, this is my default page!  :)')
});

app.listen(3001)