const express = require("express");

const app = express();

const port = 4000;
// adding malware for runnimg on platform before going into the next step
app.use((req, res, next) => {
    console.log("hooo from middelware");
// here next() is used for terminating the malware from app.use and goes to next requied method
    next();
});
// its basically used as a translator for conversion of jason files
app.use(express.json());


// get is used to retrive the propertis of object or variable
app.get("/", (req, res) => {
    console.log(req.body);
// here / represent the routes
    res.send("hiiii from express app");
});

app.get("/login", (req, res) => {
    res.send("hii from login");
});
// listen is used create a listener in specific port
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});
