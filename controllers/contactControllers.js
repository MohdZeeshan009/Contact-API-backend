
// @desc get All contact
// @route GET /api/contacts
// @access public


exports.getAllContacts=(req, res)=>{
    res.json({massage:"My contact"});
}

// @desc get contact
// @route GET /api/contacts/:id
// @access public

exports.getContact=(req, res)=>{
    res.status(200).json({massage: `get contact successfully of ${req.params.id}`})
}

// @desc create new contact
// @routes POST /api/contacts
// @access public

exports.createContact=(req, res)=>{
   console.log(req.body);
    res.status(201).json({massage: "contact created"})
}

// @desc update new contact
// @routes PUT /api/contacts/:id
// @access public

exports.updateContact=(req, res)=>{
    res.status(201).json({massage: `Contact updated successfully of ${req.params.id}`})
}

// @desc Delete contact
// @routes DELETE /api/contacts/:id
// @access public

exports.deleteContact=(req, res)=>{
    res.status(201).json({massage: `Contact delete successfully of ${req.params.id}`})
}

