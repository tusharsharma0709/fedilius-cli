const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const bodyparser =require("body-parser");
const cors=require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((cors('*')));
// Routes
app.get('/', (req, res) => {
  res.send("Hello");
});
const routes=require("./routes/index.routes")
// Include the authController routes
app.use('/api', routes);


// Start the server
require("dotenv").config();
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
