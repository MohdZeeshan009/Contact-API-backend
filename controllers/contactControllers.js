
// @desc get All contact
// @route GET /api/contacts
// @access public


exports.getAllContacts=(req, res)=>{
    res.json({massage:"My contact"});
}

// @desc get contact
// @route GET /api/contacts/:id
// @access public

const asyncHandler=require('express-async-handler');


exports.getContact=asyncHandler(async(req, res)=>{
    res.status(200).json({massage: `get contact successfully of ${req.params.id}`})
});

// @desc create new contact
// @routes POST /api/contacts
// @access public

exports.createContact=asyncHandler(async(req, res)=>{
   console.log(req.body);
   const {name, number}=req.body;
   if(!name || !number){
    res.status(400)
    throw new Error("All field is mandatory")
   }
    res.status(201).json(req.body)
});

// @desc update new contact
// @routes PUT /api/contacts/:id
// @access public

exports.updateContact=asyncHandler(async(req, res)=>{
    res.status(201).json({massage: `Contact updated successfully of ${req.params.id}`})
});

// @desc Delete contact
// @routes DELETE /api/contacts/:id
// @access public

exports.deleteContact=asyncHandler(async(req, res)=>{
    res.status(201).json({massage: `Contact delete successfully of ${req.params.id}`})
});

