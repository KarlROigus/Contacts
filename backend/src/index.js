const express = require('express');

const app = express();
const port = 3000;
const personRouter = require('./routers/person')

app.use(express.json());
app.use(personRouter);


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
 })


 app.listen(port, () => {
    console.log("app running now");
 })