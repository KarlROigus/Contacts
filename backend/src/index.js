const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;
const personRouter = require('./routers/person')
const contactRouter = require('./routers/contact')
const contactTypeRouter = require('./routers/contactType')

app.use(cors());
app.use(express.json());
app.use(personRouter);
app.use(contactRouter);
app.use(contactTypeRouter);


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
 })

 app.listen(port, () => {
    console.log("app running now");
 })