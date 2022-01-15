const express=require("express");

const mongoose=require("mongoose");

const connect =require("../src/config/db");
const albumController=require("../src/controllers/album.controlller");
const artistController=require("../src/controllers/artist.controller")
const app=express();

app.use(express.json());


app.listen(2345,async()=>{

    await connect().then(
        console.log("connected on port no 2345")
    )

})

app.use("/albums",albumController)
app.use("/artist",artistController)