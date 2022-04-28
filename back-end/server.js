
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const noteRouter = require('./routers/noteRouters');
const cors = require('cors');

require('dotenv').config();
const runDB = require('./db/db');

app.use(cors());
app.use(bodyParser.json());
app.use('/', noteRouter);

runDB();

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${PORT}`);
})