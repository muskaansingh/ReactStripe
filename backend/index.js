const cors = require("cors");
const express = require("express");

const stripe = require("stripe")("pk_test_51IeHKMSIiEuztJl82WPhQ1MhhojnOa0O1vL2E5fXsnRLhOFboZk6yiAO9lfgWicvhQBV88km5HHp1fAUwUCTNfI900ReqneENQ"); // enter stripe key here!
const uuid = require("uuid");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.get("/", (req,res) => {
    res.send("Working!!!")
})


//listen
app.listen(3040, () => console.log("Running on port 3040"))