const express=require("express")

const router=express.Router()

const Serum=require("../models/serum.model")



router.get("",async(req,res)=>{
    try {
      const serum= await  Serum.find().lean().exec()
      return res.status(200).send(serum)
    } catch (err) {
        return res.status(500).send({message:message.err})
    }
})




module.exports=router