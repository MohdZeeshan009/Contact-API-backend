const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const contactRouter=require('./routes/contactRoutes');
const { errorHandler } = require("./middleware/errorHandler");

// Body parser
app.use(express.json());


// Router
app.use('/api', contactRouter.router)
app.use(errorHandler)


app.listen(5000, () => {
  console.log(`Server is running on port no. ${port}`);
});
