const express = require('express');
const app = express();

const port = 8000;

app.use(express.json(), express.urlencoded({extended:true}));

require('./server/routes/soul.routes')(app);

app.listen(port, () => console.log(`Listening on ${port} 🍡🍡🍡`));