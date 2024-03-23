const express = require('express');
const app = express();
require('dotenv').config()
const {db}= require("./Database/DB");
const cors = require('cors')
const port = 5000;
db();
const user = require("./Route/userRoute");
const cookieParser = require('cookie-parser');
const all = require('./Route/AllRoute')



app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/user",user)
app.use("/all",all)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})