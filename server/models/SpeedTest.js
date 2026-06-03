const mongoose=

require("mongoose");

const speedSchema=

new mongoose.Schema({

location:{

type:{

type:String,

enum:["Point"],

default:"Point"

},

coordinates:{

type:[Number],

required:true

}

},

download:Number,

upload:Number,

ping:Number,

deviceId:String

},

{

timestamps:true

}

);

speedSchema.index({

location:"2dsphere"

});

module.exports=

mongoose.model(

"SpeedTest",

speedSchema

);