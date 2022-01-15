
const Artist=require("../models/artist");
const express=require("express")
const route=express.Router();


//sign in
route.post("/signin",async(req,res)=>{

    try{
        const data=await Artist.find({username:req.body.username }).lean().exec();
   

        if(data)
        {
            return res.status(200).json(data);
        }else{
            return res.status(200).json("invalid id or password");
        }
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
    
})




//sign up
route.post("/signup",async(req,res)=>{
    
    const data=await  Artist.find({username:req.body.username})

    if(!data)
    {
        return res.status(200).json(data);
    }
    
    try{
        const data=await Artist.create(req.body);

        return res.status(201).json(data);
    }
    catch(err){
        return res.status(400).json("something went wrong",err)
    }
})


module.exports=route;

