const mongoose = require('mongoose')


const Event = new mongoose.Schema (
    {
        imageEvent : {
            type : String , 
        } , 
        nameEvent : { 
            type :String ,
            required : true ,
        },

        description : { 
            type :String ,
            required : true , 
        } , 

        dateEvent : { 
            type : Date , 
        }
        
    }
) 


module.exports = mongoose.model ("event" ,Event ) 
