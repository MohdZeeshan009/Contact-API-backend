

const express=require('express');
const router=express.Router();
const contactControllers=require('../controllers/contactControllers')

router.get('/contacts', contactControllers.getAllContacts )
.get('/contacts/:id', contactControllers.getContact)
.post('/contacts', contactControllers.createContact)
.put('/contacts/:id', contactControllers.updateContact)
.delete('/contacts/:id', contactControllers.deleteContact);

exports.router=router;