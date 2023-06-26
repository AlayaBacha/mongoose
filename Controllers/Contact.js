const Contact = require("../models/Contact")

exports.createcontact=async(req,res)=>{
    
        try {
             
            const found = await Contact.findOne({email:req.body.email})
            // console.log(found)
            if(found){
               return res.status(400).send("Email already exists")
            }
    
            const newContact = new Contact(req.body)
    
            await newContact.save()
    
            res.status(200).send({Msg : "User added",newContact})
        } catch (error) {
            res.status(500).send("could not add conatact")
        }
    }

exports.raedContact=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({Msg:"Contacts List",contacts})
    } catch (error) {
        res.status(500).send("could not get conatacts")
    }
}

exports.deletecontact=async(req,res)=>{
    try {
       const{id} = req.params
       await Contact.findByIdAndDelete(id)
       res.status(200).send({Msg:"contact deleted"}) 
    } catch (error) {
        res.status(500).send("could not delete conatact")
    }

}

exports.updateContact=async(req,res)=>{
    try {
        const{id} = req.params
        await Contact.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({Msg : "contact updated"})
    } catch (error) {
        res.status(500).send("could not update conatact")
    }

}

exports.getOneContact=async(req,res)=>{
    try {
        const{id} = req.params
        const onecontact = await Contact.findById(id)
        res.status(200).send({Msg : "Contact", onecontact}) 
    } catch (error) {
        res.status(500).send("could not get conatact")
    }

}
