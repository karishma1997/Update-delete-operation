const express = require('express');
const bodyparser = require('body-parser');
const PORT = require('dotenv').config();

var app = express();
app.use(bodyparser.json());


require("./model/tableCreation");


require("./router/router")(app);


const port = process.env.PORT || PORT;
app.listen(port, () => console.log(`Listening on port ${port}..`));
