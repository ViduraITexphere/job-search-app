//These lines of code set up an Express.js server that listens for incoming HTTP requests on a specified port.

//1-The first line imports the Express.js library, which is a popular web framework for Node.js.
const express = require("express");
const mongoose = require('mongoose');
//7-Import body-parser library
const bodyParser = require('body-parser');
const cors = require('cors');

//2-The second line creates a new instance of the Express application and assigns it to the variable app.
const app = express();
const storyRoutes = require('./routes/Story');

//8-app middleware
app.use(bodyParser.json());
app.use(cors());

//9-Route middleware
app.use(storyRoutes);

//5-Database connection
const DB_URL = 'mongodb+srv://viduraitexphere:mypass123@mernapp.uwhqeyp.mongodb.net/?retryWrites=true&w=majority'

//env.PORT environment variable (if it exists) or the default port number 5000.
//3-The third line sets the PORT constant to either the value of the process.
const PORT = process.env.PORT || 5000;


//6-Database connection-callback function
//The mongoose.connect() method is used to connect to the MongoDB database. 
//The DB_URL variable contains the URL of the MongoDB database. The mongoose.
//connect() method returns a promise that resolves when the connection is established successfully or rejects if there is an error.
//The then() method is called if the connection is established successfully. 
//It takes a callback function that logs a message to the console indicating that the connection was successful.
mongoose.connect(DB_URL)
    .then(()=>{
        console.log('MongoDB connected');
    })
    .catch((err)=>{
        console.log('MongoDB connection error: ', err);
    });

//4-The fourth line starts the server and listens for incoming requests on the specified port. 
//The app.listen() method takes two arguments: the first argument is the port number to listen on, 
//and the second argument is a callback function that is called when the server starts successfully.
//In this case, the callback function logs a message to the console to indicate that the server has started.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
