const mongoose=require("mongoose");

const ArtistSchema=mongoose.Schema({

    username:{type:String,required:true},
    password:{type:String,required:true},
  

})


const Artist= mongoose.model("artist",ArtistSchema);

module.exports=Artist;