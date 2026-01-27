const express = require('express');
 const cors = require('cors');

const app = express();
const { collection, collectionMessage } = require('./config/mongo');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(8080, () => {

    console.log("Server started on port : 8080");
    
});