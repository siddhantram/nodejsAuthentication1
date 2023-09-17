     const mongoose = require("mongoose");
     require("dotenv").config()


     mongoose.connect('mongodb+srv://sk55761826970:wetZ8R6iWkHf9pcS@cluster0.ecw2eeh.mongodb.net/AUTHENTICATION?retryWrites=true&w=majority')
         .then(() => { console.log('database conected successfully') })
         .catch((error) => { console.log('not connected database') })