const mongoose=require("mongoose");
const Album=require("../models/albums");
const express=require("express")
const route=express.Router();


//get all the ablms
route.get("",async(req,res)=>{

    try{
        const data=await Album.find().lean().exec();
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
    
})

//Get albm by ID
route.get("/:id",async(req,res)=>{
    try{
        const data=await Album.findById(req.params.id).lean().exec();
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
   
})

//get album by artist name
route.get("/artist/:artist",async(req,res)=>{

    try{
        const data=await Album.find({artist:req.params.artist}).lean().exec();
        return res.status(201).json(data);
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
})

//post album
route.post("",async(req,res)=>{
    
    try{
        const data=await Album.create(req.body);

        return res.status(201).json(data);
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
})


module.exports=route;

