const express=require("express")
// const app = require("..")
const router=express.Router()
const Bodycare=require("../models/bodyCare.model")





router.get("",async(req,res)=>{
    try {
      const bodyCare= await  Bodycare.find().lean().exec()
      return res.status(200).send(bodyCare)
    } catch (err) {
        return res.status(500).send({message:message.err})
    }
})



module.exports=router