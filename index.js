const express = require('express')
const app = espress();

app.get ('/', (req, res) => res.send('Hello Geekhunter!'));

app.listen(process.env.PORT // 3000);
