const mongoose = require('mongoose');

// Creating a user Schema 



const userSchema = new mongoose.Schema({

    email:{
        type:String ,
        required:true ,
        unique:true 
    },
    password :{
        type :String ,
        required:true 
    },
    name :{
        type :String ,
        required :true 
    }

},{
    timestamps:true    ///   Timestamps will be there i.e. Created at and updated at
});

const user = mongoose.model('User',userSchema);    // Telling mongoose the is a mdoel 

module.exports = user ;