const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Connected to MongoDB!'))
    .catch( (err) => console.log('Error: ' + err));

const accountRouter = require('./routes/account');
app.use('/account', accountRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}.`));