const mongoose=require("mongoose");

const AlbumSchema=mongoose.Schema({

    artist:{type:String,required:true},
    album_name:{type:String,required:true},
    songs:[{type:String,required:true}],
    year:{type:Number,required:true},
    genre:{type:String,required:true}

})


const Album= mongoose.model("album",AlbumSchema);

module.exports=Album;