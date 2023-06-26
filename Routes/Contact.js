const express = require("express")
const Contact = require("../models/Contact")
const { createcontact, raedContact, deletecontact, updateContact, getOneContact } = require("../Controllers/Contact")


const contactRouter = express.Router()

contactRouter.post("/createcontact",createcontact)

contactRouter.get("/raedContact",raedContact)

contactRouter.delete("/deletecontact/:id",deletecontact)

contactRouter.put("/updateContact/:id",updateContact)

contactRouter.get("/getOneContact/:id",getOneContact)

module.exports = contactRouter