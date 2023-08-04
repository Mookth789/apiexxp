const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cors = require('cors');


app.use(cors())
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`mY app listening at http://localhost:${port}`);
});


const morgan = require('morgan')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')


const { readdirSync } = require('fs')
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')


connectDB()

app.use(morgan('dev'))
app.use(bodyParse.json({ limit: '10mb' }))

// Route 3
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))

